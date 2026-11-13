process.chdir(__dirname);
const fs=require('fs'),vm=require('vm'),assert=require('assert');const{createCanvas}=require('@napi-rs/canvas');
class Element{
 constructor(tag='div'){this.tagName=tag.toUpperCase();this.children=[];this.hidden=false;this.disabled=false;this.style={};this.dataset={};this.attrs={};this.textContent='';this.className='';this.events={};this.value=0;this.classList={add:(...s)=>s.forEach(x=>{if(!this.className.includes(x))this.className+=' '+x}),remove:(...s)=>s.forEach(x=>this.className=this.className.split(/\s+/).filter(z=>z!==x).join(' ')),toggle:(s,on)=>on?this.classList.add(s):this.classList.remove(s)};}
 append(...xs){this.children.push(...xs);xs.forEach(x=>{if(typeof x==='object')x.parentNode=this})}prepend(x){this.children.unshift(x)}replaceChildren(...x){this.children=[];this.append(...x)}
 setAttribute(k,v){this.attrs[k]=v}getAttribute(k){return this.attrs[k]}
 addEventListener(k,f){(this.events[k]??=[]).push(f)}
 querySelector(s){return this.querySelectorAll(s)[0]||new Element('button')}
 querySelectorAll(s){return this.children.flatMap(x=>typeof x==='object'?[...(s.includes(x.tagName.toLowerCase())||s==='button,a,input'&&['BUTTON','A','INPUT'].includes(x.tagName)?[x]:[]),...(x.querySelectorAll?.(s)||[])]:[])}
 focus(){doc.activeElement=this}getBoundingClientRect(){return {left:1220,top:270,right:1420,bottom:470,width:200,height:200}}setPointerCapture(){}
 closest(s){if(s==='[data-a]')return this.dataset.a?this:null;if(s==='.lb')return this.className.includes('lb')?this:null;return null}
 getContext(){if(!this.canvas)this.canvas=createCanvas(this.width||512,this.height||256);return this.canvas.getContext('2d')}
}
const ids={},doc={body:new Element('body'),hidden:false,activeElement:null,events:{},getElementById:id=>ids[id]||null,createElement:tag=>new Element(tag),createTextNode:text=>text,addEventListener(k,f){(this.events[k]??=[]).push(f)}};
const html=fs.readFileSync('../index.html','utf8');for(const m of html.matchAll(/<(\w+)\b[^>]*\bid="([^"]+)"[^>]*>/g)){ids[m[2]]=new Element(m[1]);ids[m[2]].hidden=/\bhidden/.test(m[0]);}
for(const id of ['intro','pm','end']){const b=new Element('button');ids[id].append(b)}
let now=0,raf=null,storage={},speechEvents=[],pending=null;const voiceList=Array.from({length:14},(_,i)=>({name:(i%2?'Natural Jenny ':'Natural David ')+i,lang:'en-US',voiceURI:'v'+i}));
const speech={speaking:false,paused:false,getVoices:()=>voiceList,addEventListener(){},cancel(){if(pending){const u=pending;pending=null;speech.speaking=false;u.onerror?.({error:'canceled'})}},speak(u){pending=u;speech.speaking=true;speechEvents.push({text:u.text,pitch:u.pitch,rate:u.rate,voice:u.voice?.name});u.onstart?.()},pause(){speech.paused=true},resume(){speech.paused=false}};
const context={console,document:doc,innerWidth:1440,innerHeight:900,devicePixelRatio:1,performance:{now:()=>now},setTimeout,clearTimeout,requestAnimationFrame:f=>raf=f,addEventListener(){},matchMedia:()=>({matches:false,addEventListener(){}}),localStorage:{getItem:k=>storage[k]??null,setItem:(k,v)=>storage[k]=v},SpeechSynthesisUtterance:function(text){this.text=text},speechSynthesis:speech,confirm:()=>true,location:{reload(){}},navigator:{}};context.window=context;vm.createContext(context);
vm.runInContext(fs.readFileSync('../vendor/three.min.js','utf8'),context);
class Renderer{constructor(){this.domElement=new Element('canvas');this.shadowMap={};this.info={render:{calls:100},memory:{geometries:1}};}setPixelRatio(){}setSize(){}setViewport(){}setScissorTest(){}setScissor(){}render(s,c){s.updateMatrixWorld(true);c.updateMatrixWorld(true)}dispose(){}}
context.THREE.WebGLRenderer=Renderer;
for(const file of ['story.js','scene.js','main.js'])vm.runInContext(fs.readFileSync('../'+file,'utf8'),context,{filename:file});
function run(s){return vm.runInContext(s,context)}
function tick(secs=.05){const end=now+secs*1000;while(now<end){now+=50;raf(now);}}
function endSpeech(){if(pending&&!speech.paused){const u=pending;pending=null;speech.speaking=false;u.onend?.()}}
const results=[];
function check(name,fn){fn();results.push(name);console.log('PASS',name)}
check('All 22 scenes, six chapters and 12 hardware model factories initialize',()=>{assert.equal(run('STORY.length'),22);assert.equal(run('Object.keys(HW).length'),12);run('Object.keys(HW).forEach(k=>{const g=B[k]();if(!g.children.length)throw Error(k);disposeGroup(g)})')});
check('All source narrative/dialogue text retained in order',()=>{const raw=fs.readFileSync('story-source.txt','utf8').split('\n'),scenes=run('STORY');for(const scene of scenes){const by={};for(const l of scene.lines)(by[l.sourceLine]??=[]).push(l.text);for(const [i,a]of Object.entries(by)){const normalize=s=>s.replace(/["“”]/g,'').replace(/\s+/g,' ').trim();assert.equal(normalize(a.join(' ')),normalize(raw[i]),'source line '+i)}}});
check('Starting begins at scene 1 with visible Kite and unique voice assignments',()=>{run('start()');tick(1);assert.equal(run('sceneIndex'),0);assert.equal(run('rv.visible'),true);assert.equal(run('Object.keys(voiceAssignments).length'),14);assert.equal(new Set(speechEvents.map(x=>x.voice)).size,1);});
check('Narration completion gates progression regardless of elapsed time',()=>{tick(15);assert.equal(run('lineIndex'),0);assert.equal(run('lineComplete'),false);endSpeech();tick(.8);assert.equal(run('lineIndex'),1)});
check('Pause freezes story position, captions and timers; stale speech cannot advance',()=>{const before=run('[sceneIndex,lineIndex,sceneAge,lineAge,pos]');run('pause(true)');endSpeech();tick(15);assert.deepEqual(run('[sceneIndex,lineIndex,sceneAge,lineAge,pos]'),before);run('pause(false)');endSpeech();tick(5)});
check('Full Auto Play traverses all 96 utterances and marks only completed encounters',()=>{let loops=0;while(!run('ended')&&loops++<800){endSpeech();tick(1)}assert(run('ended'),'did not reach ending');assert.equal(run('completedScenes.size'),22);assert.equal(run('done.size'),12);assert.equal(speechEvents.length,96);assert.equal(run('JSON.parse(localStorage.getItem(SAVE_KEY)).ended'),true)});
check('Continue restores completed adventure; Start clears previous progress',()=>{run('exit(); start(true)');assert(run('ended'));run('exit(); start(false)');assert.equal(run('sceneIndex'),0);assert.equal(run('done.size'),0);assert(!run('ended'));});
check('Unfinished dialogue resumes at saved line; completed lines are not re-spoken',()=>{endSpeech();tick(6);run('auto=false');endSpeech();tick(6);const before=run('[sceneIndex,lineIndex,lineComplete]');const n=speechEvents.length;run('exit(); start(true)');tick(1);assert.deepEqual(run('[sceneIndex,lineIndex,lineComplete]'),before);assert.equal(speechEvents.length,n);});
check('Hardware information preserves dialogue and does not complete encounters',()=>{run('enterScene(6); auto=false');tick(3);const before=run('[sceneIndex,lineIndex,done.size]');run('openInfo("lmod")');tick(30);assert.deepEqual(run('[sceneIndex,lineIndex,done.size]'),before);assert(ids.pn.children.some(x=>x.textContent==='Apollo Lunar Module'));run('closeInfo()');assert(!run('pn'));});
check('All hardware panels render complete factual fields',()=>{for(const key of run('Object.keys(HW)')){run(`openInfo('${key}')`);assert.equal(ids.pn.children.filter(e=>e.tagName==='P').length>=7,true,key);run('closeInfo()')}});
check('Wheel changes camera only in manual mode; never changes line or chapter',()=>{const before=run('[sceneIndex,lineIndex]');const e={deltaY:100,deltaMode:0,preventDefault(){}};run('auto=true');const z=run('manualZoom');run('R.domElement').events.wheel[0](e);assert.equal(run('manualZoom'),z);run('auto=false');run('R.domElement').events.wheel[0](e);assert(run('manualZoom')>z);assert.deepEqual(run('[sceneIndex,lineIndex]'),before)});
check('Reduced motion and all environment transitions execute',()=>{run('SET.rm=true');for(let i=0;i<22;i++){run(`enterScene(${i})`);tick(.2)}assert.equal(run('ci'),4)});
check('No voices: complete timed subtitle fallback reaches ending',()=>{run('stopSpeech();syn.getVoices=()=>[];chooseVoices();SET.narr=false;start(false)');let n=0;while(!run('ended')&&n++<1500)tick(1);assert(run('ended'));});
check('Missing/corrupt saves are rejected safely',()=>{storage['kite-story-v2']='broken';assert.equal(run('readSave()'),null);storage['kite-story-v2']='{"version":2,"scene":99,"line":0}';assert.equal(run('readSave()'),null)});
fs.writeFileSync('test-results.json',JSON.stringify({passed:results,utterances:96,limitations:['Node VM with actual Three.js geometry and mocked WebGL/DOM/speech; not a real-browser or audio-quality test.']},null,2));

console.log('PASS total:',results.length);process.exit(0);
