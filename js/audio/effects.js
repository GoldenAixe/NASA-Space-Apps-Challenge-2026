// Independent sound-effect bus: narration never mutes or cancels the engine.
let engineNode=null, engineGain=null, engineFilter=null, engineLevel=0;
const soundEvents=[];
function ensureEngine() {
  if (!audioContext || engineNode) return;
  const buffer=audioContext.createBuffer(1,audioContext.sampleRate*2,audioContext.sampleRate);
  const data=buffer.getChannelData(0);
  let brown=0;
  for(let i=0;i<data.length;i++){brown=(brown+(Math.random()*2-1)*.04)/1.015;data[i]=brown*4;}
  engineNode=audioContext.createBufferSource();engineNode.buffer=buffer;engineNode.loop=true;
  engineFilter=audioContext.createBiquadFilter();engineFilter.type="lowpass";engineFilter.frequency.value=750;
  engineGain=audioContext.createGain();engineGain.gain.value=0;
  engineNode.connect(engineFilter);engineFilter.connect(engineGain);engineGain.connect(audioContext.destination);engineNode.start();
}
function engineTick() {
  if (!audioContext) return;
  ensureEngine();
  const running=started&&!paused&&!pn&&!ended;
  let level=0;
  if(running){
    if(lau.ph===2)level=.95;
    else if([5,14].includes(current().id)&&sceneAge<2)level=.7*(1-sm(sceneAge/2));
    else if(cur.sp||tr||cruise)level=.28;
    else if(lau.ph===1)level=.12;
  }
  engineLevel=level;
  engineGain.gain.setTargetAtTime(level*SET.sv*1.8,audioContext.currentTime,.08);
  engineFilter.frequency.setTargetAtTime(220+level*850,audioContext.currentTime,.15);
}
function rocketImpact(volume) {
  if(!audioContext||!SET.sv||paused)return;
  const duration=.65, n=audioContext.sampleRate*duration;
  const buffer=audioContext.createBuffer(1,n,audioContext.sampleRate),data=buffer.getChannelData(0);
  for(let i=0;i<n;i++)data[i]=(Math.random()*2-1)*Math.pow(1-i/n,2.5);
  const node=audioContext.createBufferSource(),gain=audioContext.createGain(),filter=audioContext.createBiquadFilter();
  node.buffer=buffer;filter.type="lowpass";filter.frequency.value=550;
  gain.gain.value=volume*SET.sv*2;node.connect(filter);filter.connect(gain);gain.connect(audioContext.destination);
  node.start();node.onended=()=>{node.disconnect();filter.disconnect();gain.disconnect()};
  soundEvents.push({kind:"rocket-impact",time:audioContext.currentTime});
}
