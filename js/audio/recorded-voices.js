const recordedVoiceBuffers=new Map(),recordedVoiceLoads=new Map();
let recordedVoiceSource=null,recordedVoiceGain=null;
function recordedClip(){return RECORDED_CLIPS[line().speaker]?.[current().id+":"+lineIndex]||null;}
function recordingCaptionOnly(){return !!RECORDED_VOICES[line().speaker]&&!recordedClip()&&!!speechText();}
function loadRecordedVoice(role){
  if(recordedVoiceBuffers.has(role))return Promise.resolve(recordedVoiceBuffers.get(role));
  if(recordedVoiceLoads.has(role))return recordedVoiceLoads.get(role);
  const load=(async()=>{
    if(!audioContext)throw Error("Audio is unavailable");
    const response=await fetch(RECORDED_VOICES[role].url);
    if(!response.ok)throw Error("Recording could not load");
    const buffer=await audioContext.decodeAudioData(await response.arrayBuffer());
    recordedVoiceBuffers.set(role,buffer);return buffer;
  })();
  recordedVoiceLoads.set(role,load);return load;
}
function warmRecordedVoices(){for(const role of Object.keys(RECORDED_VOICES))loadRecordedVoice(role).catch(()=>{});}
function stopRecordedVoice(){
  if(recordedVoiceSource){recordedVoiceSource.onended=null;try{recordedVoiceSource.stop();}catch{}recordedVoiceSource.disconnect();}
  recordedVoiceGain?.disconnect();recordedVoiceSource=recordedVoiceGain=null;
}
async function playRecordedVoice(role,clip,token){
  try{
    const buffer=await loadRecordedVoice(role);
    if(token!==speechToken||!started||ended||!SET.narr||SET.nv===0)return;
    const duration=Math.min(clip.end,buffer.duration)-clip.start;
    if(duration<=0)throw Error("Recording range is unavailable");
    const source=audioContext.createBufferSource(),gain=audioContext.createGain();
    source.buffer=buffer;gain.gain.value=SET.nv;source.connect(gain);gain.connect(audioContext.destination);
    recordedVoiceSource=source;recordedVoiceGain=gain;
    source.onended=()=>{
      source.disconnect();gain.disconnect();
      if(token===speechToken){recordedVoiceSource=recordedVoiceGain=null;spokenDone=true;}
    };
    if(audioContext.state==="suspended"&&!paused&&!pn)await audioContext.resume();
    if(token!==speechToken){source.onended=null;source.disconnect();gain.disconnect();return;}
    source.start(audioContext.currentTime,clip.start,duration);speechStarted=true;
  }catch(error){
    if(token!==speechToken)return;
    spokenDone=true;SET.cap=true;caption();notify("The recording could not play. Subtitles remain available.");
  }
}
