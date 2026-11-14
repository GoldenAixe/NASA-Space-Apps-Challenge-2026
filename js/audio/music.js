// The supplied track plays at half volume, then ducks another half during speech.
// It shares the AudioContext, so pausing or opening hardware details freezes playback.
const BACKGROUND_MUSIC = Object.freeze({
  url: 'assets/audio/alex-morgan-ambient-541036.mp3',
  volume: 0.5,
  dialogueVolume: 0.25,
});
let backgroundMusicLoad = null, backgroundMusicBuffer = null;
let backgroundMusicSource = null, backgroundMusicGain = null;
let backgroundMusicVolume = -1;

function warmBackgroundMusic() {
  if (!audioContext || backgroundMusicLoad) return;
  backgroundMusicLoad = (async () => {
    const response = await fetch(BACKGROUND_MUSIC.url);
    if (!response.ok) throw Error('Background music could not load');
    backgroundMusicBuffer = await audioContext.decodeAudioData(await response.arrayBuffer());
    musicTick();
  })().catch(() => {
    backgroundMusicLoad = null;
    notify('Background music could not load. Open the game with the included launcher.');
  });
}

function musicTick() {
  if (!audioContext) return;
  if (started && backgroundMusicBuffer && !backgroundMusicSource) {
    const source = audioContext.createBufferSource(), gain = audioContext.createGain();
    source.buffer = backgroundMusicBuffer;
    source.loop = true;
    gain.gain.value = 0;
    source.connect(gain);
    gain.connect(audioContext.destination);
    backgroundMusicSource = source;
    backgroundMusicGain = gain;
    source.start();
  }
  if (!backgroundMusicGain) return;
  const speaking = !ended && SET.narr && !spokenDone && speechStarted;
  const volume = started ? SET.nv * (speaking ? BACKGROUND_MUSIC.dialogueVolume : BACKGROUND_MUSIC.volume) : 0;
  if (volume !== backgroundMusicVolume) {
    backgroundMusicVolume = volume;
    backgroundMusicGain.gain.setTargetAtTime(volume, audioContext.currentTime, 0.25);
  }
}
