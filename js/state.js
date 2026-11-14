"use strict";
   /* The original position-triggered story was replaced because it cancelled unfinished
dialogue, marked encounters complete too early and let scrolling bypass narration.
Rendering, voxel helpers, terrain, sky, camera math, map, particles, labels and
the hardware observation viewport are retained and adapted in scene.js. */
   const SET = {
     nv: 0.9,
     sv: 0.2,
     narr: true,
     cap: true,
     rm: matchMedia("(prefers-reduced-motion: reduce)").matches,
   };
   let ci = -1,
     cur,
     PL = 1,
     pos = 0,
     tv = 0,
     v = 0,
     HWs = [],
     done = new Set(),
     fired = new Set(),
     paused = true,
     pn = false,
     pi = -1,
     scn = null,
     tr = null,
     started = false,
     hwk = null,
     ended = false,
     free = false,
     snap = 0,
     rk = null,
     rfl = null,
     near = -1,
     near1 = new Set(),
     cyaw = 0,
     cpit = 0,
     lau = { ph: 0 },
     sceneIndex = 0,
     lineIndex = 0,
     lineComplete = false,
     auto = true;
   let targetPos = 0,
     sceneAge = 0,
     lineAge = 0,
     lineWait = 0.35,
     sceneSettling = 0,
     spokenDone = false,
     speechStarted = false,
     speechToken = 0,
     utterance = null,
     manualZoom = 1,
     completedScenes = new Set(),
     discoveries = new Set(),
     audioContext = null,
     toastTimer = 0,
     pausedSpeech = false,
     needSpeak = false,
     hasSave = false,
     focusReturn = null,
     lastFrame = performance.now(),
     elapsed = 0,
     lowFrames = 0,
     performanceWindow = 0;
   let route = null,
     awaitingLaunch = false;
   const held = new Map();
   let wheelStep = 0;
   let cruise = null,
     liftoff = false,
     lastCh = 0,
     flash = 0,
     lastDist = "";
   (() => {
     const m = CH.find((c) => c.id === "moon");
     if (m)
       Object.assign(m, {
         gr: [0x9a9ed2, 0x8c90c4],
         hs: 0x93a0ff,
         hg: 0x2c2a5c,
         sc: 0xc8d0ff,
         lt: 0.95,
       });
   })();
   (() => {
     const e = CH.find((c) => c.id === "earth");
     if (e)
       Object.assign(e, { gr: [0x2e9a28, 0x268f24, 0x36a62e], amp: 0.6 });
   })();
   const FALLBACK_LINE = { speaker: "narrator", text: "" },
     SAVE_KEY = "kite-story-v2",
     current = () => STORY[sceneIndex],
     line = () => {
       const L = current()?.lines || [];
       return (
         L[Math.min(Math.max(lineIndex, 0), L.length - 1)] || FALLBACK_LINE
       );
     },
     veh = () => (cur?.sp ? ship : rv);
   const idx = () => cur?.subs.findIndex((s) => !done.has(s.id)) ?? -1;
   const syn = window.speechSynthesis;
   let voiceList = [],
     voiceAssignments = {};
   function chooseVoices() {
     voiceList = syn
       ? syn.getVoices().filter((v) => /^en(?:-|_)/i.test(v.lang))
       : [];
     const pool = [...voiceList].sort(
       (a, b) =>
         Number(/natural|neural|premium|enhanced/i.test(b.name)) -
         Number(/natural|neural|premium|enhanced/i.test(a.name)),
     );
     const used = new Set();
     voiceAssignments = {};
     for (const [key, profile] of Object.entries(VOICES)) {
       const rx =
         profile.g === "m"
           ? /\bmale\b|david|daniel|guy|mark|alex|george|ryan|thomas|davis/i
           : /female|zira|samantha|aria|jenny|susan|karen|moira|victoria|hazel|libby|sonia/i;
       const same = pool.filter(
         (v) =>
           rx.test(v.name) && !(profile.g === "m" && /female/i.test(v.name)),
       );
       const chosen =
         same.find((v) => !used.has(v.voiceURI)) ||
         pool.find((v) => !used.has(v.voiceURI)) ||
         same[profile.vi % Math.max(1, same.length)] ||
         pool[profile.vi % Math.max(1, pool.length)];
       if (chosen) {
         voiceAssignments[key] = chosen;
         used.add(chosen.voiceURI);
       }
     }
   }
   chooseVoices();
   if (syn) syn.addEventListener("voiceschanged", chooseVoices);
   function notify(text) {
     $("toast").textContent = text;
     $("toast").hidden = false;
     clearTimeout(toastTimer);
     toastTimer = setTimeout(() => ($("toast").hidden = true), 4200);
   }
