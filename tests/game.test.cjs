const playwright = require(process.env.PLAYWRIGHT_MODULE_PATH || 'playwright');
const { chromium } = playwright;
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const url = 'file:///' + path.resolve('index.html').replaceAll('\\', '/');
const results = [];
let browser, page, errors;
const players = [
 {name:"D'Angelo",gender:'m',emoji:'🚀',score:0},
 {name:'Ana <3',gender:'f',emoji:'🌸',score:0},
 {name:'Luis',gender:'m',emoji:'🎸',score:0},
 {name:'Eva',gender:'f',emoji:'🐱',score:0}
];
async function fresh(viewport = {width:1280,height:900}) {
 if (page) await page.close();
 page = await browser.newPage({viewport});
 page.setDefaultTimeout(6000);
 errors = [];
 page.on('pageerror',e=>errors.push(e.message));
 // Las pruebas de interacción no dependen de la disponibilidad de Google Fonts.
 await page.route(/^https:\/\/fonts\.(googleapis|gstatic)\.com\//, route=>route.abort());
 await page.goto(url);
 await page.evaluate(() => {localStorage.clear(); Math.random = () => 0.9; soundEnabled = false;});
}
async function fixture(mode='truth', roster=players) {
 await page.evaluate(({roster,mode})=>{
  startNewGame(); state.players=roster; renderPlayers(); state.mode=mode; goToModes();
 },{roster,mode});
 await page.waitForTimeout(100);
 await page.locator('#screen-modes .btn-primary').click();
}
async function click(selector) { await page.locator(selector).click(); }
async function value(expression, arg) { return page.evaluate(expression, arg); }
async function shot() {
 await page.locator('#shot-confirm-btn').waitFor({state:'visible'});
 await click('#shot-confirm-btn');
}
async function test(name, fn) {
 if (process.env.TEST_FILTER && !name.toLowerCase().includes(process.env.TEST_FILTER.toLowerCase())) return;
 try {await fresh(); await fn(); assert.deepEqual(errors,[]); results.push({name,status:'PASS'}); console.log('PASS',name);}
 catch(e) {results.push({name,status:'FAIL',error:e.message,errors});console.log('FAIL',name,e.message); await page.screenshot({path:'tests/failure-'+results.length+'.png',fullPage:true}).catch(()=>{});}
}
(async()=>{
 browser=await chromium.launch({channel:'msedge',headless:true});
 try {
 await test('Alta, validación, géneros, emojis, Enter, duplicados y eliminación',async()=>{
  await click('.home-btn-main');
  await click('#btn-continue-players');
  assert.equal(await value(()=>state.players.length),0);
  await click('#screen-players .btn-secondary');
  await click('#player-modal-overlay .btn-primary');
  await page.locator('#player-modal-input').fill("D'Angelo");
  await click('#player-modal-overlay .btn-primary');
  assert.equal(await value(()=>state.players.length),0);
  for(const g of ['m','f','o']) await click('#gbtn-'+g);
  await page.locator('.emoji-btn').first().click();
  await page.locator('#player-modal-input').press('Enter');
  assert.equal(await page.locator('.player-name-text').textContent(),"D'Angelo");
  await click('#screen-players .btn-secondary');
  await page.locator('#player-modal-input').fill("d'angelo");
  await click('#gbtn-m'); await click('#player-modal-overlay .btn-primary');
  assert.equal(await value(()=>state.players.length),1);
  await page.locator('#player-modal-input').fill('Ana'); await click('#player-modal-overlay .btn-primary');
  await page.locator('.player-remove').first().click();
  assert.equal(await value(()=>state.players.length),1);
  await click('#screen-players .btn-ghost');
  assert.equal(await value(()=>document.querySelector('.screen.active').id),'screen-home');
 });
 await test('Límite de veinte jugadores y cancelación del formulario',async()=>{
  await value(()=>{startNewGame();state.players=Array.from({length:20},(_,i)=>({name:'P'+i,gender:'o',emoji:'⚡',score:0}));renderPlayers()});
  await click('#screen-players .btn-secondary');
  assert.equal(await value(()=>document.getElementById('player-modal-overlay').classList.contains('show')),false);
  await page.locator('.player-remove').first().click(); await click('#screen-players .btn-secondary');
  await page.locator('#player-modal-overlay').click({position:{x:5,y:5}});
  assert.equal(await value(()=>document.getElementById('player-modal-overlay').classList.contains('show')),false);
 });
 await test('Carrusel: ocho modos, puntos, flechas, tarjetas, teclado e intensidades',async()=>{
  await value(roster=>{startNewGame();state.players=roster;goToModes()},players);
  for(let i=0;i<8;i++){await page.locator('.cf-dot').nth(i).click();assert.equal(await value(()=>state.mode),['truth','trivia','never','who','todi','vs','impostor','basta'][i]);}
  await click('#cf-prev'); assert.equal(await value(()=>state.mode),'impostor');
  await click('#cf-next'); assert.equal(await value(()=>state.mode),'basta');
  await page.locator('.cf-dot').first().click();
  await page.keyboard.press('ArrowRight'); assert.equal(await value(()=>state.mode),'trivia');
  await page.waitForTimeout(500);
  const point = await value(()=>{
   const card=document.querySelector('.mode-card[data-mode="never"]'),r=card.getBoundingClientRect();
   for(let y=r.top+5;y<r.bottom;y+=10)for(let x=r.left+5;x<r.right;x+=10)
    if(document.elementFromPoint(x,y)?.closest('.mode-card')===card)return {x,y};
  });
  assert.ok(point,'La tarjeta lateral debe tener un área pulsable');await page.mouse.click(point.x,point.y);
  assert.equal(await value(()=>state.mode),'never');
  for(const level of [3,4,2]){await click(`[data-level="${level}"]`);assert.equal(await value(()=>state.intensity),level);}
  await page.waitForTimeout(350);await page.screenshot({path:'tests/desktop-modes.png',fullPage:true});
 });
 await test('Verdad: elegir, siguiente, pasar y ronda',async()=>{
  await fixture(); await click('.choice-btn-truth');
  assert.ok(await page.locator('#card-text').textContent());
  await click('#btn-next'); assert.equal(await value(()=>state.currentPlayerIndex),1);
  await click('.choice-btn-truth'); await click('.game-actions .btn-secondary'); await shot();
  assert.equal(await value(()=>state.currentPlayerIndex),2);
 });
 await test('Reto: confirmar completado y rechazar con penalización',async()=>{
  await fixture(); await click('.choice-btn-dare');await click('#btn-next');await click('#confirm-btn-yes');
  assert.equal(await value(()=>state.currentPlayerIndex),1);
  await click('.choice-btn-dare');await click('#btn-next');await click('#confirm-btn-no');await shot();
  assert.equal(await value(()=>state.currentPlayerIndex),2);
 });
 await test('Trivia: respuesta correcta, selección obligatoria y destinatario',async()=>{
  await fixture('trivia');
  const answer=await value(()=>state.currentTrivia.ans); await click('#trivia-opt-'+answer);
  await page.locator('#trivia-pick-overlay.show').waitFor();
  assert.equal(await page.locator('#trivia-pick-targets .who-secret-option').count(),3);
  assert.equal(await value(()=>state.triviaPickChosen),null);
  await page.locator('#trivia-pick-targets .who-secret-option').first().click();await click('#trivia-pick-confirm');await shot();
  assert.equal(await value(()=>state.challengesDone),1);
  assert.equal(await value(()=>state.players.some(p=>'score' in p)),false);
 });
 await test('Trivia: error y protección contra doble respuesta',async()=>{
  await fixture('trivia');const answer=await value(()=>state.currentTrivia.ans); await click('#trivia-opt-'+((answer+1)%4));
  await value(()=>answerTrivia(state.currentTrivia.ans)); await shot();
  assert.equal(await value(()=>state.challengesDone),1);
 });
 await test('Trivia: tiempo agotado',async()=>{
  await page.clock.install(); await fixture('trivia');
  await value(()=>{state.triviaRemaining=1;startTriviaTimer(true)});
  await page.clock.runFor(5000);await shot();
  assert.equal(await value(()=>state.challengesDone),1);
 });
 await test('Trivia: menú pausa el reloj y permite reanudar',async()=>{
  await page.clock.install();await fixture('trivia');await page.clock.fastForward(5000);
  await click('#screen-game .game-header button:last-child');
  const remaining=await value(()=>state.triviaRemaining);await page.clock.fastForward(40000);
  assert.equal(await value(()=>state.triviaRemaining),remaining);
  await click('.menu-close');await page.clock.fastForward(1000);
  assert.equal(await value(()=>state.triviaRemaining),remaining-1);
 });
 await test('¿Quién?: selección, votación completa, resultado y siguiente ronda',async()=>{
  await fixture('who');await click('#card-interaction .btn-primary');
  for(let i=0;i<4;i++){await click('#who-sopt-1');await click('#who-confirm-vote-btn');}
  assert.equal(await page.locator('#who-reveal-name').textContent(),'Ana <3');
  await click('#who-reveal-phase button');await shot();
  assert.equal(await value(()=>state.challengesDone),1);
  await click('#card-interaction .btn-primary');assert.equal(await value(()=>state.whoVoterIndex),0);
 });
 await test('¿Quién?: empate total, penalizaciones en cadena',async()=>{
  await fixture('who');await click('#card-interaction .btn-primary');
  for(let i=0;i<4;i++){await click('#who-sopt-'+i);await click('#who-confirm-vote-btn');}
  assert.equal(await value(()=>state.whoIsFullTie),true);
  await click('#who-reveal-phase button');for(let i=0;i<4;i++)await shot();
  assert.equal(await value(()=>Object.keys(state.shots).filter(n=>state.shots[n]>0).length),4);
 });
 await test('Yo Nunca: apóstrofes, dedos, penalización única y siguiente turno',async()=>{
  await fixture('never');await page.locator('.finger-btn').first().click();await shot();
  const count=await value(()=>state.shots["D'Angelo"]);
  await value(()=>document.querySelector('.finger-btn').click());assert.equal(await value(()=>state.shots["D'Angelo"]),count);
  await click('#never-next-btn');assert.equal(await value(()=>state.challengesDone),1);
  assert.equal(await page.locator('.finger-btn.down').count(),0);
 });
 await test('Carta especial doble: duplica los shots hasta seis y consume efecto una vez',async()=>{
  await fixture();await value(()=>{state.specialCard=SPECIAL_CARDS.find(c=>c.type==='double');showSpecialCard(state.specialCard,()=>_drawChallengeContent())});
  await click('#special-card-btn');await click('.choice-btn-truth');await click('.game-actions .btn-secondary');
  assert.equal(await value(()=>state.shots["D'Angelo"]),6);await shot();assert.equal(await value(()=>state.doubleActive),false);
 });
 await test('Carta especial redirigir: elegir destino y aplicar',async()=>{
  await fixture();await value(()=>{state.specialCard=SPECIAL_CARDS.find(c=>c.type==='redirect');showSpecialCard(state.specialCard,()=>_drawChallengeContent())});
  assert.equal(await page.locator('#special-card-btn').isDisabled(),true);
  await page.locator('.special-redirect-opt').first().click();await click('#special-card-btn');
  await click('.choice-btn-truth');await click('.game-actions .btn-secondary');
  assert.equal(await value(()=>state.shots['Ana <3']),3);assert.equal(await value(()=>state.shots["D'Angelo"]),0);await shot();
 });
 await test('Carta especial todos: cuatro confirmaciones y regreso al turno',async()=>{
  await fixture();await value(()=>{state.specialCard=SPECIAL_CARDS.find(c=>c.type==='all');showSpecialCard(state.specialCard,()=>_drawChallengeContent())});
  await click('#special-card-btn');for(let i=0;i<4;i++)await shot();
  assert.equal(await value(()=>Object.values(state.shots).reduce((a,b)=>a+b,0)),4);
  assert.equal(await page.locator('.choice-btn-truth').isVisible(),true);
 });
 await test('TODI: girar, resultado, siguiente y restauración tras recargar',async()=>{
  await fixture('todi');await click('#todi-press-btn');await click('#todi-next-btn');
  assert.equal(await value(()=>todiTurnIndex),1);
  await page.reload();await click('#btn-resume');
  assert.equal(await value(()=>document.querySelector('.screen.active').id),'screen-todi');
  assert.equal(await value(()=>todiTurnIndex),1);assert.equal(await value(()=>todiTurnCount),1);
 });
 await test('VS: respuestas, rotación correcta y fallo del equipo',async()=>{
  await fixture('vs');assert.match(await page.locator('#vs-question-label').textContent(),/D'Angelo/);
  await click('.vs-btn-correct');assert.match(await page.locator('#vs-question-label').textContent(),/Ana <3/);
  await click('.vs-btn-correct');assert.match(await page.locator('#vs-question-label').textContent(),/Luis/);
  await click('.vs-btn-wrong');await shot();await shot();assert.equal(await value(()=>state.vsRound),3);
 });
 await test('VS: guardar partida infinita y continuar sin terminar antes de tiempo',async()=>{
  await fixture('vs');await click('.vs-btn-correct');await page.reload();await click('#btn-resume');
  assert.equal(await value(()=>state.vsMaxRounds),Infinity);await click('.vs-btn-correct');
  assert.equal(await value(()=>document.querySelector('.screen.active').id),'screen-vs');
 });
 await test('Impostor: roles secretos, pistas, votos y nueva ronda visible',async()=>{
  await fixture('impostor');
  for(let i=0;i<4;i++){await click('#impostor-call-card button');assert.equal(await page.locator('#impostor-role-card').isVisible(),true);await click('#impostor-role-btn');await page.waitForTimeout(350);}
  for(let i=0;i<4;i++)await click('#impostor-next-hint-btn');
  for(let i=0;i<4;i++){await page.locator('.impostor-vote-opt').first().click();await click('#impostor-vote-confirm-btn');}
  await page.waitForTimeout(1300);
  while(await value(()=>document.getElementById('shot-overlay').classList.contains('show')))await shot();
  await click('#impostor-reveal-phase .btn-primary');
  for(let i=0;i<4;i++){await click('#impostor-call-card button');await click('#impostor-role-btn');await page.waitForTimeout(350);}
  assert.equal(await page.locator('#impostor-hint-phase').isVisible(),true);assert.equal(await page.locator('#impostor-next-hint-btn').isVisible(),true);
  await page.screenshot({path:'tests/desktop-impostor.png',fullPage:true});
 });
 await test('Impostor: recuperar misma palabra y roles después de recargar',async()=>{
  await fixture('impostor');const original=await value(()=>({word:state.impostorWord,roles:state.impostorImpostors}));
  await page.reload();await click('#btn-resume');assert.deepEqual(await value(()=>({word:state.impostorWord,roles:state.impostorImpostors})),original);
  await page.locator('#impostor-call-card').waitFor({state:'visible'});
 });
 await test('Cambiar entre los siete modos desde el menú',async()=>{
  await fixture();
  for(const mode of ['trivia','never','who','todi','vs','basta','truth']){
   await click('.screen.active .hamburger');await click(`.menu-mode-btn[data-mode="${mode}"]`);
   assert.equal(await value(()=>state.mode),mode);
  }
  await click('.screen.active .hamburger');await click('.menu-mode-btn[data-mode="impostor"]');
  await page.locator('#impostor-call-card').waitFor({state:'visible'});
 });
 await test('Cambios inválidos de modo conservan la partida actual',async()=>{
  await fixture('truth',players.filter(p=>p.gender==='m'));
  await click('.screen.active .hamburger');await click('.menu-mode-btn[data-mode="vs"]');assert.equal(await value(()=>state.mode),'truth');
  await click('.menu-mode-btn[data-mode="impostor"]');assert.equal(await value(()=>state.mode),'truth');
 });
 await test('Menú: agregar, cancelar, eliminar y actualizar TODI',async()=>{
  await fixture('todi');await click('.screen.active .hamburger');await click('.menu-add-player-btn');
  await page.locator('#player-modal-overlay').click({position:{x:5,y:5}});assert.equal(await value(()=>state._addingMidGame),false);
  await click('.screen.active .hamburger');await click('.menu-add-player-btn');await page.locator('#player-modal-input').fill('Nueva');await click('#gbtn-o');await click('#player-modal-overlay .btn-primary');
  assert.equal(await page.locator('#todi-players-strip .strip-player').count(),5);
  await click('.screen.active .hamburger');await page.locator('.menu-player-remove').last().click();assert.equal(await page.locator('#todi-players-strip .strip-player').count(),4);
 });
 await test('Menú: jugadores, configuración, salir y continuar en la misma sesión',async()=>{
  await fixture();await click('.screen.active .hamburger');await page.locator('.menu-item').nth(0).click();await page.locator('#screen-players').waitFor({state:'visible'});
  await click('#btn-continue-players');await click('#screen-modes .btn-primary');
  await click('.screen.active .hamburger');await page.locator('.menu-item').nth(1).click();await page.locator('#screen-modes').waitFor({state:'visible'});
  await click('#screen-modes .btn-primary');await click('.screen.active .hamburger');await click('.btn-danger');
  await page.locator('#btn-resume').waitFor({state:'visible'});await click('#btn-resume');await page.locator('#screen-game').waitFor({state:'visible'});
 });
 await test('Recuperar Verdad y Trivia conserva la carta',async()=>{
  await fixture();await click('.choice-btn-dare');const text=await page.locator('#card-text').textContent();await page.reload();await click('#btn-resume');assert.equal(await page.locator('#card-text').textContent(),text);assert.equal(await value(()=>state.currentTruthDareType),'dare');
  await value(()=>{Math.random=()=>.9;switchMode('trivia')});const q=await page.locator('#card-text').textContent();await page.reload();await click('#btn-resume');assert.equal(await page.locator('#card-text').textContent(),q);
 });
 await test('Nombres HTML se muestran como texto y no crean elementos',async()=>{
  const roster=[{name:'<img src=x>',gender:'o',emoji:'⚡',score:0},...players];
  await fixture('never',roster);assert.equal(await page.locator('#screen-game img').count(),0);
  await click('.screen.active .hamburger');assert.equal(await page.locator('#menu-drawer img').count(),0);
 });
 await test('Una respuesta pendiente no abre modales después de cambiar de modo',async()=>{
  await fixture('trivia');await click('#trivia-opt-'+await value(()=>state.currentTrivia.ans));
  await click('.screen.active .hamburger');await click('.menu-mode-btn[data-mode="never"]');await page.waitForTimeout(1500);
  assert.equal(await value(()=>document.getElementById('trivia-pick-overlay').classList.contains('show')),false);
 });
 await test('Salir de TODI durante el giro cancela animación y sonido',async()=>{
  await fixture('todi');await click('#todi-press-btn');await click('.screen.active .hamburger');await click('.menu-mode-btn[data-mode="truth"]');await page.waitForTimeout(3000);
  assert.equal(await value(()=>_spinInterval),null);assert.equal(await page.locator('.choice-btn-truth').isVisible(),true);
 });
 await test('Sonido: activar y desactivar',async()=>{
  await fixture();await click('#sound-toggle-btn');assert.equal(await value(()=>soundEnabled),true);await click('#sound-toggle-btn');assert.equal(await value(()=>soundEnabled),false);
 });
 await test('Resultados, jugar de nuevo y menú principal',async()=>{
  await fixture();await value(()=>state.maxChallenges=1);await click('.choice-btn-truth');await click('#btn-next');await page.locator('#screen-results').waitFor({state:'visible'});
  assert.equal(await page.locator('.result-score, .result-rank').count(),0);
  await click('#screen-results .btn-primary');assert.equal(await value(()=>state.players.every(p=>!('score' in p))),true);
  await value(()=>showResults());await click('#screen-results .btn-ghost');await page.locator('#screen-home').waitFor({state:'visible'});
 });
 await test('Guardado corrupto no rompe la aplicación',async()=>{
  for(const raw of ['{','null',JSON.stringify({players:[null,null],savedAt:Date.now()})]){await value(raw=>localStorage.setItem(SAVE_KEY,raw),raw);assert.equal(await value(()=>loadSave()),null);}
 });
 await test('Escritorio a móvil y regreso: configuración accesible',async()=>{
  await value(roster=>{startNewGame();state.players=roster;goToModes()},players);await page.setViewportSize({width:390,height:844});await page.waitForTimeout(150);
  assert.equal(await page.locator('.modes-main-panel').count(),0);await click('[data-level="3"]');await page.screenshot({path:'tests/mobile-modes.png',fullPage:true});
  await click('#screen-modes .btn-primary');await click('.choice-btn-dare');await page.waitForTimeout(350);await page.screenshot({path:'tests/mobile-game.png',fullPage:true});
  assert.ok(await value(()=>document.documentElement.scrollWidth<=window.innerWidth));
  await page.setViewportSize({width:1280,height:900});await page.waitForTimeout(150);assert.equal(await page.locator('.modes-main-panel').count(),1);
 });
 await test('TODI: los cuatro resultados T, O, D e I',async()=>{
  await fixture('todi');
  for(const [index,letter] of ['T','O','D','I'].entries()){
   await value(index=>Math.random=()=> (index+.1)/4,index);await click('#todi-press-btn');await page.locator('#todi-next-btn').waitFor({state:'visible'});
   assert.equal(await page.locator('#todi-letter-display').textContent(),letter);await click('#todi-next-btn');
  }
 });
 await test('VS: resumen sin puntos, ganadores ni penalizaciones finales',async()=>{
  await fixture('vs');await value(()=>state.vsMaxRounds=2);await click('.vs-btn-correct');await click('.vs-btn-correct');
  await page.locator('#screen-results').waitFor({state:'visible'});
  assert.equal(await page.locator('.result-item').count(),4);
  assert.equal(await page.locator('.result-score, .result-rank, .vs-result-winner').count(),0);
  assert.equal(await value(()=>Object.values(state.shots).reduce((a,b)=>a+b,0)),0);
 });
 await test('VS: jugadores neutrales y modificación de equipos',async()=>{
  await fixture('vs',players.map(p=>({...p,gender:'o'})));
  assert.equal(await value(()=>state.vsTeamM.length),2);assert.equal(await value(()=>state.vsTeamF.length),2);
  await click('.screen.active .hamburger');await page.locator('.menu-player-remove').first().click();
  assert.equal(await value(()=>[...state.vsTeamM,...state.vsTeamF].includes("D'Angelo")),false);
 });
 await test('Impostor: cinco jugadores reciben dos impostores y conocen su cómplice',async()=>{
  await fixture('impostor',[...players,{name:'Noa',gender:'o',emoji:'⚡',score:0}]);
  const roles=await value(()=>state.impostorImpostors);assert.equal(roles.length,2);
  for(let i=0;i<5;i++){
   await click('#impostor-call-card button');
   if(roles.includes(i))assert.equal(await page.locator('#impostor-ally-notice').isVisible(),true);
   await click('#impostor-role-btn');await page.waitForTimeout(350);
  }
 });
 await test('Impostor: salir del reparto de roles y usar el menú',async()=>{
  await fixture('impostor');await click('.impostor-role-exit');await page.locator('#screen-modes').waitFor({state:'visible'});
  await click('#screen-modes .btn-primary');
  for(let i=0;i<4;i++){await click('#impostor-call-card button');await click('#impostor-role-btn');await page.waitForTimeout(350);}
  await click('#screen-impostor .hamburger');await click('.menu-mode-btn[data-mode="truth"]');await page.locator('.choice-btn-truth').waitFor({state:'visible'});
 });
 await test('Banco: todas las intensidades y opciones de Trivia son válidas',async()=>{
  const problems=await value(()=>{
   const errors=[];
   for(const [type,levels] of Object.entries(CHALLENGES))for(const [level,pool] of Object.entries(levels)){
    if(!Array.isArray(pool)||!pool.length)errors.push(`${type}/${level}: vacío`);
    pool.forEach((q,i)=>{if(type==='trivia'&&(!q.q||!Array.isArray(q.opts)||q.opts.length!==4||!Number.isInteger(q.ans)||q.ans<0||q.ans>3))errors.push(`${type}/${level}/${i}`);else if(type!=='trivia'&&(typeof q!=='string'||!q.trim()))errors.push(`${type}/${level}/${i}`)});
   }
   return errors;
  });assert.deepEqual(problems,[]);
 });
 await test('Móvil: los ocho modos caben en pantalla y permiten iniciar',async()=>{
  await page.setViewportSize({width:390,height:844});
  for(const mode of ['truth','trivia','never','who','todi','vs','basta','impostor']){
   await fixture(mode);
   assert.ok(await value(()=>document.documentElement.scrollWidth<=window.innerWidth));
   if(mode==='truth')await click('.choice-btn-truth');
   if(mode==='basta')await click('#basta-start');
   if(mode==='impostor')await click('#impostor-call-card button');
   await page.waitForTimeout(300);await page.screenshot({path:`tests/mobile-${mode}.png`,fullPage:true});
  }
 });
 await test('Carrusel: arrastrar con el mouse cambia el modo',async()=>{
  await value(roster=>{startNewGame();state.players=roster;goToModes()},players);await page.waitForTimeout(400);
  const r=await page.locator('#coverflow-stage').boundingBox();
  await page.mouse.move(r.x+r.width/2,r.y+r.height/2);await page.mouse.down();await page.mouse.move(r.x+r.width/2-100,r.y+r.height/2,{steps:10});await page.mouse.up();await page.waitForTimeout(500);
  assert.equal(await value(()=>state.mode),'trivia');
 });
 await test('Menú: límites de jugadores durante una partida',async()=>{
  await fixture('never',players.slice(0,2));await click('.screen.active .hamburger');await page.locator('.menu-player-remove').first().click();assert.equal(await value(()=>state.players.length),2);await click('.menu-close');
  await fixture('never',Array.from({length:20},(_,i)=>({name:'P'+i,gender:'o',emoji:'⚡',score:0})));
  await click('.screen.active .hamburger');await click('.menu-add-player-btn');assert.equal(await value(()=>state._addingMidGame),false);assert.equal(await value(()=>state.players.length),20);
 });
 await test('Shots: sorteo de uno a tres y tope para cantidades explícitas',async()=>{
  await fixture('never');
  const values=await value(()=>{
   const original=Math.random, values=[];
   for(let i=0;i<100;i++){Math.random=()=>i/100;values.push(randomShots());}
   Math.random=original;return [...new Set(values)];
  });assert.deepEqual(values,[1,2,3]);
  for(const requested of [1,2,3,4,10]){
   const actual=await value(requested=>{
    const name=state.players[0].name,before=state.shots[name]||0;
    showShot(name,'Prueba de límite',requested,null);return state.shots[name]-before;
   },requested);
   assert.equal(actual,Math.min(requested,3));
   await shot();assert.ok(Number(await page.locator('#shot-number-display').textContent())<=3);
  }
 });
 await test('Shots: el duplicador convierte uno, dos y tres en dos, cuatro y seis',async()=>{
  await fixture('never');
  for(const base of [1,2,3]){
   const actual=await value(base=>{
    const name=state.players[0].name,before=state.shots[name]||0;
    state.doubleActive=true;
    showShot(name,'Prueba de duplicador',base,null);
    return state.shots[name]-before;
   },base);
   assert.equal(actual,base*2);
   assert.equal(await value(()=>state.doubleActive),false);
   await shot();
   assert.equal(Number(await page.locator('#shot-number-display').textContent()),base*2);
   assert.equal(await page.locator('#shot-glasses-row').textContent(),'🥃'.repeat(base*2));
  }
  const actual=await value(()=>{
   const name=state.players[0].name,before=state.shots[name];
   showShot(name,'Castigo normal después del doble',3,null);return state.shots[name]-before;
  });
  assert.equal(actual,3);await shot();
 });
 await test('Impostor: diez jugadores tienen un castigo máximo de tres',async()=>{
  const roster=Array.from({length:10},(_,i)=>({name:'P'+i,gender:'o',emoji:'⚡'}));
  await fixture('impostor',roster);
  await value(()=>{goTo('impostor');state.impostorImpostors=[0,1];state.impostorVotes=Object.fromEntries(state.players.map(p=>[p.name,'P0']));impostorReveal()});
  assert.match(await page.locator('#impostor-verdict-sub').textContent(),/3 shots/);
  await shot();await shot();
  assert.equal(await value(()=>state.shots.P0),3);assert.equal(await value(()=>state.shots.P1),3);
 });
 await test('Recuperar un guardado anterior descarta los puntos antiguos',async()=>{
  await fixture();await click('.choice-btn-truth');
  await value(()=>{const save=JSON.parse(localStorage.getItem(SAVE_KEY));save.players.forEach(p=>p.score=100);save.vsScoreM=50;save.vsScoreF=20;localStorage.setItem(SAVE_KEY,JSON.stringify(save));});
  await page.reload();await click('#btn-resume');
  assert.equal(await value(()=>state.players.some(p=>'score' in p)),false);
  assert.equal(await value(()=>Object.keys(state).some(k=>k.startsWith('vsScore')||k==='scores')),false);
  assert.equal(await value(()=>JSON.parse(localStorage.getItem(SAVE_KEY)).players.some(p=>'score' in p)),false);
 });
 } finally {
  fs.writeFileSync(process.env.TEST_RESULTS_FILE || 'tests/results.json',JSON.stringify(results,null,2));
  await browser.close();
 }
 console.log(`${results.filter(r=>r.status==='PASS').length}/${results.length} PASS`);
 if(results.some(r=>r.status==='FAIL'))process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1});
