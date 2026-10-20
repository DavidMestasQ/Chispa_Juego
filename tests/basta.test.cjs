let pw;
try { pw = require('playwright'); }
catch { pw = require('playwright'); }
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const url = 'file:///' + path.resolve('index.html').replaceAll('\\', '/');
const roster = [{name:"D'Angelo",gender:'m',emoji:'🚀'}, {name:'Ana <3',gender:'f',emoji:'🌸'}, {name:'Noa',gender:'o',emoji:'⚡'}];
let browser, page, errors;
const results = [];
const click = selector => page.locator(selector).click();
const read = (fn,arg) => page.evaluate(fn,arg);
async function setup() {
 await read(players=>{Math.random=()=>.9;soundEnabled=false;startNewGame();state.players=players;renderPlayers();goToModes();},roster);
 await page.locator('.cf-dot').nth(7).click();
 await click('#screen-modes .btn-primary');
 await page.locator('#basta-start').waitFor({state:'visible'});
}
async function begin() { await setup();await click('#basta-start'); }
async function pass(letter) {await click('#basta-letter-'+letter);await click('#basta-pass');}
async function confirmPenalty() {
 await page.clock.runFor(4000);
 assert.equal(await page.locator('#shot-number-display').textContent(),'3');
 await page.screenshot({path:'tests/basta-castigo.png'});
 await click('#shot-confirm-btn');
}
async function test(name, fn) {
 if (process.env.TEST_FILTER && !name.toLowerCase().includes(process.env.TEST_FILTER.toLowerCase())) return;
 try {
  if(page)await page.close();
  page=await browser.newPage({viewport:{width:1280,height:900}});
  page.setDefaultTimeout(6000);errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.route(/^https:\/\/fonts\.(googleapis|gstatic)\.com\//, route=>route.abort());
  await page.goto(url);await page.clock.install();
  await fn();assert.deepEqual(errors,[]);results.push({name,status:'PASS'});console.log('PASS',name);
 }catch(e){results.push({name,status:'FAIL',error:e.stack,errors});console.log('FAIL',name,e.message);await page.screenshot({path:`tests/basta-failure-${results.length}.png`}).catch(()=>{});}
}
(async()=>{
 browser=await pw.chromium.launch({channel:'msedge',headless:true});
 try {
 await test('Selector: ocho modos y Basta sin intensidad',async()=>{
  await setup();assert.equal(await read(()=>state.mode),'basta');
  assert.equal(await page.locator('.mode-card').count(),8);assert.equal(await page.locator('.cf-dot').count(),8);
  assert.equal(await page.locator('.menu-mode-btn').count(),8);
  assert.equal(await read(()=>bastaTimer),null);
  await page.waitForTimeout(350);
  await page.screenshot({path:'tests/basta-desktop-setup.png'});
 });
 await test('Categoría: vacío, otro tema y texto propio seguro',async()=>{
  await setup();const previous=await page.locator('#basta-category-input').inputValue();
  await click('#basta-random-category');assert.notEqual(await page.locator('#basta-category-input').inputValue(),previous);
  await page.locator('#basta-category-input').fill(' ');await click('#basta-start');assert.equal(await read(()=>state.basta.phase),'ready');
  await page.locator('#basta-category-input').fill('<img src=x>');await page.locator('#basta-category-input').press('Enter');
  assert.equal(await page.locator('#basta-category').textContent(),'<img src=x>');assert.equal(await page.locator('#screen-basta img').count(),0);
 });
 for (const seconds of [15,30,45]) await test(`Tiempo de ${seconds} segundos: selección, turnos, recuperación y derrota`,async()=>{
  await setup();
  await page.locator(`input[name="basta-duration"][value="${seconds}"]`).check();
  assert.equal(await read(()=>state.basta.turnSeconds),seconds);
  assert.equal(await page.locator('#basta-duration-description').textContent(),String(seconds));
  await page.reload();await click('#btn-resume');
  assert.equal(await page.locator(`input[name="basta-duration"][value="${seconds}"]`).isChecked(),true);
  await click('#basta-start');
  assert.equal(await page.locator('#basta-timer').textContent(),String(seconds));
  assert.equal(await page.locator('#basta-turn-duration').textContent(),`${seconds} s por turno`);
  const firstDeadline=await read(()=>state.basta.deadline);
  await read(()=>bastaSetTurnSeconds(45));
  assert.equal(await read(()=>state.basta.turnSeconds),seconds);
  await page.clock.fastForward(5000);await click('#basta-letter-A');
  assert.equal(await read(()=>state.basta.deadline),firstDeadline);
  await click('#basta-pass');
  assert.equal(await page.locator('#basta-timer').textContent(),String(seconds));
  const deadline=await read(()=>state.basta.deadline);
  await page.reload();await click('#btn-resume');
  assert.equal(await read(()=>state.basta.turnSeconds),seconds);
  assert.equal(await read(()=>state.basta.deadline),deadline);
  await page.clock.fastForward((seconds-5)*1000);
  assert.equal(await read(()=>state.basta.phase),'playing');
  assert.ok(Number(await page.locator('#basta-timer').textContent())<=5);
  await page.clock.fastForward(6000);
  assert.equal(await read(()=>state.basta.reason),'timeout');
  assert.equal(await read(()=>state.basta.loser),'Ana <3');
  assert.match(await page.locator('#shot-reason').textContent(),new RegExp(`${seconds} segundos`));
  assert.match(await page.locator('#basta-result-reason').textContent(),new RegExp(`${seconds} segundos`));
  await page.clock.runFor(4000);await click('#shot-confirm-btn');
  await click('#basta-new-round');
  assert.equal(await read(()=>state.basta.turnSeconds),seconds);
 });
 await test('Tiempo: guardados anteriores y valores inválidos usan treinta segundos',async()=>{
  await setup();await read(()=>{const saved={...state.basta};delete saved.turnSeconds;resumeBasta(saved);});
  assert.equal(await read(()=>state.basta.turnSeconds),30);
  await read(()=>{resumeBasta({...state.basta,turnSeconds:999});bastaSetTurnSeconds(0);bastaSetTurnSeconds(20);});
  assert.equal(await read(()=>state.basta.turnSeconds),30);
  await page.setViewportSize({width:320,height:568});
  await page.locator('input[name="basta-duration"][value="15"]').check();
  await page.screenshot({path:'tests/basta-duration-mobile.png',fullPage:true});
  await click('#basta-start');assert.equal(await page.locator('#basta-timer').textContent(),'15');
 });
 await test('Seleccionar y cambiar letra no reinicia tiempo; centro confirma y pasa',async()=>{
  await begin();assert.equal(await page.locator('.basta-letter').count(),26);assert.equal(await page.locator('#basta-pass').isDisabled(),true);
  const deadline=await read(()=>state.basta.deadline);await page.clock.fastForward(5000);
  await click('#basta-letter-A');await click('#basta-letter-B');assert.equal(await read(()=>state.basta.deadline),deadline);
  assert.ok(Number(await page.locator('#basta-timer').textContent())<=25);
  assert.deepEqual(await read(()=>state.basta.used),[]);await click('#basta-pass');
  assert.deepEqual(await read(()=>state.basta.used),['B']);assert.equal(await read(()=>state.currentPlayerIndex),1);
  assert.equal(await page.locator('#basta-letter-B').isDisabled(),true);assert.equal(await page.locator('#basta-letter-A').isDisabled(),false);
  assert.equal(await page.locator('#basta-timer').textContent(),'30');assert.equal(await page.locator('#basta-pass').isDisabled(),true);
  await read(()=>bastaPass());assert.equal(await read(()=>state.currentPlayerIndex),1);
 });
 await test('Turnos circulares y letras confirmadas no se repiten',async()=>{
  await begin();await pass('A');await pass('B');await pass('C');
  assert.equal(await read(()=>state.currentPlayerIndex),0);assert.equal(await read(()=>state.round),2);
  await read(()=>document.getElementById('basta-letter-A').click());await page.keyboard.press('a');assert.equal(await read(()=>state.basta.selected),null);
  await page.keyboard.press('z');assert.equal(await read(()=>state.basta.selected),'Z');await click('#basta-pass');
  assert.deepEqual(await read(()=>state.basta.used),['A','B','C','Z']);
 });
 await test('Sin letra: pierde al agotar treinta segundos',async()=>{
  await begin();await page.clock.fastForward(30001);
  assert.equal(await read(()=>state.basta.phase),'ended');assert.equal(await read(()=>state.basta.reason),'timeout');
  assert.equal(await read(()=>state.basta.loser),"D'Angelo");assert.equal(await read(()=>bastaTimer),null);
  assert.equal(await page.locator('#shot-overlay').evaluate(el=>el.classList.contains('show')),true);
  assert.deepEqual(await read(()=>state.shots),{"D'Angelo":3,'Ana <3':0,Noa:0});
  await page.locator('#basta-new-round').waitFor({state:'visible'});
 });
 await test('Elegir sin pulsar el centro también pierde por tiempo',async()=>{
  await begin();await click('#basta-letter-Z');await page.clock.fastForward(30001);
  assert.equal(await read(()=>state.basta.reason),'timeout');assert.deepEqual(await read(()=>state.basta.used),[]);
  await read(()=>bastaPass());assert.equal(await read(()=>state.currentPlayerIndex),0);
 });
 await test('Pulsar el centro después del plazo no acepta la respuesta',async()=>{
  await begin();await click('#basta-letter-A');await read(()=>{state.basta.deadline=Date.now();bastaPass();});
  assert.equal(await read(()=>state.basta.reason),'timeout');assert.equal(await read(()=>state.challengesDone),0);
 });
 await test('Respuesta incorrecta termina; nueva ronda limpia letras',async()=>{
  await begin();await pass('A');await click('#basta-letter-B');await click('#basta-wrong');
  assert.equal(await read(()=>state.basta.loser),'Ana <3');assert.equal(await read(()=>state.basta.reason),'wrong');
  assert.equal(await page.locator('#shot-player-name').textContent(),'🌸 Ana <3');
  await read(()=>{bastaWrong();bastaFinish('timeout');});
  assert.deepEqual(await read(()=>state.shots),{"D'Angelo":0,'Ana <3':3,Noa:0});
  await confirmPenalty();
  await click('#basta-new-round');assert.equal(await read(()=>state.basta.phase),'ready');assert.deepEqual(await read(()=>state.basta.used),[]);
  await click('#basta-start');assert.equal(await page.locator('#basta-letter-A').isEnabled(),true);
 });
 await test('Las veintiséis letras anuncian victoria y un shot por persona, sin duplicar al recargar',async()=>{
  await begin();for(const letter of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')await pass(letter);
  assert.equal(await read(()=>state.basta.phase),'ended');assert.equal(await read(()=>state.basta.reason),'complete');assert.equal(await read(()=>state.basta.loser),null);
  assert.equal(await read(()=>state.basta.used.length),26);assert.equal(await read(()=>bastaTimer),null);
  assert.deepEqual(await read(()=>state.shots),{"D'Angelo":1,'Ana <3':1,Noa:1});
  assert.equal(await page.locator('#basta-result-title').textContent(),'¡Todos ganaron!');
  assert.match(await page.locator('#basta-result-reason').textContent(),/Cada jugador toma 1 shot para celebrar/);
  assert.equal(await page.locator('#shot-overlay').evaluate(el=>el.classList.contains('show')),true);
  assert.equal(await page.locator('#shot-player-name').textContent(),'Todos los jugadores');
  assert.equal(await page.locator('#shot-overlay .shot-title').textContent(),'¡Todos ganaron!');
  assert.equal(await page.locator('#shot-confirm-btn').isVisible(),false);
  await page.clock.runFor(4000);
  assert.equal(await page.locator('#shot-number-display').textContent(),'1');
  await page.screenshot({path:'tests/basta-celebration-roulette.png'});
  await read(()=>{bastaPass();bastaFinish('complete');bastaWrong();});
  await page.reload();await click('#btn-resume');
  assert.deepEqual(await read(()=>state.shots),{"D'Angelo":1,'Ana <3':1,Noa:1});
  assert.equal(await page.locator('#shot-overlay').evaluate(el=>el.classList.contains('show')),true);
  await page.clock.runFor(4000);
  assert.equal(await page.locator('#shot-number-display').textContent(),'1');
  await click('#shot-confirm-btn');
  assert.equal(await read(()=>state.basta.celebrationPending),false);
  await page.reload();await click('#btn-resume');
  assert.equal(await page.locator('#shot-overlay').evaluate(el=>el.classList.contains('show')),false);
  assert.deepEqual(await read(()=>state.shots),{"D'Angelo":1,'Ana <3':1,Noa:1});
  assert.match(await page.locator('#basta-result-reason').textContent(),/Cada jugador toma 1 shot para celebrar/);
  await page.screenshot({path:'tests/basta-complete.png'});
  await click('#basta-new-round');assert.equal(await read(()=>state.basta.phase),'ready');
  assert.deepEqual(await read(()=>state.shots),{"D'Angelo":1,'Ana <3':1,Noa:1});
  await click('#basta-start');await click('#basta-wrong');
  assert.equal(await page.locator('#shot-overlay .shot-title').textContent(),'¡SHOT!');
  assert.equal(await page.locator('#shot-confirm-btn').textContent(),'Lo tomé 🤙');
  assert.equal(await page.locator('#shot-player-name').textContent(),"🚀 D'Angelo");
 });
 await test('Celebración con diez jugadores suma exactamente uno sobre los shots anteriores',async()=>{
  await setup();
  await read(()=>{
   state.players=Array.from({length:10},(_,i)=>({name:'Jugador '+i,gender:'o',emoji:'⚡'}));
   state.players.forEach((p,i)=>state.shots[p.name]=i);
   state.doubleActive=true;state.redirectActive=true;state.redirectTarget='Jugador 0';
   bastaBegin();
   for(const letter of BASTA_LETTERS){bastaSelectLetter(letter);bastaPass();}
  });
  assert.deepEqual(await read(()=>state.players.map(p=>state.shots[p.name])),[1,2,3,4,5,6,7,8,9,10]);
  assert.equal(await read(()=>state.basta.penalty),undefined);
  assert.equal(await read(()=>state.basta.celebration),true);
 });
 await test('Celebración en móvil pequeño permite ver y confirmar la ruleta',async()=>{
  await page.setViewportSize({width:320,height:568});await begin();
  await read(()=>{for(const letter of BASTA_LETTERS){bastaSelectLetter(letter);bastaPass();}});
  await page.clock.runFor(4000);
  assert.equal(await page.locator('#shot-number-display').textContent(),'1');
  const modal=await page.locator('.shot-modal').boundingBox();
  assert.ok(modal.y>=0&&modal.y+modal.height<=568);
  await page.locator('#shot-confirm-btn').scrollIntoViewIfNeeded();
  const button=await page.locator('#shot-confirm-btn').boundingBox();
  assert.ok(button.y>=0&&button.y+button.height<=568);
  await page.screenshot({path:'tests/basta-celebration-mobile.png'});
  await click('#shot-confirm-btn');
  assert.deepEqual(await read(()=>state.shots),{"D'Angelo":1,'Ana <3':1,Noa:1});
  assert.equal(await read(()=>state.basta.celebrationPending),false);
 });
 await test('Recargar conserva categoría, jugador, letras y plazo restante',async()=>{
  await begin();await pass('A');await click('#basta-letter-C');await page.clock.fastForward(5000);
  const snapshot=await read(()=>({category:state.basta.category,used:state.basta.used,selected:state.basta.selected,deadline:state.basta.deadline,player:state.currentPlayerIndex}));
  await page.reload();await click('#btn-resume');
  assert.deepEqual(await read(()=>({category:state.basta.category,used:state.basta.used,selected:state.basta.selected,deadline:state.basta.deadline,player:state.currentPlayerIndex})),snapshot);
  assert.ok(Number(await page.locator('#basta-timer').textContent())<=25);
 });
 await test('Salir y regresar tras el plazo conserva la derrota',async()=>{
  await begin();await click('#screen-basta .hamburger');await click('.btn-danger');
  assert.equal(await read(()=>bastaTimer),null);await page.clock.fastForward(31000);await click('#btn-resume');
  assert.equal(await read(()=>state.basta.reason),'timeout');assert.equal(await read(()=>state.basta.loser),"D'Angelo");
  assert.deepEqual(await read(()=>state.shots),{"D'Angelo":3,'Ana <3':0,Noa:0});
 });
 await test('El menú no da tiempo extra y el cambio de modo detiene el reloj',async()=>{
  await begin();await click('#screen-basta .hamburger');await page.clock.fastForward(31000);assert.equal(await read(()=>state.basta.phase),'ended');
  await confirmPenalty();await click('#screen-basta .hamburger');
  await click('.menu-mode-btn[data-mode="truth"]');assert.equal(await read(()=>bastaTimer),null);
  await click('#screen-game .hamburger');await click('.menu-mode-btn[data-mode="basta"]');assert.equal(await read(()=>state.basta.phase),'ready');
 });
 await test('Modificar jugadores prepara una nueva ronda sin temporizador anterior',async()=>{
  await begin();await pass('A');await click('#screen-basta .hamburger');await page.locator('.menu-player-remove').last().click();
  assert.equal(await read(()=>state.players.length),2);assert.equal(await read(()=>state.basta.phase),'ready');assert.equal(await read(()=>bastaTimer),null);
 });
 await test('Las letras y el centro son pulsables en móvil y escritorio',async()=>{
  await begin();
  for(const width of [320,390,1280]){
   await page.setViewportSize({width,height:width===320?740:900});await page.waitForTimeout(400);
   const problems=await read(()=>{
    const buttons=[...document.querySelectorAll('.basta-letter')];
    return buttons.filter(button=>{
     const r=button.getBoundingClientRect();return r.left<0||r.right>window.innerWidth||document.elementFromPoint(r.x+r.width/2,r.y+r.height/2)!==button;
    }).map(b=>b.textContent);
   });assert.deepEqual(problems,[]);
   await page.screenshot({path:`tests/basta-${width}.png`});
  }
 });
 await test('Pulsador: acción visible, relieve y respuesta al presionar',async()=>{
  await begin();await page.setViewportSize({width:390,height:900});
  assert.equal(await page.locator('#basta-pass').isDisabled(),true);
  assert.match(await page.locator('#basta-selected').textContent(),/activar/);
  await click('#basta-letter-A');await page.waitForTimeout(400);
  assert.equal(await page.locator('#basta-pass').isEnabled(),true);
  assert.equal(await page.locator('#basta-pass-label').textContent(),'Pulsa para pasar');
  assert.equal(await page.locator('#basta-timer').evaluate(el=>el.closest('button')),null);
  const button=page.locator('#basta-pass'),box=await button.boundingBox();
  await page.mouse.move(box.x+box.width/2,box.y+box.height/2);await page.waitForTimeout(180);
  const hover=await button.evaluate(el=>getComputedStyle(el).transform);
  await page.screenshot({path:'tests/basta-pulsador-activo.png'});
  await page.mouse.down();await page.waitForTimeout(180);
  assert.notEqual(await button.evaluate(el=>getComputedStyle(el).transform),hover);
  await page.screenshot({path:'tests/basta-pulsador-presionado.png'});
  await page.mouse.up();assert.equal(await read(()=>state.currentPlayerIndex),1);
  assert.equal(await button.isDisabled(),true);assert.deepEqual(await read(()=>state.basta.used),['A']);
 });
 await test('Movimiento reducido conserva la interacción sin animaciones',async()=>{
  await page.emulateMedia({reducedMotion:'reduce'});await begin();await click('#basta-letter-B');
  assert.equal(await page.locator('#basta-pass').evaluate(el=>getComputedStyle(el).animationName),'none');
  await page.locator('#basta-pass').focus();await page.keyboard.press('Enter');
  assert.equal(await read(()=>state.currentPlayerIndex),1);
 });
 await test('Castigo pendiente se recupera sin sortear ni sumar otra vez',async()=>{
  await begin();await pass('A');await click('#basta-wrong');
  await page.reload();await click('#btn-resume');
  assert.equal(await page.locator('#shot-player-name').textContent(),'🌸 Ana <3');
  assert.deepEqual(await read(()=>state.shots),{"D'Angelo":0,'Ana <3':3,Noa:0});
  await confirmPenalty();
  assert.equal(await read(()=>state.basta.penalty.pending),false);
  await page.reload();await click('#btn-resume');
  assert.equal(await page.locator('#shot-overlay').evaluate(el=>el.classList.contains('show')),false);
  assert.deepEqual(await read(()=>state.shots),{"D'Angelo":0,'Ana <3':3,Noa:0});
 });
 await test('Basta asigna uno, dos o tres shots al perdedor sin modificadores ajenos',async()=>{
  await setup();
  for(const [random,count] of [[0,1],[.4,2],[.99,3]]){
   await read(r=>{startBasta();bastaBegin();Math.random=()=>r;state.doubleActive=true;state.redirectActive=true;state.redirectTarget='Noa';bastaWrong();},random);
   assert.equal(await read(()=>state.basta.penalty.count),count);
   assert.equal(await page.locator('#shot-player-name').textContent(),"🚀 D'Angelo");
   await page.clock.runFor(4000);assert.equal(await page.locator('#shot-number-display').textContent(),String(count));
   await click('#shot-confirm-btn');
  }
  assert.deepEqual(await read(()=>state.shots),{"D'Angelo":6,'Ana <3':0,Noa:0});
 });
 await test('Menú con diez jugadores: scroll real hasta Basta y la última opción',async()=>{
  await setup();
  await read(()=>{state.players=Array.from({length:10},(_,i)=>({name:'Jugador '+i,gender:i%2?'f':'m',emoji:'⚡'}));});
  for(const viewport of [{width:320,height:568},{width:1280,height:600}]){
   await page.setViewportSize(viewport);await click('#screen-basta .hamburger');await page.waitForTimeout(400);
   const body=page.locator('.menu-body');
   assert.equal(await body.evaluate(el=>getComputedStyle(el).scrollbarWidth),'thin');
   assert.equal(await body.evaluate(el=>el.scrollHeight>el.clientHeight),true);
   await body.hover();await page.mouse.wheel(0,2000);await page.waitForTimeout(400);
   assert.ok(await body.evaluate(el=>el.scrollTop)>0);
   const exit=await page.locator('.btn-danger').boundingBox();assert.ok(exit.y>=0&&exit.y+exit.height<=viewport.height);
   await page.screenshot({path:`tests/menu-scroll-${viewport.width}.png`});
   await click('.btn-danger');assert.equal(await page.locator('#screen-home').evaluate(el=>el.classList.contains('active')),true);
   await click('#btn-resume');await click('#screen-basta .hamburger');await page.waitForTimeout(400);
   await body.hover();await page.mouse.wheel(0,-2000);await page.waitForTimeout(400);
   await page.locator('.menu-mode-btn[data-mode="basta"]').click();assert.equal(await read(()=>state.mode),'basta');
  }
 });
 }finally{fs.writeFileSync(process.env.TEST_RESULTS_FILE || 'tests/results-basta.json',JSON.stringify(results,null,2));await browser.close();}
 console.log(`${results.filter(r=>r.status==='PASS').length}/${results.length} PASS`);
 if(results.some(r=>r.status==='FAIL'))process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1});
