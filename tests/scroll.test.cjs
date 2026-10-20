const pw = require(process.env.PLAYWRIGHT_MODULE_PATH || 'playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const url = 'file:///' + path.resolve('index.html').replaceAll('\\', '/');
const roster = Array.from({length:14}, (_, i) => ({name:`Jugador ${String(i+1).padStart(2,'0')} Apellido`, gender:i%2?'f':'m', emoji:i%2?'🌸':'🚀'}));
const results=[];
let browser,page,errors;
const click = selector => page.locator(selector).click();
const read = (fn,arg) => page.evaluate(fn,arg);
async function fixture(mode='truth') {
 await read(({players,mode})=>{soundEnabled=false;Math.random=()=>.9;startNewGame();state.players=players;renderPlayers();state.mode=mode;goToModes();},{players:roster,mode});
 await click('#screen-modes .btn-primary');
}
async function visible(locator) {
 const box=await locator.boundingBox(), viewport=page.viewportSize();
 assert.ok(box&&box.x>=-1&&box.y>=-1&&box.x+box.width<=viewport.width+1&&box.y+box.height<=viewport.height+1,`Elemento fuera de pantalla: ${JSON.stringify(box)}`);
 assert.equal(await locator.evaluate(el=>{const r=el.getBoundingClientRect();return el.contains(document.elementFromPoint(r.x+r.width/2,r.y+r.height/2));}),true,'Elemento recortado o tapado');
}
async function reach(selector) {
 const locator=page.locator(selector);await locator.scrollIntoViewIfNeeded();await visible(locator);return locator;
}
async function wheelTo(container, target, horizontal=false, direction=1) {
 const area=page.locator(container);await area.scrollIntoViewIfNeeded();
 if(horizontal && !await area.evaluate(el=>el.scrollWidth>el.clientWidth)) {
  await visible(page.locator(target));return;
 }
 const box=await area.boundingBox(), viewport=page.viewportSize();
 await page.mouse.move(Math.min(viewport.width-5,box.x+box.width/2),Math.max(5,Math.min(viewport.height-5,box.y+box.height/2)));
 await page.mouse.wheel(horizontal?direction*5000:0,horizontal?0:direction*5000);await page.waitForTimeout(180);
 await visible(page.locator(target));
}
async function shot() {await page.clock.runFor(4000);await reach('#shot-confirm-btn');await click('#shot-confirm-btn');}
async function test(name,viewport,fn) {
 if(process.env.TEST_FILTER&&!name.toLowerCase().includes(process.env.TEST_FILTER.toLowerCase()))return;
 try {
  if(page)await page.close();page=await browser.newPage({viewport});page.setDefaultTimeout(7000);errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.route(/^https:\/\/fonts\.(googleapis|gstatic)\.com\//,route=>route.abort());
  await page.goto(url);await page.clock.install();await fn();assert.deepEqual(errors,[]);
  results.push({name,viewport,status:'PASS'});console.log('PASS',viewport.width+'x'+viewport.height,name);
 }catch(e){const url=page.url();results.push({name,viewport,status:'FAIL',error:e.stack,errors,url});console.log('FAIL',viewport.width+'x'+viewport.height,name,e.message,url);await page.screenshot({path:`tests/scroll-failure-${results.length}.png`}).catch(()=>{});}
}
(async()=>{
 browser=await pw.chromium.launch({channel:'msedge',headless:true});
 try {
 for(const viewport of [{width:320,height:568},{width:390,height:844},{width:844,height:390},{width:1280,height:600}]){
  await test('Registro: catorce jugadores y formulario con todos sus controles',viewport,async()=>{
   await read(players=>{startNewGame();state.players=players;renderPlayers();},roster);
   await wheelTo('#screen-players','.player-item:last-child');
   await reach('#screen-players .btn-secondary');await click('#screen-players .btn-secondary');
   await page.locator('#player-modal-input').fill('Jugador 15');await click('#gbtn-o');
   await wheelTo('.player-modal','.player-modal .btn-primary');
   await page.screenshot({path:`tests/scroll-player-modal-${viewport.width}.png`});
   await click('.player-modal .btn-primary');assert.equal(await read(()=>state.players.length),15);
  });
  await test('Redirigir castigo: elegir y aplicar al último de catorce jugadores',viewport,async()=>{
   await fixture('never');
   await read(()=>{state.specialCard=SPECIAL_CARDS.find(c=>c.type==='redirect');showSpecialCard(state.specialCard,()=>{});});
   assert.equal(await page.locator('.special-redirect-opt').count(),13);
   await wheelTo('#special-redirect-options','.special-redirect-opt:last-child');await click('.special-redirect-opt:last-child');
   await reach('#special-card-btn');await page.screenshot({path:`tests/scroll-redirect-${viewport.width}.png`});await click('#special-card-btn');
   assert.equal(await read(()=>state.redirectTarget),'Jugador 14 Apellido');
   await read(()=>showShot(state.players[0].name,'Prueba de destino',1));
   assert.match(await page.locator('#shot-player-name').textContent(),/Jugador 14 Apellido/);await shot();
  });
  await test('Trivia: lista completa de destinatarios y confirmación del último',viewport,async()=>{
   await fixture('trivia');await read(()=>{clearTriviaTimer();showTriviaPickOverlay(state.players[0].name);});
   assert.equal(await page.locator('#trivia-pick-targets > *').count(),13);
   await wheelTo('#trivia-pick-targets','#trivia-pick-targets > :last-child');await click('#trivia-pick-targets > :last-child');
   await reach('#trivia-pick-confirm');await click('#trivia-pick-confirm');
   assert.match(await page.locator('#shot-player-name').textContent(),/Jugador 14 Apellido/);await shot();
  });
  await test('Quién: catorce opciones sin comprimir y voto al último jugador',viewport,async()=>{
   await fixture('who');await read(()=>startWhoVoting());
   assert.equal(await page.locator('#who-secret-options > *').count(),14);
   assert.ok(await page.locator('#who-secret-options > :last-child').evaluate(el=>el.getBoundingClientRect().height)>=48);
   await wheelTo('#who-secret-options','#who-secret-options > :last-child');await click('#who-secret-options > :last-child');
   await reach('#who-confirm-vote-btn');await click('#who-confirm-vote-btn');
   assert.equal(await read(()=>state.whoVoterIndex),1);
   assert.equal(await read(()=>state.whoVotes['Jugador 14 Apellido']),1);
   await wheelTo('#who-secret-options','#who-secret-options > :first-child',false,-1);
  });
  await test('Menú: lista de catorce jugadores y última opción de navegación',viewport,async()=>{
   await fixture('never');await read(()=>openMenu());await page.waitForTimeout(400);
   await reach('.menu-players-list');
   await wheelTo('.menu-players-list','.menu-player-row:last-child');
   assert.equal(await page.locator('.menu-player-row').count(),14);
   await wheelTo('.menu-body','.btn-danger');await click('.btn-danger');
   await click('#btn-resume');assert.equal(await read(()=>state.players.length),14);
  });
  await test('Impostor: roles, catorce pistas y lista de votación',viewport,async()=>{
   await fixture('impostor');await reach('#impostor-call-card button');await click('#impostor-call-card button');
   await reach('#impostor-role-btn');await click('#impostor-role-btn');
   await page.waitForTimeout(500);
   await read(()=>{document.getElementById('impostor-role-overlay').classList.remove('show');impostorStartHintRound();for(let i=0;i<14;i++)impostorNextHint();});
   assert.equal(await page.locator('.impostor-vote-opt').count(),13);
   await wheelTo('#impostor-vote-opts','.impostor-vote-opt:last-child');await click('.impostor-vote-opt:last-child');
   await reach('#impostor-vote-confirm-btn');await click('#impostor-vote-confirm-btn');
   assert.equal(await read(()=>state.impostorVoterIndex),1);
   assert.equal(await read(()=>state.impostorVotes[state.players[0].name]),'Jugador 14 Apellido');
  });
  await test('VS: siete jugadores por equipo y botones de respuesta accesibles',viewport,async()=>{
   await fixture('vs');assert.equal(await page.locator('.vs-player-chip').count(),14);
   await reach('#vs-top-players .vs-player-chip:first-child');await reach('#vs-top-players .vs-player-chip:last-child');
   await reach('#vs-bot-players .vs-player-chip:last-child');
   await reach('.vs-btn-correct');await page.screenshot({path:`tests/scroll-vs-${viewport.width}.png`});await click('.vs-btn-correct');
   assert.equal(await read(()=>state.players.length),14);
  });
  await test('Cuatro modos de cartas: barras horizontales y acciones',viewport,async()=>{
   for(const mode of ['truth','trivia','never','who']){
    await fixture(mode);await read(()=>clearTriviaTimer());
    await wheelTo('#players-strip','#players-strip > :last-child',true);
    await wheelTo('#players-strip','#players-strip > :first-child',true,-1);
    if(mode==='truth')await reach('.choice-btn-truth');
    else if(mode==='never'){await reach('.finger-wrap:last-child');await reach('#never-next-btn');}
    else if(mode==='trivia')await reach('.trivia-opt:last-child');
    else await reach('#btn-next');
   }
  });
  await test('TODI: primer y último jugador, giro y siguiente turno',viewport,async()=>{
   await fixture('todi');
   await wheelTo('#todi-players-strip','#todi-players-strip > :last-child',true);
   await wheelTo('#todi-players-strip','#todi-players-strip > :first-child',true,-1);
   await reach('#todi-press-btn');await click('#todi-press-btn');await page.clock.runFor(6000);
   await reach('#todi-next-btn');await click('#todi-next-btn');
   assert.equal(await read(()=>todiTurnIndex),1);
  });
  await test('Resumen: catorce filas completas y acceso a volver al inicio',viewport,async()=>{
   await fixture('never');await read(()=>showResults());
   assert.equal(await page.locator('.result-item').count(),14);
   await wheelTo('#screen-results','.result-item:last-child');
   await reach('#screen-results .btn-ghost');await click('#screen-results .btn-ghost');
   await reach('#screen-home .home-btn-main');
  });
  await test('Configuración, Basta y confirmación de reto en ventana baja',viewport,async()=>{
   await fixture('basta');await reach('#basta-start');await click('#basta-start');
   await reach('#basta-wrong');await click('#basta-wrong');await shot();
   await read(()=>showConfirmDialog(state.players[13].name,()=>{}));
   await reach('#confirm-btn-yes');await click('#confirm-btn-yes');
   await read(()=>goToModes());await reach('#screen-modes .btn-primary');
   assert.equal(await read(()=>document.querySelector('.screen.active').scrollWidth<=innerWidth+1),true);
  });
 }
 await test('Límite de veinte: altas reales, bloqueo del jugador 21 y partida recuperable con veinte',{width:390,height:844},async()=>{
  await read(players=>{Math.random=()=>.9;soundEnabled=false;startNewGame();state.players=players;renderPlayers();},roster);
  for(let i=15;i<=20;i++){
   await click('#screen-players .btn-secondary');await page.locator('#player-modal-input').fill('Jugador '+i);await click('#gbtn-o');
   await click('.player-modal .btn-primary');
  }
  assert.equal(await read(()=>state.players.length),20);
  await click('#screen-players .btn-secondary');assert.equal(await page.locator('#player-modal-overlay').evaluate(el=>el.classList.contains('show')),false);
  await read(()=>{goToModes();state.mode='never';});await click('#screen-modes .btn-primary');
  assert.equal(await read(()=>loadSave()?.players.length),20);
  await page.reload();await click('#btn-resume');assert.equal(await read(()=>state.players.length),20);
 });
 }finally{fs.writeFileSync(process.env.TEST_RESULTS_FILE||'tests/results-scroll.json',JSON.stringify(results,null,2));await browser.close();}
 console.log(`${results.filter(r=>r.status==='PASS').length}/${results.length} PASS`);
 if(results.some(r=>r.status==='FAIL'))process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1;});
