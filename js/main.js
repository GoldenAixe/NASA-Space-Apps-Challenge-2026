build(0);
rv.visible = true;
pos = 0;
targetPos = 0;
hasSave = hasProgress(readSave());
syncResumeButton();
addEventListener("storage",syncResumeButton);
addEventListener("pageshow",syncResumeButton);
cameraFrame(1);
$("loading").hidden = true;
window.kiteReady = true;
requestAnimationFrame(loop);
// Read-only diagnostics support verification without adding navigation or skipping controls.
window.kiteDiagnostics = () => ({
  scene: sceneIndex,
  line: lineIndex,
  chapter: current().chapter,
  completed: [...completedScenes],
  encounters: [...done],
  discoveries: [...discoveries],
  lineComplete,
  paused,
  panel: pn,
  auto,
  ended,
  voices: Object.fromEntries(
    Object.entries(voiceAssignments).map(([k, v]) => [k, v.name]),
  ),
  meshes: R.info.render.calls,
  geometries: R.info.memory.geometries,
  environment: cur.id,
  position: rv.position.toArray(),
  routeProgress: pos,
  traveling: !!route,
  awaitingLaunch,
  launchPhase: lau.ph,
  rocketSupports: rk?.getObjectByName("landing supports")?.children.length,
  navigation: $("trkRows").textContent,
  audioState: audioContext?.state,
  engineLevel: engineLevel,
  almanacEntries: typeof ALMANAC !== "undefined" ? ALMANAC.length : 0,
});
