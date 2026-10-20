// Basta se juega en voz alta: el grupo valida las respuestas.
const BASTA_LETTERS = Array.from({length: 26}, (_, i) => String.fromCharCode(65 + i));
const BASTA_TURN_SECONDS = [15, 30, 45];
function bastaTurnSeconds() {
  return BASTA_TURN_SECONDS.includes(state.basta?.turnSeconds) ? state.basta.turnSeconds : 30;
}

function bastaSetTurnSeconds(seconds) {
  if (state.basta?.phase !== 'ready' || !BASTA_TURN_SECONDS.includes(seconds)) return;
  state.basta.turnSeconds = seconds;
  bastaRender();
  sfxTap();
  saveGame();
}
const BASTA_CATEGORIES = [
  'Animales', 'Frutas y verduras', 'Países y ciudades', 'Nombres de personas',
  'Comidas y bebidas', 'Profesiones y oficios', 'Objetos de la casa',
  'Películas y series', 'Cantantes y grupos musicales', 'Deportes',
  'Marcas', 'Cosas que llevas de viaje', 'Cosas que encuentras en la calle',
  'Personajes de ficción', 'Prendas y accesorios', 'Verbos y acciones',
  'Cosas que hay en una fiesta', 'Lugares que puedes visitar'
];
let bastaTimer = null;

function bastaStopTimer() {
  clearInterval(bastaTimer);
  bastaTimer = null;
}

function startBasta() {
  if (!canStartMode('basta')) return;
  const turnSeconds = bastaTurnSeconds();
  goTo('basta');
  state.currentPlayerIndex = 0;
  const previousCategory = state.basta?.category;
  const categories = BASTA_CATEGORIES.filter(c => c !== previousCategory);
  state.basta = {
    phase: 'ready', category: categories[Math.floor(Math.random() * categories.length)],
    used: [], selected: null, deadline: null, loser: null, reason: null, turnSeconds
  };
  bastaRender();
  saveGame();
}

function bastaEditCategory() {
  if (state.basta?.phase !== 'ready') return;
  state.basta.category = document.getElementById('basta-category-input').value.trim().slice(0, 80);
  saveGame();
}

function bastaRandomCategory() {
  if (state.basta?.phase !== 'ready') return;
  const choices = BASTA_CATEGORIES.filter(c => c !== state.basta.category);
  state.basta.category = choices[Math.floor(Math.random() * choices.length)];
  document.getElementById('basta-category-input').value = state.basta.category;
  sfxTap();
  saveGame();
}

function bastaBegin() {
  if (state.basta?.phase !== 'ready') return;
  const category = document.getElementById('basta-category-input').value.trim().slice(0, 80);
  if (!category) {
    showToast('Escribe una categoría o elige una al azar');
    document.getElementById('basta-category-input').focus();
    return;
  }
  state.basta.category = category;
  state.basta.phase = 'playing';
  state.basta.deadline = Date.now() + bastaTurnSeconds() * 1000;
  bastaRender();
  bastaStartTimer();
  sfxCard();
  saveGame();
}

function bastaStartTimer() {
  bastaStopTimer();
  bastaTick();
  if (state.basta?.phase === 'playing') bastaTimer = setInterval(bastaTick, 100);
}

function bastaTick() {
  if (!document.getElementById('screen-basta').classList.contains('active') || state.basta?.phase !== 'playing') return;
  const ms = state.basta.deadline - Date.now();
  if (ms <= 0) { bastaFinish('timeout'); return; }
  const seconds = Math.ceil(ms / 1000);
  const timer = document.getElementById('basta-timer');
  timer.textContent = seconds;
  timer.setAttribute('aria-label', `${seconds} segundos restantes`);
  const wheel = document.getElementById('basta-wheel');
  wheel.classList.toggle('basta-urgent', seconds <= 5);
  document.getElementById('screen-basta').classList.toggle('basta-clock-urgent', seconds <= 5);
  wheel.style.setProperty('--basta-time-left', Math.min(1, ms / (bastaTurnSeconds() * 1000)));
}

function bastaCanRespond() {
  if (!document.getElementById('screen-basta').classList.contains('active') || state.basta?.phase !== 'playing') return false;
  if (Date.now() >= state.basta.deadline) { bastaFinish('timeout'); return false; }
  return true;
}

function bastaSelectLetter(letter) {
  if (!bastaCanRespond() || !BASTA_LETTERS.includes(letter) || state.basta.used.includes(letter)) return;
  state.basta.selected = letter;
  sfxTap();
  bastaRender();
  bastaTick();
  saveGame();
}

function bastaPass() {
  if (!bastaCanRespond() || !state.basta.selected) return;
  state.basta.used.push(state.basta.selected);
  state.basta.selected = null;
  state.challengesDone++;
  if (state.basta.used.length === BASTA_LETTERS.length) { bastaFinish('complete'); return; }
  state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.players.length;
  if (state.currentPlayerIndex === 0) state.round++;
  state.basta.deadline = Date.now() + bastaTurnSeconds() * 1000;
  bastaRender();
  bastaTick();
  const wheel = document.getElementById('basta-wheel');
  wheel.classList.remove('basta-passed');
  void wheel.offsetWidth;
  wheel.classList.add('basta-passed');
  gameTimeout(() => wheel.classList.remove('basta-passed'), 480);
  sfxCard();
  saveGame();
}

function bastaWrong() {
  if (bastaCanRespond()) bastaFinish('wrong');
}

function bastaFinish(reason) {
  if (state.basta?.phase !== 'playing') return;
  bastaStopTimer();
  state.basta.phase = 'ended';
  state.basta.reason = reason;
  state.basta.loser = reason === 'complete' ? null : state.players[state.currentPlayerIndex].name;
  state.basta.deadline = null;
  if (reason === 'complete') {
    state.basta.celebration = true;
    state.basta.celebrationPending = true;
    state.players.forEach(player => {
      state.shots[player.name] = (state.shots[player.name] || 0) + 1;
    });
    closeMenu();
  } else {
    const count = randomShots();
    state.basta.penalty = {count, pending: true};
    state.shots[state.basta.loser] = (state.shots[state.basta.loser] || 0) + count;
  }
  bastaRender();
  if (reason === 'complete') sfxVictory(); else sfxWrong();
  saveGame();
  bastaShowPenalty();
}

function bastaShowPenalty() {
  const game = state.basta;
  if (game?.phase === 'ended' && game.reason === 'complete' && game.celebration && game.celebrationPending) {
    closeMenu();
    showShot('Todos los jugadores', '¡Completaron las 26 letras! Un shot para celebrar la victoria de todos.', 1, () => {
      game.celebrationPending = false;
      saveGame();
    }, {record: false, applyModifiers: false, celebration: true});
    return;
  }
  if (game?.phase !== 'ended' || !game.loser || !game.penalty?.pending ||
      !Number.isInteger(game.penalty.count) || game.penalty.count < 1 || game.penalty.count > 3) return;
  closeMenu();
  showShot(game.loser, game.reason === 'timeout' ? `BASTA — Se acabaron los ${bastaTurnSeconds()} segundos` : 'BASTA — Respuesta incorrecta',
    game.penalty.count, () => {
      game.penalty.pending = false;
      bastaRender();
      saveGame();
    }, {record: false, applyModifiers: false});
}

function bastaRender() {
  const game = state.basta;
  if (!game) return;
  const playing = game.phase === 'playing';
  if (!playing) document.getElementById('basta-wheel').classList.remove('basta-passed');
  document.getElementById('screen-basta').classList.toggle('basta-can-pass', playing && Boolean(game.selected));
  if (game.phase !== 'playing') document.getElementById('screen-basta').classList.remove('basta-clock-urgent');
  document.getElementById('basta-setup').hidden = game.phase !== 'ready';
  document.getElementById('basta-play').hidden = !playing;
  document.getElementById('basta-result').hidden = game.phase !== 'ended';
  if (game.phase === 'ready') document.getElementById('basta-category-input').value = game.category;
  document.getElementById('basta-duration-description').textContent = bastaTurnSeconds();
  document.getElementById('basta-turn-duration').textContent = `${bastaTurnSeconds()} s por turno`;
  document.querySelectorAll('input[name="basta-duration"]').forEach(input => {
    input.checked = Number(input.value) === bastaTurnSeconds();
    input.disabled = game.phase !== 'ready';
  });
  if (!playing) {
    document.getElementById('basta-timer').textContent = bastaTurnSeconds();
    document.getElementById('basta-timer').setAttribute('aria-label', `${bastaTurnSeconds()} segundos restantes`);
  }
  document.getElementById('basta-category').textContent = game.category;
  const player = state.players[state.currentPlayerIndex];
  document.getElementById('basta-player').textContent = `${player.emoji || ''} ${player.name}`.trim();

  const letters = document.getElementById('basta-letters');
  if (!letters.childElementCount) {
    BASTA_LETTERS.forEach((letter, i) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.id = `basta-letter-${letter}`;
      button.className = 'basta-letter';
      button.textContent = letter;
      const angle = -Math.PI / 2 + i * 2 * Math.PI / BASTA_LETTERS.length;
      button.style.left = `${50 + 44 * Math.cos(angle)}%`;
      button.style.top = `${50 + 44 * Math.sin(angle)}%`;
      button.onclick = () => bastaSelectLetter(letter);
      letters.appendChild(button);
    });
  }
  BASTA_LETTERS.forEach(letter => {
    const button = document.getElementById(`basta-letter-${letter}`);
    const used = game.used.includes(letter);
    button.disabled = used || !playing;
    button.classList.toggle('basta-used', used);
    button.classList.toggle('basta-chosen', game.selected === letter);
    button.setAttribute('aria-pressed', String(game.selected === letter));
    button.setAttribute('aria-label', `Letra ${letter}${used ? ', ya utilizada' : ''}`);
  });
  document.getElementById('basta-pass').disabled = !playing || !game.selected;
  document.getElementById('basta-pass-label').textContent = game.selected ? 'Pulsa para pasar' : 'Elige una letra';
  document.getElementById('basta-selected').textContent = game.selected ? `Tu respuesta con ${game.selected}` : 'para activar el botón';
  document.getElementById('basta-pass').setAttribute('aria-label', game.selected ? `Pulsa para pasar el turno. Letra ${game.selected}` : 'Elige una letra para activar el botón de pasar turno');
  document.getElementById('basta-turn-hint').textContent = game.selected
    ? `Di una respuesta con ${game.selected} y pulsa el centro antes de que el reloj llegue a cero.`
    : 'Elige una letra disponible. El reloj sigue corriendo.';
  const remaining = BASTA_LETTERS.length - game.used.length;
  document.getElementById('basta-remaining').textContent = `${remaining} letra${remaining === 1 ? '' : 's'} disponible${remaining === 1 ? '' : 's'}`;
  if (game.phase === 'ended') {
    const complete = game.reason === 'complete';
    document.getElementById('basta-result-icon').textContent = complete ? '🎉' : game.reason === 'timeout' ? '⏱️' : '✋';
    document.getElementById('basta-result-title').textContent = complete ? '¡Todos ganaron!' : `Pierde ${game.loser}`;
    document.getElementById('basta-result-reason').textContent = complete
      ? game.celebration ? '¡Completaron las 26 letras! Cada jugador toma 1 shot para celebrar. 🥂' : 'Usaron las 26 letras. ¡El grupo completó la ronda!'
      : game.reason === 'timeout' ? `No pulsó el centro antes de que terminaran sus ${bastaTurnSeconds()} segundos.` : 'El grupo marcó su respuesta como incorrecta.';
    document.getElementById('basta-result-summary').textContent = `${game.category} · ${game.used.length} de 26 letras confirmadas`;
    if (complete && game.celebration) document.getElementById('basta-result-summary').textContent += ' · Celebración: 1 shot por persona';
    if (game.penalty) document.getElementById('basta-result-summary').textContent += ` · Castigo: ${game.penalty.count} shot${game.penalty.count === 1 ? '' : 's'}`;
  }
}

function resumeBasta(saved) {
  goTo('basta');
  const valid = saved && ['ready', 'playing', 'ended'].includes(saved.phase) &&
    typeof saved.category === 'string' && saved.category.length <= 80 &&
    Array.isArray(saved.used) && saved.used.every(l => BASTA_LETTERS.includes(l)) &&
    new Set(saved.used).size === saved.used.length &&
    (saved.selected === null || (BASTA_LETTERS.includes(saved.selected) && !saved.used.includes(saved.selected))) &&
    (saved.phase !== 'playing' || (Number.isFinite(saved.deadline) && saved.used.length < 26 && saved.category.trim()));
  if (!valid) { startBasta(); return; }
  state.basta = {...saved};
  state.basta.turnSeconds = bastaTurnSeconds();
  bastaRender();
  if (saved.phase === 'playing') bastaStartTimer();
  else bastaShowPenalty();
}

document.addEventListener('visibilitychange', bastaTick);
document.addEventListener('keydown', event => {
  if (!document.getElementById('screen-basta').classList.contains('active') ||
      document.getElementById('menu-drawer').classList.contains('show') ||
      event.ctrlKey || event.metaKey || event.altKey || event.repeat ||
      event.target.closest('input, textarea, [contenteditable="true"]')) return;
  const letter = event.key.toUpperCase();
  if (BASTA_LETTERS.includes(letter)) { event.preventDefault(); bastaSelectLetter(letter); }
});
