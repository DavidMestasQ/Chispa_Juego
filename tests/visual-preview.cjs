// Capturas de las pantallas existentes para revisar únicamente los estilos.
let pw;
try {pw=require('playwright');}catch{pw=require('playwright');}
const path=require('node:path');
const fs=require('node:fs');
const assert=require('node:assert/strict');
const players=[{name:'Diego',gender:'m',emoji:'🚀'},{name:'Ana',gender:'f',emoji:'🌸'},{name:'Noa',gender:'o',emoji:'⚡'}];
(async()=>{
 const browser=await pw.chromium.launch({channel:'msedge',headless:true});
 const results=[];
 try{
  for(const width of [390,1280]){
   const page=await browser.newPage({viewport:{width,height:900}});const errors=[];
   page.on('pageerror',e=>errors.push(e.message));
   await page.goto('file:///'+path.resolve('index.html').replaceAll('\\','/'));
   await page.evaluate(()=>{soundEnabled=false;window._visualRandom=Math.random;Math.random=()=>.9;localStorage.clear();});
   const snap=async(name)=>{await page.waitForTimeout(550);await page.screenshot({path:`tests/modern-${width}-${name}.png`});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth));results.push({width,screen:name,status:'PASS'});};
   await snap('home');
   await page.locator('.home-btn-main').click();
   await page.evaluate(players=>{state.players=players;renderPlayers();},players);await snap('players');
   await page.locator('#screen-players .btn-secondary').click();await snap('player-modal');
   await page.evaluate(()=>{closePlayerModal();goToModes();});await snap('modes');
   for(const mode of ['truth','trivia','never','who','todi','vs','impostor','basta']){
    await page.evaluate(mode=>{state.mode=mode;startGame();},mode);
    if(mode==='truth'){await snap('truth-choice');await page.locator('.choice-btn-truth').click();}
    if(mode==='basta'){await page.locator('#basta-start').click();await page.locator('#basta-letter-A').click();}
    await snap(mode);
   }
   await page.evaluate(()=>{switchMode('truth');chooseType('truth');openMenu();});await snap('menu');
   await page.evaluate(()=>{closeMenu();showShot('Ana','Prueba de estilo',2,null);});
   await page.locator('#shot-confirm-btn').waitFor({state:'visible'});await snap('shot');
   await page.evaluate(()=>{closeShotModal();Math.random=window._visualRandom;showResults();});await snap('results');
   assert.deepEqual(errors,[]);await page.close();
  }
 }finally{await browser.close();}
 fs.writeFileSync('tests/results-visual.json',JSON.stringify(results,null,2));
 console.log(`${results.length} capturas comprobadas, sin errores JavaScript`);
})().catch(e=>{console.error(e);process.exitCode=1});
