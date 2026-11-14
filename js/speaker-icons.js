const SPEAKER_ICONS = Object.freeze({
  "narrator": "assets/icons/narrator.svg",
  "kite": "assets/icons/kite.svg",
  "lmod": "assets/icons/lmod.svg",
  "lrv": "assets/icons/lrv.svg",
  "als": "assets/icons/als.svg",
  "surv": "assets/icons/surv.svg",
  "soj": "assets/icons/soj.svg",
  "spir": "assets/icons/spir.svg",
  "opp": "assets/icons/opp.svg",
  "vik1": "assets/icons/vik1.svg",
  "vik2": "assets/icons/vik2.svg",
  "phx": "assets/icons/phx.svg",
  "ins": "assets/icons/ins.svg",
  "ing": "assets/icons/ing.svg"
});
      function setSpeakerPortrait(speaker){
        const key=Object.hasOwn(SPEAKER_ICONS,speaker)?speaker:'narrator';
        const icon=$('speakerIcon');
        if(icon.dataset.speaker!==key)icon.src=SPEAKER_ICONS[key];
        icon.dataset.speaker=key;
        icon.alt=key==='narrator'?'Narrator — girl robot':(VOICES[key]||VOICES.narrator).name;
      }
