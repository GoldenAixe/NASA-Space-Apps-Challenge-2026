function caption() {
  $("nb").hidden =
    !!route ||
    awaitingLaunch ||
    !!lau.go ||
    sceneSettling > 0 ||
    !started ||
    paused ||
    pn ||
    ended ||
    !!tr ||
    !!cruise;
  $("sn").textContent = (VOICES[line().speaker] || VOICES.narrator).name;
  $("nt").textContent = recordedClip()?.caption || line().text;
  $("nt").hidden = !SET.cap && !recordingCaptionOnly();
  setSpeakerPortrait(line().speaker);
  $("advance").hidden = auto || !lineComplete;
  $("badge").textContent = recordingCaptionOnly() && SET.narr
    ? "Subtitles only"
    : !SET.narr
    ? "Read at your own pace • Voice off"
    : lineComplete && !auto
      ? "Ready when you are"
      : "";
  $("sound").textContent = "Voice: " + (SET.narr ? "ON" : "OFF");
  $("sound").setAttribute("aria-pressed", SET.narr);
  $("captions").textContent = "Subtitles: " + (SET.cap ? "ON" : "OFF");
  $("captions").setAttribute("aria-pressed", SET.cap);
  $("ap").textContent = "Auto Play: " + (auto ? "ON" : "OFF");
  $("ap").setAttribute("aria-pressed", auto);
}
function tlb() {
  if (!cur) return;
  const s = current();
  $("chp").textContent = `CHAPTER ${s.chapter} / 6 · ${cur.n}`;
  $("cm").textContent = s.title;
  $("storyProgress").value = completedScenes.size;
  $("storyCount").textContent =
    `Scene ${s.id} of 22 · ${done.size} / 12 explorers met`;
}
function refresh() {
  HWs.forEach((h) => {
    const key = cur.subs[h.i].hw;
    h.bm.color.setHex(done.has(key) ? 0x7dff8a : 0x4fd8ff);
    h.lb.classList.toggle("ok", done.has(key));
  });
}
function readSave() {
  try {
    const d = JSON.parse(localStorage.getItem(SAVE_KEY));
    if (
      !d ||
      d.version !== 2 ||
      !Number.isInteger(d.scene) ||
      !STORY[d.scene] ||
      !Number.isInteger(d.line) ||
      !STORY[d.scene].lines[d.line]
    )
      return null;
    if (
      !["completedScenes", "encounters", "discoveries"].every((k) =>
        Array.isArray(d[k]),
      )
    )
      return null;
    return d;
  } catch {
    return null;
  }
}
function hasProgress(d) {
  return !!d && (d.ended || d.scene>0 || d.line>0 || d.lineComplete ||
    d.completedScenes.length>0 || d.encounters.length>0 || d.discoveries.length>0 ||
    (d.route && Number.isFinite(d.route.f) && d.route.f>.001));
}
function syncResumeButton() {
  const button = $("rs");
  if (button) button.hidden = !hasProgress(readSave());
}
function save() {
  if (!started && !ended) return;
  const d = {
    version: 2,
    chapter: current().chapter,
    scene: sceneIndex,
    line: lineIndex,
    lineComplete,
    completedScenes: [...completedScenes],
    encounters: [...done],
    discoveries: [...discoveries],
    auto,
    ended,
    route: route ? { next: route.next, f: pos / PL } : null,
    awaitingLaunch: awaitingLaunch || !!lau.go,
    settings: { nv: SET.nv, narr: SET.narr, cap: SET.cap },
  };
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(d));
    hasSave = true;
  } catch {
    if (!window.saveWarning) {
      notify(
        "This browser is blocking saved progress. Keep this tab open to continue.",
      );
      window.saveWarning = true;
    }
  }
}
function updateParts() {
  const s = current();
  $("parts").hidden = ![3, 4].includes(s.chapter);
  const labels = [
    ["lmod", "Structural supports"],
    ["lrv", "Motor components"],
    ["als", "Monitoring circuits"],
    ["surv", "Camera & scoop"],
  ];
  let count = 0;
  if (s.id === 11) {
    const source = line().sourceLine;
    if (source === 44)
      count = lineIndex === 1 ? 1 : lineIndex === 2 ? 2 : 3;
    else if (source === 45) count = 4;
  }
  if (s.id >= 12) count = 4;
  $("parts").replaceChildren(
    ...labels.map(([key, label], i) => {
      const d = document.createElement("div");
      d.className = "part" + (i < count ? " fixed" : "");
      d.textContent =
        (i < count
          ? "✓ Installed: "
          : done.has(key)
            ? "✓ Collected: "
            : "Find: ") + label;
      return d;
    }),
  );
}
function beginLine(resumeComplete = false) {
  lineAge = 0;
  workAge = 0;
  lineWait = 0.35;
  lineComplete = resumeComplete;
  spokenDone = resumeComplete;
  updateParts();
  setDemonstration();
  caption();
  if (!resumeComplete) cue();
  if (!resumeComplete) speakLine();
  else stopSpeech();
  save();
}
function enterScene(
  index,
  li = 0,
  resumeComplete = false,
  trans = false,
  fresh = false,
) {
  stopSpeech();
  outroLegs.forEach(l=>l.visible=false);
  rv.userData.ws.forEach(w=>w.visible=true);
  arms.forEach(a=>a.rotation.set(0,0,0));elbows.forEach((e,i)=>{e.rotation.set(0,0,0);forearmShafts[i].scale.y=.78;wrists[i].position.y=-.78;});
  head.rotation.x=0;wrench.visible=false;
  const s = STORY[index],
    envIndex = CH.findIndex((c) => c.id === s.env);
  if (trans && !fresh && ci !== envIndex) {
    const mars = ci === 2 && envIndex === 4;
    startTr(mars ? 3 : envIndex, () =>
      mars
        ? startCruise(index)
        : enterScene(index, 0, false, false, true),
    );
    return;
  }
  sceneIndex = index;
  // Liftoff and touchdown play their cues directly during the animation.
  lineIndex =
    li === 0 &&
    s.lines.length > 1 &&
    /^(?:WHOOSH!|PLOP!)$/i.test(s.lines[0].text.trim())
      ? 1
      : Math.min(Math.max(li | 0, 0), s.lines.length - 1);
  lineComplete = resumeComplete;
  sceneAge = 0;
  manualZoom = 1;
  cyaw = cpit = 0;
  const changed = ci !== envIndex || fresh;
  if (ci !== envIndex) build(envIndex);
  targetPos = s.f * PL;
  if (!started || changed) pos = targetPos;
  sceneSettling = SET.rm
    ? 0
    : changed
      ? 0.65
      : Math.min(2.2, Math.abs(targetPos - pos) / 20);
  if (s.id === 5 || s.id === 14) {
    sceneSettling = 6.9;
    rv.visible = false;
    rk.position.copy(rk.userData.base);
    rk.position.y += 12;
  }
  if (s.id === 22) {
    if (changed) pos = ended ? PL : 0.95 * PL;
    outroStart = pos;
    outroHeading = rv.rotation.y;
    farewellTime = 0;
    sceneSettling = 0;
  }


  if (started && s.chapter !== lastCh) {
    lastCh = s.chapter;
    chTitle(s);
  }
  tlb();
  refresh();
  updateParts();
  setDemonstration();
  caption();
  needSpeak = !resumeComplete;
  spokenDone = resumeComplete;
  if (sceneSettling === 0) beginLine(resumeComplete);
}
function finishScene() {
  completedScenes.add(current().id);
  const key = current().hardware;
  if (key) {
    done.add(key);
    discoveries.add(key);
    if (key === "spir") {
      done.add("opp");
      discoveries.add("opp");
    }
    if (key === "vik1") {
      done.add("vik2");
      discoveries.add("vik2");
    }
  }
  refresh();
  if (sceneIndex === STORY.length - 1) {
    ended = true;
    lineComplete = true;
    save();
    stopSpeech();
    $("endCount").textContent =
      `All six chapters complete. You met ${done.size} historical explorers.`;
    $("end").hidden = false;
    document.body.classList.add("ending");
    farewellTime = 0;
    $("nb").hidden = true;
    $("parts").hidden = true;
    $("end").querySelector("button").focus();
    return;
  }
  const next = STORY[sceneIndex + 1];
  if (
    next.env === cur.id &&
    (next.hardware || next.id === 3 || next.id === 11 || next.id === 21)
  ) {
    beginTravel(sceneIndex + 1);
    return;
  }
  enterScene(sceneIndex + 1, 0, false, true);
}
function syncControls() {
  const visible = started && !paused && !pn && !ended && !tr && !cruise;
  $("trackControls").hidden = !visible || !route;
  $("movementHint").textContent = auto ? "Auto Play moves Kite for you" : "Hold ↑ / ↓ or W / S, or scroll to move";
  $("trackControls").querySelectorAll("[data-dir]").forEach(b => b.hidden = auto);
  if (visible && auto && awaitingLaunch && lau.ready && !lau.go) lau.go = 1;
  $("lc").hidden = !visible || !awaitingLaunch || !!lau.go;
  $("cd").hidden =
    !visible || !(lau.ph === 1 || (lau.ph === 2 && lau.t < 1.6));
  document.body.classList.toggle("travel", visible && !!route);
}
function clearMotion() {
  held.clear();
  wheelStep = 0;
  v = 0;
}
function beginTravel(next) {
  clearMotion();
  stopSpeech();
  route = { next, stop: STORY[next].f * PL };
  targetPos = pos;
  const s = STORY[next];
  $("destination").textContent =
    "Next · " +
    (s.hardware
      ? HW[s.hardware].nm
      : s.id === 3
        ? "Walk to your spaceship"
        : s.id === 11
        ? "Return to your spaceship"
        : "Martian overlook");
  caption();
  syncControls();
  save();
}
function travelTick(dt) {
  const dir = auto ? 1 : [...held.values()].at(-1) || 0;
  const previous = pos;
  // Scroll is a queued journey, consumed at a bounded speed, never a position jump.
  const scroll = dir ? 0 : cl(wheelStep, -21*dt, 21*dt);
  if (dir) wheelStep = 0; else wheelStep -= scroll;
  pos = cl(pos + dir*21*dt + scroll, 0, route.stop);
  v = dt ? (pos-previous)/dt : 0;
  targetPos = pos;
  if (pos >= route.stop-0.001) {
    const next=route.next;
    route=null;
    clearMotion();
    syncControls();
    enterScene(next);
  }
}
function requestLaunch() {
  awaitingLaunch = true;
  lau.ready =
    cur.launch ||
    ["lmod", "lrv", "als", "surv"].every((k) => done.has(k));
  caption();
  syncControls();
  if (auto && lau.ready) lau.go = 1;
  save();
}
function advance() {
  if (
    !started ||
    paused ||
    pn ||
    ended ||
    tr ||
    cruise ||
    route ||
    awaitingLaunch ||
    lau.go ||
    !lineComplete
  )
    return;
  if (current().id === 3 || (current().id === 13 && lineIndex >= 1)) {
    requestLaunch();
    return;
  }
  if (lineIndex + 1 < current().lines.length) {
    lineIndex++;
    beginLine();
  } else finishScene();
}
function start(resume = false) {
  audioUnlock();
  lastCh = 0;
  const d = resume ? readSave() : null;
  done = new Set(d?.encounters?.filter((k) => HW[k]) || []);
  discoveries = new Set(d?.discoveries?.filter((k) => HW[k]) || []);
  completedScenes = new Set(
    d?.completedScenes?.filter(
      (n) => Number.isInteger(n) && n >= 1 && n <= 22,
    ) || [],
  );
  if (d?.settings) {
    SET.nv = cl(Number(d.settings.nv) || 0, 0, 1);
    SET.sv = 0.22 * SET.nv;
    SET.narr = !!d.settings.narr;
    SET.cap = !!d.settings.cap;
  }
  $("volume").value = SET.nv;
  started = true;
  paused = false;
  ended = !!d?.ended;
  auto = d ? d.auto !== false : true;
  document.body.classList.remove("ending");
  $("almanac").hidden = true;
  farewellTime = 0;
  $("intro").hidden = true;
  $("end").hidden = true;
  $("pm").hidden = true;
  document.body.classList.remove("intro-mode");
  route = null;
  awaitingLaunch = false;
  clearMotion();
  build(CH.findIndex((c) => c.id === STORY[d?.scene || 0].env));
  enterScene(d?.scene || 0, d?.line || 0, !!d?.lineComplete, false, true);
  if (
    d?.route?.next === sceneIndex + 1 &&
    STORY[d.route.next]?.env === cur.id &&
    Number.isFinite(d.route.f)
  ) {
    sceneSettling = 0;
    pos = cl(d.route.f, 0, STORY[d.route.next].f) * PL;
    beginTravel(d.route.next);
  } else if (d?.awaitingLaunch && [3, 13].includes(current().id)) {
    sceneSettling = 0;
    requestLaunch();
  }
  syncControls();
  if (ended) {
    $("endCount").textContent =
      `All six chapters complete. You met ${done.size} historical explorers.`;
    $("end").hidden = false;
    document.body.classList.add("ending");
    farewellTime = 0;
    stopSpeech();
    $("nb").hidden = true;
  } else $("ap").focus();
}
function pause(on) {
  if (!started || ended || pn) return;
  paused = on;
  clearMotion();
  syncControls();
  $("pm").hidden = !on;
  if (on) {
    focusReturn = document.activeElement;
    if (syn && syn.speaking) {
      syn.pause();
      pausedSpeech = true;
    }
    audioContext?.suspend().catch(() => {});
    save();
    $("pm").querySelector("button").focus();
  } else {
    audioContext?.resume().catch(() => {});
    if (pausedSpeech) {
      syn?.resume();
      pausedSpeech = false;
    }
    focusReturn?.focus();
  }
  caption();
}
function exit() {
  if (!confirm("Save your progress and return to the introduction?"))
    return;
  save();
  route = null;
  awaitingLaunch = false;
  clearMotion();
  tr = null;
  cruise = null;
  liftoff = false;
  $("tp").hidden = true;
  $("lbs").style.display = "block";
  document.body.classList.remove("cine");
  stopSpeech();
  started = false;
  paused = true;
  ended = false;
  pn = false;
  $("almanac").hidden = true;
  document.body.classList.remove("ending");
  audioContext?.suspend().catch(() => {});
  $("pm").hidden =
    $("end").hidden =
    $("nb").hidden =
    $("pn").hidden =
      true;
  $("parts").hidden = true;
  $("intro").hidden = false;
  syncResumeButton();
  document.body.classList.add("intro-mode");
  document.body.classList.remove("panel-mode");
  setHW(null, "");
  hwk = null;
  clearDemonstrations();
  build(0);
  syncControls();
  pos = targetPos = 0;
  sceneAge = 0;
  $("intro").querySelector("button").focus();
}
function openInfo(key) {
  if (!started || paused || pn || ended || !HW[key] || !inspectable(key))
    return;
  clearMotion();
  const d = HW[key];
  focusReturn = document.activeElement;
  pn = true;
  pi = cur.subs.findIndex((s) => s.hw === key);
  discoveries.add(key);
  if (syn && syn.speaking) {
    syn.pause();
    pausedSpeech = true;
  }
  audioContext?.suspend().catch(() => {});
  const panel = $("pn");
  panel.replaceChildren();
  const h = document.createElement("h2");
  h.className = "f";
  h.textContent = d.full;
  panel.append(h);
  const intro = document.createElement("p");
  intro.textContent = d.intro;
  panel.append(intro);
  for (const [label, value] of d.rows) {
    const p = document.createElement("p"),
      b = document.createElement("b");
    b.textContent = label;
    p.append(b, document.createTextNode(value));
    panel.append(p);
  }
  if (d.note) {
    const p = document.createElement("p");
    p.className = "note";
    p.textContent = d.note;
    panel.append(p);
  }
  const a = document.createElement("a");
  a.href = d.source;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.textContent = "NASA source";
  panel.append(a);
  const b = document.createElement("button");
  b.className = "pb";
  b.dataset.a = "close-info";
  b.textContent = "Continue";
  panel.append(document.createElement("br"), b);
  panel.hidden = false;
  panel.classList.add("open");
  document.body.classList.add("panel-mode");
  hwk = key;
  setHW(key, "NSSDCA EQUIPMENT IMAGE");
  save();
  panel.setAttribute("tabindex", "-1");
  panel.focus({preventScroll:true});
  panel.scrollTop = 0;
  caption();
}
function closeInfo() {
  pn = false;
  pi = -1;
  $("pn").hidden = true;
  $("pn").classList.remove("open");
  document.body.classList.remove("panel-mode");
  setHW(null, "");
  hwk = null;
  if (pausedSpeech) {
    syn?.resume();
    pausedSpeech = false;
  }
  audioContext?.resume().catch(() => {});
  focusReturn?.focus();
  caption();
}
function inspectable(key) {
  const pair = { opp: "spir", vik2: "vik1" };
  const h = HWs.find((h) => cur.subs[h.i].hw === key);
  return (
    !tr &&
    !cruise &&
    !lau.go &&
    !awaitingLaunch &&
    h &&
    h.g.position.distanceTo(rv.position) < 23 &&
    (done.has(key) ||
      (!route && (pair[key] || key) === current().hardware))
  );
}
function nearest() {
  let best = null,
    dist = Infinity;
  for (const h of HWs) {
    if (!inspectable(cur.subs[h.i].hw)) continue;
    const d = h.g.position.distanceTo(rv.position);
    if (d < dist) {
      best = h;
      dist = d;
    }
  }
  return dist < 35 ? best : null;
}
document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-a]");
  if (!b) return;
  switch (b.dataset.a) {
    case "almanac":
      openAlmanac();
      break;
    case "close-almanac":
      closeAlmanac();
      break;
    case "launch":
      if (started && !paused && !pn && awaitingLaunch && lau.ready)
        lau.go = 1;
      break;
    case "start":
      start();
      break;
    case "resume":
      start(true);
      break;
    case "auto":
      auto = !auto;
      clearMotion();
      syncControls();
      save();
      caption();
      break;
    case "pause":
      pause(true);
      break;
    case "unpause":
      pause(false);
      break;
    case "exit":
      exit();
      break;
    case "continue":
      advance();
      break;
    case "close-info":
      closeInfo();
      break;
    case "sound":
      SET.narr = !SET.narr;
      if (!SET.narr) SET.cap = true;
      stopSpeech();
      if (!SET.narr) spokenDone = true;
      else if (!lineComplete && !paused && !pn && !tr && !cruise)
        speakLine();
      save();
      caption();
      break;
    case "captions":
      SET.cap = !SET.cap;
      if (!SET.cap && !SET.narr) {
        SET.cap = true;
        notify(
          "Keep subtitles on while the voice is off so you can follow the story.",
        );
      }
      save();
      caption();
      break;
  }
});
$("volume").addEventListener("input", (e) => {
  SET.nv = +e.target.value;
  SET.sv = 0.22 * SET.nv;
  if (utterance) utterance.volume = SET.nv;
  if (recordedVoiceGain&&audioContext)recordedVoiceGain.gain.setValueAtTime(SET.nv,audioContext.currentTime);
  if (SET.nv === 0) {
    stopSpeech();
    spokenDone = true;
    SET.cap = true;
  }
  save();
  caption();
});
$("lbs").addEventListener("click", (e) => {
  const b = e.target.closest(".lb");
  if (b) {
    const h = HWs[+b.dataset.k];
    if (h) openInfo(cur.subs[h.i].hw);
  }
});
addEventListener("keydown", (e) => {
  if (e.key === "Tab" && ((paused && started) || pn || ended)) {
    const box = !$("almanac").hidden ? $("almanac") : pn ? $("pn") : ended ? $("end") : $("pm");
    const els = [...box.querySelectorAll("button,a,input")].filter(
      (x) => !x.hidden && !x.disabled,
    );
    if (els.length) {
      if (e.shiftKey && document.activeElement === els[0]) {
        els.at(-1).focus();
        e.preventDefault();
      } else if (!e.shiftKey && document.activeElement === els.at(-1)) {
        els[0].focus();
        e.preventDefault();
      }
    }
    return;
  }
  if (ended && e.key !== "Escape") return;
  const dir = { ArrowUp: 1, ArrowDown: -1, w: 1, s: -1, W: 1, S: -1 }[
    e.key
  ];
  if (dir && canTravel() && e.target.tagName !== "INPUT") {
    e.preventDefault();
    held.set(e.code || e.key, dir);
    return;
  }
  if (
    /INPUT|BUTTON|A/.test(e.target.tagName) &&
    !["Escape", "e", "E"].includes(e.key)
  )
    return;
  if (e.key === "Escape") {
    if (!$("almanac").hidden) {closeAlmanac();return;}
    if (pn) closeInfo();
    else pause(!paused);
  }
  if ((e.key === "e" || e.key === "E") && !paused && !pn) {
    const h = nearest();
    if (h) openInfo(cur.subs[h.i].hw);
  }
  if ((e.key === "Enter" || e.key === " ") && !auto && !paused && !pn) {
    e.preventDefault();
    advance();
  }
  if (!auto && !paused && !pn && e.key.startsWith("Arrow")) {
    e.preventDefault();
    if (e.key === "ArrowLeft") cyaw -= 0.12;
    if (e.key === "ArrowRight") cyaw += 0.12;
  }
});
const pointers = new Map();
let pointerStart = null,
  dragDistance = 0,
  pinchDistance = 0;
function cameraAllowed() {
  return started && !paused && !pn && !ended && !tr && !cruise && !lau.go;
}
R.domElement.addEventListener("pointerdown", (e) => {
  if (e.button && e.pointerType === "mouse") return;
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  pointerStart = { x: e.clientX, y: e.clientY };
  dragDistance = 0;
  R.domElement.setPointerCapture(e.pointerId);
});
R.domElement.addEventListener("pointermove", (e) => {
  const old = pointers.get(e.pointerId);
  if (!old) return;
  const dx = e.clientX - old.x,
    dy = e.clientY - old.y;
  dragDistance += Math.abs(dx) + Math.abs(dy);
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (!cameraAllowed()) return;
  if (pointers.size === 2) {
    const [a, b] = [...pointers.values()],
      d = Math.hypot(a.x - b.x, a.y - b.y);
    if (pinchDistance && !auto)
      manualZoom = cl(
        manualZoom + (pinchDistance - d) * 0.004,
        0.65,
        1.6,
      );
    pinchDistance = d;
  } else {
    cyaw -= dx * 0.004;
    cpit = cl(cpit + dy * 0.003, -0.25, 0.65);
  }
});
const ray = new THREE.Raycaster(),
  m2 = new THREE.Vector2();
R.domElement.addEventListener("pointerup", (e) => {
  pointers.delete(e.pointerId);
  pinchDistance = 0;
  if (dragDistance > 7 || !started || paused || pn || ended) return;
  m2.set(
    (e.clientX / innerWidth) * 2 - 1,
    1 - (e.clientY / innerHeight) * 2,
  );
  ray.setFromCamera(m2, cam);
  const hits = ray.intersectObjects(
    HWs.map((h) => h.g),
    true,
  );
  if (hits.length) {
    let obj = hits[0].object;
    while (obj && !HWs.some((h) => h.g === obj)) obj = obj.parent;
    const h = HWs.find((h) => h.g === obj);
    if (h) openInfo(cur.subs[h.i].hw);
  }
});
R.domElement.addEventListener("pointercancel", (e) => {
  pointers.delete(e.pointerId);
  pinchDistance = 0;
});
function canTravel() {
  return started && !paused && !pn && !ended && !auto && !!route;
}
addEventListener("keyup", (e) => held.delete(e.code || e.key));
addEventListener("blur", clearMotion);
for (const button of $("trackControls").querySelectorAll("[data-dir]")) {
  button.addEventListener("pointerdown", (e) => {
    if (!canTravel()) return;
    e.preventDefault();
    button.setPointerCapture(e.pointerId);
    held.set(e.pointerId, Number(button.dataset.dir));
    wheelStep += Number(button.dataset.dir) * 0.7;
  });
  for (const event of [
    "pointerup",
    "lostpointercapture",
    "pointercancel",
  ])
    button.addEventListener(event, (e) => held.delete(e.pointerId));
  button.addEventListener("click", (e) => {
    if (e.detail === 0 && canTravel())
      wheelStep += Number(button.dataset.dir) * 3;
  });
}
addEventListener(
  "wheel",
  (e) => {
    if (!canTravel() || e.ctrlKey) return;
    e.preventDefault();
    const dy =
      e.deltaY *
      (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? innerHeight : 1);
    wheelStep = cl(wheelStep + cl(dy, -180, 180) * 0.045, -24, 24);
  },
  { passive: false },
);
addEventListener("pagehide", () => {
  save();
  stopSpeech();
  audioContext?.suspend().catch(() => {});
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden && started && !paused && !pn && !ended) pause(true);
});
matchMedia("(prefers-reduced-motion: reduce)").addEventListener(
  "change",
  (e) => {
    SET.rm = e.matches;
  },
);
