"use strict";
/* The original position-triggered story was replaced because it cancelled unfinished
   dialogue, marked encounters complete too early and let scrolling bypass narration.
   Rendering, voxel helpers, terrain, sky, camera math, map, particles, labels and
   the hardware observation viewport are retained and adapted in scene.js. */
const SET={nv:.9,sv:.20,narr:true,cap:true,rm:matchMedia('(prefers-reduced-motion: reduce)').matches};
let ci=-1,cur,PL=1,pos=0,tv=0,v=0,HWs=[],done=new Set(),fired=new Set(),paused=true,pn=false,pi=-1,scn=null,tr=null,started=false,hwk=null,ended=false,free=false,snap=0,rk=null,rfl=null,near=-1,near1=new Set(),cyaw=0,cpit=0,lau={ph:0},sceneIndex=0,lineIndex=0,lineComplete=false,auto=true;
let targetPos=0,sceneAge=0,lineAge=0,lineWait=.35,sceneSettling=0,spokenDone=false,speechStarted=false,speechToken=0,utterance=null,manualZoom=1,completedScenes=new Set(),discoveries=new Set(),audioContext=null,toastTimer=0,pausedSpeech=false,needSpeak=false,hasSave=false,focusReturn=null,lastFrame=performance.now(),elapsed=0,lowFrames=0,performanceWindow=0;
const SAVE_KEY='kite-story-v2',current=()=>STORY[sceneIndex],line=()=>current().lines[lineIndex],veh=()=>cur?.sp?ship:rv;
const idx=()=>cur?.subs.findIndex(s=>!done.has(s.id))??-1;
const syn=window.speechSynthesis;
let voiceList=[],voiceAssignments={};
function chooseVoices(){
 voiceList=syn?syn.getVoices().filter(v=>/^en(?:-|_)/i.test(v.lang)):[];
 const pool=[...voiceList].sort((a,b)=>Number(/natural|neural|premium|enhanced/i.test(b.name))-Number(/natural|neural|premium|enhanced/i.test(a.name)));
 const used=new Set();voiceAssignments={};
 for(const [key,profile] of Object.entries(VOICES)){
  const rx=profile.g==='m'?/\bmale\b|david|daniel|guy|mark|alex|george|ryan|thomas|davis/i:/female|zira|samantha|aria|jenny|susan|karen|moira|victoria|hazel|libby|sonia/i;
  const same=pool.filter(v=>rx.test(v.name)&&!(profile.g==='m'&&/female/i.test(v.name)));
  const chosen=same.find(v=>!used.has(v.voiceURI))||pool.find(v=>!used.has(v.voiceURI))||same[profile.vi%Math.max(1,same.length)]||pool[profile.vi%Math.max(1,pool.length)];
  if(chosen){voiceAssignments[key]=chosen;used.add(chosen.voiceURI);}
 }
}
chooseVoices();if(syn)syn.addEventListener('voiceschanged',chooseVoices);
function notify(text){$('toast').textContent=text;$('toast').hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').hidden=true,4200)}
function audioUnlock(){try{audioContext=audioContext||new(window.AudioContext||window.webkitAudioContext)();audioContext.resume().catch(()=>{});}catch{}}
function tone(f1,f2,duration,type='sine',volume=.05){
 if(!audioContext||paused||!started||!SET.sv)return;
 const o=audioContext.createOscillator(),g=audioContext.createGain(),t=audioContext.currentTime;
 o.type=type;o.frequency.setValueAtTime(f1,t);o.frequency.exponentialRampToValueAtTime(Math.max(1,f2),t+duration);
 g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(Math.max(.0002,volume*SET.sv),t+.025);g.gain.exponentialRampToValueAtTime(.0001,t+duration);
 o.connect(g);g.connect(audioContext.destination);o.start();o.stop(t+duration+.04);o.onended=()=>{o.disconnect();g.disconnect()};
}
function cue(){const t=line().text;
 if(/BEEP/.test(t)){tone(620,620,.18,'sine',.18);tone(930,620,.45,'sine',.05)}
 else if(/WHOOSH/.test(t))tone(65,180,1.4,'sawtooth',.10);
 else if(/PLOP/.test(t))tone(100,25,.5,'triangle',.18);
 else if(/THREE/.test(t))tone(520,780,.55,'sine',.10);
 else if(/electrical disturbance/.test(t))tone(210,60,.6,'sawtooth',.12);
 else if(/Thank you|Perfect/.test(t)&&current().chapter===3)tone(660,1200,.22,'sine',.08);
 else if(/reinforced|restored|repaired|clear loose/.test(t)&&current().id===11)tone(260,540,.3,'triangle',.08);
}
function stopSpeech(){speechToken++;if(syn){syn.cancel();syn.resume();}utterance=null;pausedSpeech=false;}
function speakLine(){
 stopSpeech();const token=speechToken;const l=line(),profile=VOICES[l.speaker];spokenDone=false;speechStarted=false;needSpeak=false;
 if(!SET.narr||SET.nv===0||!syn||!window.SpeechSynthesisUtterance){spokenDone=true;return;}
 const u=new SpeechSynthesisUtterance(l.text);utterance=u;u.lang=voiceAssignments[l.speaker]?.lang||'en-US';
 if(voiceAssignments[l.speaker])u.voice=voiceAssignments[l.speaker];
 u.pitch=profile.p;u.rate=profile.r;u.volume=SET.nv;
 u.onstart=()=>{if(token===speechToken)speechStarted=true};
 u.onend=()=>{if(token===speechToken)spokenDone=true};
 u.onerror=e=>{if(token!==speechToken)return;spokenDone=true;SET.cap=true;caption();if(!['canceled','interrupted'].includes(e.error))notify('Voice playback is unavailable. The complete story continues with timed subtitles.');};
 syn.speak(u);
}
function caption(){
 $('nb').hidden=!started||paused||pn||ended;
 $('sn').textContent=VOICES[line().speaker].name;$('nt').textContent=line().text;$('nt').hidden=!SET.cap;
 $('rb').style.filter=`hue-rotate(${VOICES[line().speaker].hue}deg)`;
 $('advance').hidden=auto||!lineComplete;
 $('badge').textContent=!SET.narr?'Read at your own pace • Voice off':lineComplete&&!auto?'Ready when you are':'';
 $('sound').textContent='Voice: '+(SET.narr?'ON':'OFF');$('sound').setAttribute('aria-pressed',SET.narr);
 $('captions').textContent='Subtitles: '+(SET.cap?'ON':'OFF');$('captions').setAttribute('aria-pressed',SET.cap);
 $('ap').textContent='Auto Play: '+(auto?'ON':'OFF');$('ap').setAttribute('aria-pressed',auto);
}
function tlb(){if(!cur)return;const s=current();$('chp').textContent=`CHAPTER ${s.chapter} / 6 · ${cur.n}`;$('cm').textContent=s.title;$('storyProgress').value=completedScenes.size;$('storyCount').textContent=`Scene ${s.id} of 22 · ${done.size} / 12 explorers met`;}
function refresh(){HWs.forEach(h=>{const key=cur.subs[h.i].hw;h.bm.color.setHex(done.has(key)?0x7dff8a:0x4fd8ff);h.lb.classList.toggle('ok',done.has(key));});}
function readSave(){try{const d=JSON.parse(localStorage.getItem(SAVE_KEY));if(!d||d.version!==2||!Number.isInteger(d.scene)||!STORY[d.scene]||!Number.isInteger(d.line)||!STORY[d.scene].lines[d.line])return null;if(!['completedScenes','encounters','discoveries'].every(k=>Array.isArray(d[k])))return null;return d;}catch{return null;}}
function save(){if(!started&&!ended)return;const d={version:2,chapter:current().chapter,scene:sceneIndex,line:lineIndex,lineComplete,completedScenes:[...completedScenes],encounters:[...done],discoveries:[...discoveries],auto,ended,settings:{nv:SET.nv,narr:SET.narr,cap:SET.cap}};try{localStorage.setItem(SAVE_KEY,JSON.stringify(d));hasSave=true;}catch{if(!window.saveWarning){notify('This browser is blocking saved progress. Keep this tab open to continue.');window.saveWarning=true;}}}
function updateParts(){
 const s=current();$('parts').hidden=![3,4].includes(s.chapter);const labels=[['lmod','Structural supports'],['lrv','Motor components'],['als','Monitoring circuits'],['surv','Camera & scoop']];
 let count=0;if(s.id===11){const source=line().sourceLine;if(source===44)count=lineIndex===1?1:lineIndex===2?2:3;else if(source===45)count=4;}if(s.id>=12)count=4;
 $('parts').replaceChildren(...labels.map(([key,label],i)=>{const d=document.createElement('div');d.className='part'+(i<count?' fixed':'');d.textContent=(i<count?'✓ Installed: ':done.has(key)?'✓ Collected: ':'Find: ')+label;return d;}));
}
function beginLine(resumeComplete=false){
 lineAge=0;lineWait=.35;lineComplete=resumeComplete;spokenDone=resumeComplete;
 updateParts();setDemonstration();caption();cue();if(!resumeComplete)speakLine();else stopSpeech();save();
}
function enterScene(index,li=0,resumeComplete=false){
 stopSpeech();sceneIndex=index;lineIndex=li;lineComplete=resumeComplete;sceneAge=0;lastMusic=0;manualZoom=1;cyaw=cpit=0;
 const s=current(),envIndex=CH.findIndex(c=>c.id===s.env),changed=ci!==envIndex;
 if(changed)build(envIndex);
 targetPos=s.f*PL;
 if(!started||changed||SET.rm)pos=targetPos;
 sceneSettling=SET.rm?0:(changed?.65:Math.min(2.2,Math.abs(targetPos-pos)/20));
 if(rk){rk.position.copy(rk.userData.base);rk.rotation.set(0,0,0);rfl.visible=false;}
 if(s.env==='moon'&&rk){const p=cur.cv.getPointAt(s.id<=6?0:.98);rk.position.set(p.x+8,gy(p.x+8,p.z)+.4,p.z-8);rk.userData.base.copy(rk.position);if(s.id<11)rk.rotation.z=.09;}
 $('sceneNote').textContent=s.hardware?'Story illustration • Real hardware remains retired.':s.id===11?'Kite’s fictional repair • Four friends, four contributions.':'';
 tlb();refresh();updateParts();setDemonstration();caption();needSpeak=!resumeComplete;spokenDone=resumeComplete;
 if(sceneSettling===0)beginLine(resumeComplete);
}
function finishScene(){
 completedScenes.add(current().id);
 const key=current().hardware;if(key){done.add(key);discoveries.add(key);if(key==='spir'){done.add('opp');discoveries.add('opp')}if(key==='vik1'){done.add('vik2');discoveries.add('vik2')}}
 refresh();if(sceneIndex===STORY.length-1){ended=true;lineComplete=true;save();stopSpeech();$('endCount').textContent=`All six chapters complete. You met ${done.size} historical explorers.`;$('end').hidden=false;$('nb').hidden=true;$('parts').hidden=true;$('end').querySelector('button').focus();return;}
 enterScene(sceneIndex+1);
}
function advance(){if(!started||paused||pn||ended||!lineComplete)return;if(lineIndex+1<current().lines.length){lineIndex++;beginLine()}else finishScene()}
function start(resume=false){
 audioUnlock();const d=resume?readSave():null;done=new Set(d?.encounters?.filter(k=>HW[k])||[]);discoveries=new Set(d?.discoveries?.filter(k=>HW[k])||[]);completedScenes=new Set(d?.completedScenes?.filter(n=>Number.isInteger(n)&&n>=1&&n<=22)||[]);
 if(d?.settings){SET.nv=cl(Number(d.settings.nv)||0,0,1);SET.narr=!!d.settings.narr;SET.cap=!!d.settings.cap;}$('volume').value=SET.nv;
 started=true;paused=false;ended=!!d?.ended;auto=d?!!d.auto:true;$('intro').hidden=true;$('end').hidden=true;$('pm').hidden=true;document.body.classList.remove('intro-mode');
 enterScene(d?.scene||0,d?.line||0,!!d?.lineComplete);
 if(ended){$('endCount').textContent=`All six chapters complete. You met ${done.size} historical explorers.`;$('end').hidden=false;stopSpeech();$('nb').hidden=true;}else $('ap').focus();
}
function pause(on){
 if(!started||ended||pn)return;paused=on;$('pm').hidden=!on;
 if(on){focusReturn=document.activeElement;if(syn&&syn.speaking){syn.pause();pausedSpeech=true;}audioContext?.suspend().catch(()=>{});save();$('pm').querySelector('button').focus();}
 else{audioContext?.resume().catch(()=>{});if(pausedSpeech){syn?.resume();pausedSpeech=false;}focusReturn?.focus();}caption();
}
function exit(){
 if(!confirm('Save your progress and return to the introduction?'))return;
 save();stopSpeech();started=false;paused=true;ended=false;pn=false;audioContext?.suspend().catch(()=>{});$('pm').hidden=$('end').hidden=$('nb').hidden=$('pn').hidden=true;$('parts').hidden=true;$('intro').hidden=false;$('rs').hidden=!readSave();document.body.classList.add('intro-mode');document.body.classList.remove('panel-mode');setHW(null,'');hwk=null;disposeGroup(demoLayer);demoKey=null;build(0);pos=targetPos=0;sceneAge=0;$('intro').querySelector('button').focus();
}
function openInfo(key){
 if(!started||paused||pn||ended||!HW[key])return;const d=HW[key];focusReturn=document.activeElement;pn=true;pi=cur.subs.findIndex(s=>s.hw===key);discoveries.add(key);
 if(syn&&syn.speaking){syn.pause();pausedSpeech=true;}audioContext?.suspend().catch(()=>{});
 const panel=$('pn');panel.replaceChildren();const h=document.createElement('h2');h.className='f';h.textContent=d.full;panel.append(h);
 const intro=document.createElement('p');intro.textContent=d.intro;panel.append(intro);
 for(const [label,value] of d.rows){const p=document.createElement('p'),b=document.createElement('b');b.textContent=label;p.append(b,document.createTextNode(value));panel.append(p)}
 if(d.note){const p=document.createElement('p');p.className='note';p.textContent=d.note;panel.append(p)}
 const a=document.createElement('a');a.href=d.source;a.target='_blank';a.rel='noopener noreferrer';a.textContent='NASA source';panel.append(a);
 const b=document.createElement('button');b.className='pb';b.dataset.a='close-info';b.textContent='Continue';panel.append(document.createElement('br'),b);
 panel.hidden=false;panel.classList.add('open');panel.scrollTop=0;document.body.classList.add('panel-mode');hwk=key;setHW(key,'STYLIZED HARDWARE MODEL');save();b.focus();caption();
}
function closeInfo(){pn=false;pi=-1;$('pn').hidden=true;$('pn').classList.remove('open');document.body.classList.remove('panel-mode');setHW(null,'');hwk=null;if(pausedSpeech){syn?.resume();pausedSpeech=false;}audioContext?.resume().catch(()=>{});focusReturn?.focus();caption();}
function nearest(){let best=null,dist=Infinity;for(const h of HWs){const d=h.g.position.distanceTo(rv.position);if(d<dist){best=h;dist=d}}return dist<35?best:null}
document.addEventListener('click',e=>{const b=e.target.closest('[data-a]');if(!b)return;switch(b.dataset.a){case 'start':start();break;case 'resume':start(true);break;case 'auto':auto=!auto;save();caption();break;case 'pause':pause(true);break;case 'unpause':pause(false);break;case 'exit':exit();break;case 'continue':advance();break;case 'close-info':closeInfo();break;case 'sound':SET.narr=!SET.narr;if(!SET.narr)SET.cap=true;stopSpeech();if(!SET.narr)spokenDone=true;else if(!lineComplete&&!paused&&!pn)speakLine();save();caption();break;case 'captions':SET.cap=!SET.cap;if(!SET.cap&&!SET.narr){SET.cap=true;notify('Keep subtitles on while the voice is off so you can follow the story.')}save();caption();break;}});
$('volume').addEventListener('input',e=>{SET.nv=+e.target.value;SET.sv=.22*SET.nv;if(utterance)utterance.volume=SET.nv;if(SET.nv===0){stopSpeech();spokenDone=true;SET.cap=true;}save();caption();});
$('lbs').addEventListener('click',e=>{const b=e.target.closest('.lb');if(b){const h=HWs[+b.dataset.k];if(h)openInfo(cur.subs[h.i].hw)}});
addEventListener('keydown',e=>{
 if(e.key==='Tab'&&(paused&&started||pn||ended)){const box=pn?$('pn'):ended?$('end'):$('pm');const els=[...box.querySelectorAll('button,a,input')].filter(x=>!x.hidden&&!x.disabled);if(els.length){if(e.shiftKey&&document.activeElement===els[0]){els.at(-1).focus();e.preventDefault()}else if(!e.shiftKey&&document.activeElement===els.at(-1)){els[0].focus();e.preventDefault()}}return;}
 if(/INPUT|BUTTON|A/.test(e.target.tagName)&&!['Escape','e','E'].includes(e.key))return;
 if(e.key==='Escape'){if(pn)closeInfo();else pause(!paused)}
 if((e.key==='e'||e.key==='E')&&!paused&&!pn){const h=nearest();if(h)openInfo(cur.subs[h.i].hw)}
 if((e.key==='Enter'||e.key===' ')&&!auto&&!paused&&!pn){e.preventDefault();advance()}
 if(!auto&&!paused&&!pn&&e.key.startsWith('Arrow')){e.preventDefault();if(e.key==='ArrowLeft')cyaw-=.12;if(e.key==='ArrowRight')cyaw+=.12;if(e.key==='ArrowUp')manualZoom=cl(manualZoom-.08,.65,1.6);if(e.key==='ArrowDown')manualZoom=cl(manualZoom+.08,.65,1.6);}
});
const pointers=new Map();let pointerStart=null,dragDistance=0,pinchDistance=0;
function cameraAllowed(){return started&&!paused&&!pn&&!ended&&![3,4,5,11,12,13,14,22].includes(current().id)}
R.domElement.addEventListener('pointerdown',e=>{if(e.button&&e.pointerType==='mouse')return;pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});pointerStart={x:e.clientX,y:e.clientY};dragDistance=0;R.domElement.setPointerCapture(e.pointerId)});
R.domElement.addEventListener('pointermove',e=>{const old=pointers.get(e.pointerId);if(!old)return;const dx=e.clientX-old.x,dy=e.clientY-old.y;dragDistance+=Math.abs(dx)+Math.abs(dy);pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});if(!cameraAllowed())return;if(pointers.size===2){const[a,b]=[...pointers.values()],d=Math.hypot(a.x-b.x,a.y-b.y);if(pinchDistance&&!auto)manualZoom=cl(manualZoom+(pinchDistance-d)*.004,.65,1.6);pinchDistance=d;}else{cyaw=cl(cyaw-dx*.004,-1.2,1.2);cpit=cl(cpit+dy*.003,-.25,.65);}});
const ray=new THREE.Raycaster(),m2=new THREE.Vector2();
R.domElement.addEventListener('pointerup',e=>{pointers.delete(e.pointerId);pinchDistance=0;if(dragDistance>7||!started||paused||pn||ended)return;m2.set(e.clientX/innerWidth*2-1,1-e.clientY/innerHeight*2);ray.setFromCamera(m2,cam);const hits=ray.intersectObjects(HWs.map(h=>h.g),true);if(hits.length){let obj=hits[0].object;while(obj&&!HWs.some(h=>h.g===obj))obj=obj.parent;const h=HWs.find(h=>h.g===obj);if(h)openInfo(cur.subs[h.i].hw)}});
R.domElement.addEventListener('pointercancel',e=>{pointers.delete(e.pointerId);pinchDistance=0;});
R.domElement.addEventListener('wheel',e=>{e.preventDefault();if(!cameraAllowed()||auto)return;const delta=e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?innerHeight:1);manualZoom=cl(manualZoom+cl(delta,-120,120)*.0015,.65,1.6);},{passive:false});
addEventListener('pagehide',()=>{save();stopSpeech();audioContext?.suspend().catch(()=>{});});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&started&&!paused&&!pn&&!ended)pause(true);});
matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',e=>{SET.rm=e.matches;});
// Reuse the original particle pool, track stamping, light rig and view interpolation.
const vec=new THREE.Vector3(),target=new THREE.Vector3(),desired=new THREE.Vector3(),look=new THREE.Vector3(),projected=new THREE.Vector3();
let lastMusic=0,lastMap=0;
function animateScene(dt){
 const active=started&&!paused&&!pn&&!ended,s=current(),sp=line().speaker;rv.scale.setScalar(started?1:1.6);
 if(active){sceneAge+=dt;if(!SET.rm)elapsed+=dt;const delta=targetPos-pos;v=Math.abs(delta)>0.03?Math.sign(delta)*Math.min(Math.abs(delta)*2.5,28):0;pos=SET.rm?targetPos:cl(pos+v*dt,0,PL);}
 const f=cl(pos/PL,0,1),P=cur.cv.getPointAt(f),T=cur.cv.getTangentAt(f);
 if(!cur.sp){rv.visible=true;ship.visible=false;rv.position.set(P.x,gy(P.x,P.z),P.z);if(active&&Math.abs(v)>.3){rv.rotation.y=Math.atan2(T.x,T.z);rv.userData.ws.forEach(w=>w.rotation.x+=v*dt/.48);if(lastT.distanceToSquared(rv.position)>.7){stamp(rv.position.x,rv.position.z,rv.rotation.y);lastT.copy(rv.position)}}else rv.rotation.y+=wr(.25-rv.rotation.y)*Math.min(1,dt*3);
 }else{rv.visible=false;ship.visible=true;ship.position.copy(P);ship.rotation.y=Math.PI;ship.rotation.z=s.id===4&&!SET.rm?Math.sin(elapsed*6)*.08:0;ship.position.y+=SET.rm?0:Math.sin(elapsed)*.15;}
 if(!started){rv.position.set(-6,gy(-6,0),0);rv.rotation.y=.35;rv.visible=true;head.rotation.y=SET.rm?0:Math.sin(elapsed*.7)*.1;}
 if(active&&!SET.rm){head.rotation.z=sp==='kite'&&!spokenDone?Math.sin(elapsed*7)*.035:0;head.rotation.y=sp==='kite'?Math.sin(elapsed*1.8)*.12:0;
 const wave=[3,13,21].includes(s.id);arms.forEach((a,i)=>a.rotation.z=wave&&i===1?-1.8+Math.sin(elapsed*5)*.25:sp==='kite'?Math.sin(elapsed*3+i)*.13:0);
 eyeMats.forEach(m=>m.scale.y=(Math.sin(elapsed*.7)> .995?.14:.18));}
 if(rk){const base=rk.userData.base;rk.position.copy(base);rk.rotation.z=cur.id==='moon'&&s.id<11?.09:0;rfl.visible=false;
 if(started&&s.id===5){rk.position.y=base.y+(SET.rm?0:Math.max(0,6-sceneAge*3));}
 if(started&&(s.id===3||s.id===13)){
  const launching=s.id===3||line().sourceLine===53;
  if(launching){const t=s.id===3?sceneAge:lineAge;rk.position.y=base.y+(SET.rm?0:Math.min(65,t*t*1.1));rfl.visible=true;rfl.scale.set(2.5,3+Math.sin(elapsed*20)*.5,2.5);rfl.position.set(0,-3,0);rv.visible=t<1.1;}
 }
 }
 // All historical models stay on the ground. A cyan projection demonstrates mechanisms.
 // These gestures illustrate the story; they do not claim retired machines have restarted.
 for(const h of HWs){h.g.position.set(h.bx,h.by,h.bz);const key=cur.subs[h.i].hw;h.g.rotation.y=.3;h.rg.scale.setScalar(key===s.hardware&&!SET.rm?1+Math.sin(elapsed*3)*.05:1);h.bm.opacity=key===s.hardware?.2:.07;}
 if(active&&!SET.rm){animateDemonstration(dt);if(rk&&rfl.visible&&Math.random()<.65)ex(rk.position.clone().add(new THREE.Vector3(0,-1,0)),new THREE.Vector3((Math.random()-.5)*2,-5,(Math.random()-.5)*2),2.2,.7,0xffb350,true,.7);if(s.id===5&&sceneAge<2)ex(rk.position.clone(),new THREE.Vector3((Math.random()-.5)*7,.3,(Math.random()-.5)*7),1.8,1.1,0xb3b6ca,false,.23);}
 if(active&&s.id===11){const n=line().sourceLine===45?4:line().sourceLine===44?Math.min(3,lineIndex):0;repairVisual(n,dt);}
 else repairVisual(0,0,true);
 if(active&&[1,14,22].includes(s.id)&&sceneAge-lastMusic>2.4){lastMusic=sceneAge;tone([262,330,392,523][Math.floor(sceneAge/2.4)%4],[262,330,392,523][Math.floor(sceneAge/2.4)%4],1.3,'sine',.035);}
 if(!started)elapsed+=dt;
}
const demoLayer=new THREE.Group();W.add(demoLayer);let demoKey=null,demoModel=null;
function setDemonstration(){
 const key=HW[line().speaker]?line().speaker:current().hardware; if(key===demoKey)return;disposeGroup(demoLayer);demoKey=key;demoModel=null;if(!key)return;
 demoModel=mechanismModel(key);demoModel.scale.setScalar(key==='ing'?.85:.48);
 demoModel.traverse(o=>{if(o.isMesh){o.material=new THREE.MeshBasicMaterial({color:0x62dfff,wireframe:true,transparent:true,opacity:.42,depthWrite:false});}});
 demoLayer.add(demoModel);
}
function animateDemonstration(dt){
 if(!demoModel||!demoKey)return;const h=HWs.find(h=>cur.subs[h.i].hw===demoKey);if(!h)return;
 const denied=demoKey==='ing'&&line().sourceLine>=90;
 demoModel.visible=!denied;
 demoModel.position.set(h.bx,h.by+4.5,h.bz);const t=elapsed;
 const u=demoModel.userData;
 if(u.ws)u.ws.forEach(w=>w.rotation.x+=dt*1.4);
 if(u.hd)u.hd.rotation.y=Math.sin(t)*.18;
 if(u.arm)u.arm.rotation.z=Math.sin(t*1.5)*.2;
 if(u.signal)u.signal.scale.y=1+Math.sin(t*3)*.2;
 if(demoKey==='lmod')demoModel.rotation.y=Math.sin(t)*.06;
 if(demoKey==='lrv')demoModel.rotation.y=Math.sin(t)*.1;
 if(u.rotors)u.rotors.forEach((r,i)=>r.rotation.y+=(i?-1:1)*dt*15);
}
let repairPieces=[];
function ensureRepairs(){
 if(repairPieces.length&&repairPieces[0].parent===dyn)return;repairPieces=[];
 const bracket=V(G(),[[1,.15,.3,0,0,0,0xe8b54d],[.15,.8,.3,-.43,.35,0,0xe8b54d]]);
 const motor=G();Cy(motor,.35,.35,.7,0,0,0,0x51c9ee,1,8,Math.PI/2);V(motor,[[.12,.12,.4,0,0,.5,0xcbd9e6]]);
 const circuit=V(G(),[[.7,.08,.7,0,0,0,0x36a788],[.25,.12,.25,0,.1,0,0x242f46],[.1,.1,1,0,0,.65,0xffda64]]);
 const camera=V(G(),[[.6,.4,.3,0,0,0,0xcbd9e6],[.25,.25,.1,0,0,.2,0x51c9ee,1],[.12,.12,1,.5,-.1,.2,0xa3b3c9],[.4,.2,.5,.5,-.2,.7,0xe8b54d]]);
 repairPieces=[bracket,motor,circuit,camera];repairPieces.forEach(g=>dyn.add(g));
}
function repairVisual(n,dt,hide=false){if(hide){repairPieces.forEach(g=>g.visible=false);return;}if(!rk)return;ensureRepairs();repairPieces.forEach((g,i)=>{g.visible=i<n;const a=i*Math.PI/2;g.position.set(rk.position.x+Math.cos(a)*3.2,rk.position.y+1.5+i*1.8,rk.position.z+Math.sin(a)*3.2);if(!SET.rm)g.rotation.y+=dt*.8;});}
function cameraFrame(dt){
 const s=current(),focusKey=pn?hwk:line().speaker==='kite'?null:(HW[line().speaker]?line().speaker:s.hardware),h=HWs.find(h=>cur.subs[h.i].hw===focusKey);let center=rv.position.clone().add(new THREE.Vector3(0,1.8,0)),distance=12;
 if(cur.sp){center=ship.position.clone();desired.copy(center).add(new THREE.Vector3(9,5,15));target.copy(center);}
 else if(!started){if(innerWidth<700){desired.set(4,6,22);target.set(-5,-5,-2);}else{desired.set(9,6.5,20);target.set(0,4,-5);} }
 else{
  if(h){center.lerp(h.g.position.clone().add(new THREE.Vector3(0,1.8,0)),.62);distance=15;}
  if([3,5,11,12,13].includes(s.id)&&rk){center.lerp(rk.position.clone().add(new THREE.Vector3(0,5,0)),.65);distance=26;}
  if(s.id===22){distance=18+Math.min(sceneAge*.3,5);}
  if(innerWidth<700)distance*=1.5;
  const yaw=.4+cyaw,dist=distance*manualZoom;desired.set(center.x+Math.sin(yaw)*dist,center.y+5+cpit*8,center.z+Math.cos(yaw)*dist);target.copy(center);
 }
 const k=SET.rm||snap?1:1-Math.exp(-dt*3.1);cam.position.lerp(desired,k);look.lerp(target,k);cam.lookAt(look);snap=0;
 if(!cur.sp)cam.position.y=Math.max(cam.position.y,gy(cam.position.x,cam.position.z)+1.4);
 stars.position.copy(cam.position);gal.position.copy(cam.position);sky.position.copy(cam.position);gal.visible=cur.id==='moon'||!!cur.sp;
 sun.position.copy(veh().position).add(new THREE.Vector3(-22,25,20));sun.target.position.copy(veh().position);
 flare.visible=cur.id==='moon';if(flare.visible)flare.position.copy(cam.position).addScaledVector(SUND,430);
 if(cur.sunc){sunM.position.copy(cam.position).addScaledVector(SUND,420);sunM.quaternion.copy(cam.quaternion);}
 if(cur.id==='moon'){earth.visible=true;earth.position.copy(cam.position).addScaledVector(ED,430);earth.scale.setScalar(40);}
 HWs.forEach(h=>{const key=cur.subs[h.i].hw,dist=h.g.position.distanceTo(rv.position);projected.set(h.bx,h.by+h.top,h.bz).project(cam);const onscreen=started&&!pn&&!paused&&!ended&&projected.z<1&&projected.z>-1&&Math.abs(projected.x)<.93&&projected.y<.68&&projected.y>-.45&&dist<36;
 h.lb.style.display=onscreen?'block':'none';h.lb.disabled=!onscreen;h.lb.textContent=(done.has(key)?'✓ ':'')+HW[key].nm;h.lb.style.transform=`translate(${(projected.x*.5+.5)*innerWidth}px,${(-projected.y*.5+.5)*innerHeight}px) translate(-50%,-100%)`;});
}
function loop(now){
 requestAnimationFrame(loop);const raw=(now-lastFrame)/1000;lastFrame=now;if(document.hidden||(paused&&started&&!pn))return;const dt=Math.min(raw,.05),active=started&&!paused&&!pn&&!ended;
 if(active){
  if(sceneSettling>0){sceneSettling=Math.max(0,sceneSettling-dt);if(sceneSettling===0)beginLine(lineComplete);}
  else{lineAge+=dt;
   // A blocked browser speech service falls back only after it reports no playback.
   if(!spokenDone&&!speechStarted&&lineAge>5&&(!syn||!syn.speaking)){stopSpeech();spokenDone=true;notify('No speech voice is available here. Timed subtitles are enabled.');SET.cap=true;caption();}
   const readSeconds=Math.max(1.1,line().text.split(/\s+/).length/(SET.narr&&speechStarted?3.8:2.7));
   const actionMin=([3,5,13,22].includes(current().id)?2.5:0);
   if(spokenDone&&lineAge>=Math.max(readSeconds,actionMin)&&!lineComplete){lineComplete=true;lineWait=.35;caption();save();}
   if(lineComplete&&auto){lineWait-=dt;if(lineWait<=0)advance();}
  }
 }
 animateScene((paused||pn)&&started?0:dt);cameraFrame((paused||pn)&&started?0:dt);
 if(active&&!SET.rm){clouds.forEach(g=>{g.position.x+=dt*.35;if(g.position.x>160)g.position.x=-160});exs.forEach(s=>{if(!s.visible)return;const u=s.userData;u.life-=dt;if(u.life<=0){s.visible=false;return;}s.position.addScaledVector(u.vel,dt);s.material.opacity=(u.life/u.max)*u.op;});}
 if(now-lastMap>100){drawMM(veh());lastMap=now;}
 R.setViewport(0,0,bw,bh);R.render(sc,cam);
 if(hwk&&innerWidth>700){const rect=$('hw').getBoundingClientRect(),q=1/QP;R.setScissorTest(true);R.setViewport(rect.left*q,(innerHeight-rect.bottom)*q,rect.width*q,rect.height*q);R.setScissor(rect.left*q,(innerHeight-rect.bottom)*q,rect.width*q,rect.height*q);if(!SET.rm&&!paused)hgp.rotation.y+=dt*.35;R.render(hs,hc);R.setScissorTest(false);}
 performanceWindow+=dt;if(raw>.045)lowFrames++;if(performanceWindow>8){if(lowFrames>80&&QP<1.5){QP=1.5;R.shadowMap.enabled=false;rs();}lowFrames=0;performanceWindow=0;}
}
R.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();if(started)pause(true);notify('Graphics were interrupted. Progress is saved; reload to restore the adventure.');});
build(0);rv.visible=true;pos=0;targetPos=0;hasSave=!!readSave();$('rs').hidden=!hasSave;cameraFrame(1);$('loading').hidden=true;window.kiteReady=true;requestAnimationFrame(loop);
// Read-only diagnostics support verification without adding navigation or skipping controls.
window.kiteDiagnostics=()=>({scene:sceneIndex,line:lineIndex,chapter:current().chapter,completed:[...completedScenes],encounters:[...done],discoveries:[...discoveries],lineComplete,paused,panel:pn,auto,ended,voices:Object.fromEntries(Object.entries(voiceAssignments).map(([k,v])=>[k,v.name])),meshes:R.info.render.calls,geometries:R.info.memory.geometries});
