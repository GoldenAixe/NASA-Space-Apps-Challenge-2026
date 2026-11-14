function audioUnlock() {
  try {
    audioContext =
      audioContext ||
      new (window.AudioContext || window.webkitAudioContext)();
    audioContext.resume().catch(() => {});
    warmRecordedVoices();
    warmBackgroundMusic();
  } catch {}
}
function tone(f1, f2, duration, type = "sine", volume = 0.05, delay = 0) {
  if (!audioContext || paused || !started || !SET.sv) return;
  const o = audioContext.createOscillator(),
    g = audioContext.createGain(),
    t = audioContext.currentTime + delay;
  o.type = type;
  o.frequency.setValueAtTime(f1, t);
  o.frequency.exponentialRampToValueAtTime(Math.max(1, f2), t + duration);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(
    Math.max(0.0002, volume * SET.sv),
    t + 0.025,
  );
  g.gain.exponentialRampToValueAtTime(0.0001, t + duration);
  o.connect(g);
  g.connect(audioContext.destination);
  o.start(t);
  o.stop(t + duration + 0.04);
  o.onended = () => {
    o.disconnect();
    g.disconnect();
  };
}
function speechText() {
  const text = line().text;
  if (
    /^(?:WHOOSH!|PLOP!|BEEP! BEEP! BEEP!|THREE! TWO! ONE!)$/i.test(
      text.trim(),
    )
  )
    return "";
  return text.replace(/^Bz+\.*\s*/i, "");
}
function cue() {
  const t = line().text;
  const beeps = t.match(/\bbeep\b/gi) || [];
  if (!/happy beep/i.test(t))
    beeps.forEach((_,i) => tone(880,740,.17,"sine",.55,i*.28));
  if (/^Bzz/i.test(t)) tone(150, 90, 0.4, "sawtooth", 0.07);
  if (/happy beep/.test(t)) {
    tone(700, 950, 0.14, "sine", 0.13);
    tone(920, 1200, 0.21, "sine", 0.1, 0.16);
  }
  if (/electrical disturbance/.test(t))
    tone(210, 60, 0.45, "sawtooth", 0.08);
  if (current().chapter === 3 && lineIndex === current().lines.length - 1)
    tone(650, 1050, 0.24, "triangle", 0.1);
  if (current().id === 11 && lineIndex)
    tone(260, 540, 0.3, "triangle", 0.08);
}
function stopSpeech() {
  speechToken++;
  stopRecordedVoice();
  if (syn) {
    syn.cancel();
    syn.resume();
  }
  utterance = null;
  pausedSpeech = false;
}
function speakLine() {
  stopSpeech();
  const token = speechToken;
  const l = line(),
    profile = VOICES[l.speaker] || VOICES.narrator;
  spokenDone = false;
  speechStarted = false;
  needSpeak = false;
  if (
    route ||
    awaitingLaunch ||
    lau.go ||
    sceneSettling > 0 ||
    !speechText() ||
    !SET.narr ||
    SET.nv === 0
  ) {
    spokenDone = true;
    return;
  }
  if (RECORDED_VOICES[l.speaker]) {
    const clip=recordedClip();
    if (clip) playRecordedVoice(l.speaker,clip,token);
    else {spokenDone=true;caption();}
    return;
  }
  if(!syn||!window.SpeechSynthesisUtterance){spokenDone=true;return;}
  const u = new SpeechSynthesisUtterance(speechText());
  utterance = u;
  u.lang = voiceAssignments[l.speaker]?.lang || "en-US";
  if (voiceAssignments[l.speaker]) u.voice = voiceAssignments[l.speaker];
  u.pitch = profile.p;
  u.rate = profile.r;
  u.volume = SET.nv;
  u.onstart = () => {
    if (token === speechToken) speechStarted = true;
  };
  u.onend = () => {
    if (token === speechToken) spokenDone = true;
  };
  u.onerror = (e) => {
    if (token !== speechToken) return;
    spokenDone = true;
    SET.cap = true;
    caption();
    if (!["canceled", "interrupted"].includes(e.error))
      notify(
        "Voice playback is unavailable. The complete story continues with timed subtitles.",
      );
  };
  syn.speak(u);
}
