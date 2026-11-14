/* ---- Sean's chapter transitions + HUD, and the drawbridge boarding ---- */
const OPENA = 1.81,
  fk = (k) =>
    k < 1
      ? "On Earth"
      : k < 1e6
        ? Math.round(k).toLocaleString("en-US") + " km"
        : k < 1e9
          ? (k / 1e6).toFixed(k < 1e8 ? 1 : 0) + " million km"
          : (k / 1e9).toFixed(2) + " billion km",
  flt = (k) => {
    const s = k / 299792;
    return s < 1
      ? "under 1 second"
      : s < 60
        ? s.toFixed(1) + " seconds"
        : s < 3600
          ? (s / 60).toFixed(1) + " minutes"
          : (s / 3600).toFixed(1) + " hours";
  },
  dk = (n) => (CH[n].km !== undefined ? CH[n].km : CH[n].dm[0][1]);
function distNow() {
  const dm = cur.dm,
    f = cl(pos / PL, 0, 1);
  for (let i = 1; i < dm.length; i++)
    if (f <= dm[i][0]) {
      const a = dm[i - 1],
        b = dm[i],
        q = (f - a[0]) / (b[0] - a[0] || 1);
      return a[1] + (b[1]-a[1])*q;
    }
  return dm[dm.length - 1][1];
}
function showP() {
  const id = cur.id;
  earth.visible = id === "e2m" || id === "moon";
  moonP.visible = id === "e2m" || id === "m2m";
  marsP.visible = id === "m2m";
}
function chTitle(s) {
  const t = $("ti");
  t.querySelector("h3").textContent = "Chapter " + s.chapter;
  t.querySelector("h1").textContent = CHAPTERS[s.chapter - 1];
  t.querySelector("p").textContent = cur.q || "";
  t.classList.remove("show");
  void t.offsetWidth;
  t.classList.add("show");
}
function startTr(n, cb) {
  liftoff = false;
  clearMotion();
  tr = {
    fromKm: navigationKm(),
    t: 0,
    n,
    cb,
    kind: CH[n].sp ? "leave" : "land",
    dur: CH[n].sp ? 2.6 : 3,
    sw: 0,
    h: 0,
  };
  stopSpeech();
  $("nb").hidden = true;
  $("lbs").style.display = "none";
  $("tp").hidden = false;
  $("tpn").textContent =
    n===3||n===4 ? moonMarsTravelText(n===4?1:0) : "Traveling to " + CH[n].d + " · " + fk(dk(n)) + " from Earth";
  $("tpf").style.width = "0";
  tone(120, 900, 2.4, "sawtooth", 0.06);
}
function startCruise(index) {
  cruise = { t: 0, dur: 11, index };
  $("nb").hidden = true;
  $("lbs").style.display = "none";
  $("tp").hidden = false;
  $("tpn").textContent = moonMarsTravelText(0);
  $("tpf").style.width = "0";
}
function trStep(dt) {
  tr.t += dt / tr.dur;
  const u = tr.t,
    t = elapsed;
  let warp = 0;
  $("tpf").style.width = Math.min(100, u * 100) + "%";
  const hide = () => {
    W.visible =
      sky.visible =
      sunM.visible =
      earth.visible =
      moonP.visible =
      marsP.visible =
      flare.visible =
        false;
    sc.background.copy(BLK);
    sc.fog.color.copy(BLK);
  };
  if (u < 0.16) {
    const q = sm(u / 0.16);
    sc.background.set(cur.bg).lerp(BLK, q);
    sc.fog.color.copy(sc.background);
    sun.intensity = (cur.lt || 1) * (1 - 0.8 * q);
    cameraFrame(dt);
  } else if (u < 0.8) {
    hide();
    if (u >= 0.5 && !tr.sw) {
      tr.sw = 1;
      clearDemonstrations();
      build(tr.n);
      hide();
      stm.opacity = 1;
    }
    const dst = tr.kind === "land" ? (tr.n === 2 ? moonP : marsP) : null,
      q = sm((u - 0.3) / 0.5);
    if (dst) {
      dst.visible = true;
      dst.position.set(0, -18, -480 + q * 290);
      dst.scale.setScalar(
        (tr.n === 2 ? 24 : 26) + q * (tr.n === 2 ? 70 : 76),
      );
      dst.rotation.y = t * 0.08;
      dst.rotation.x = 0.2;
    }
    warp =
      u < 0.3
        ? sm((u - 0.16) / 0.14)
        : dst
          ? 1 - 0.88 * sm((u - 0.5) / 0.3)
          : 1 - 0.55 * sm((u - 0.6) / 0.2);
    cam.position.set(Math.sin(t * 0.6) * 0.3, Math.sin(t * 0.8) * 0.2, 0);
    look.set(0, 0, -10);
    cam.lookAt(look);
    stars.position.copy(cam.position);
    gal.position.copy(cam.position);
    gal.visible = true;
    gal.material.opacity = 0.7;
    cam.fov = 62 + warp * (SET.rm ? 5 : 11);
    cam.updateProjectionMatrix();
  } else {
    if (!tr.h) {
      tr.h = 1;
      const vp = veh().position;
      W.visible = true;
      sky.visible = !!cur.sky;
      sunM.visible = !!cur.sunc;
      showP();
      sc.background.set(cur.bg);
      sc.fog.color.set(cur.bg);
      sun.intensity = cur.lt || 1;
      stm.opacity = cur.sp || cur.id === "moon" ? 1 : 0;
      cam.position.set(vp.x, vp.y + 55, vp.z + 30);
      cam.fov = 58;
      cam.updateProjectionMatrix();
      flash = 1;
    }
    cameraFrame(dt);
  }
  stl.visible = warp > 0;
  if (warp > 0) {
    const a = stg.attributes.position;
    stl.material.opacity = Math.min(1, warp * (SET.rm ? 0.5 : 0.95));
    for (let i = 0; i < SN; i++) {
      const q = sx[i];
      q[2] += warp * 170 * dt;
      if (q[2] > 5) q[2] = -120;
      a.setXYZ(i * 2, q[0], q[1], q[2]);
      a.setXYZ(i * 2 + 1, q[0], q[1], q[2] - warp * (SET.rm ? 6 : 12.8));
    }
    a.needsUpdate = true;
  }
  stl.position.copy(cam.position);
  stl.quaternion.copy(cam.quaternion);
  if (u >= 1) {
    const cb = tr.cb;
    tr = null;
    $("tp").hidden = true;
    $("lbs").style.display = "block";
    stl.visible = false;
    cb && cb();
  }
}
// Fixed, explicitly labelled educational geometry, not a live orbital ephemeris.
const STORY_KM = Object.freeze({earth:0,moon:384400,mars:225000000});
function navigationKm() {
  if (tr) return tr.fromKm+(dk(tr.n)-tr.fromKm)*sm(tr.t);
  return cur.sp ? distNow() : STORY_KM[cur.id] || 0;
}
const fmtKm = (x) =>
    x < 1
      ? "0 km"
      : Math.round(x).toLocaleString("en-US").replace(/,/g, " ") + " km",
  fmtM = (m) =>
    m >= 1000 ? (m / 1000).toFixed(2) + " km" : Math.round(m) + " m";
let trkT = 0,
  trkKey = "";
function kiteOnboard() {
  return !!(cur.sp || (lau.go && (lau.ph>=1 || (lau.ph===.5 && lau.t>=4.5))) ||
    ([5,14].includes(current().id) && sceneAge<3));
}
function trackerTick(dt) {
  if ((trkT += dt) < 0.12) return;
  trkT = 0;
  const box = $("trkRows");
  if (!box || !cur || !started) return;
  const rows = [],
    eKm = navigationKm(),
    mars = STORY_KM.mars;
  const here = cur.id,
    add = (n, t, ok) => rows.push([n, t, ok]);
  for (const [name,key] of [["Earth","earth"],["Moon","moon"],["Mars","mars"]]) {
    if (here !== key) add(name, "≈ " + fmtKm(Math.abs(STORY_KM[key]-eKm)));
  }
  const P = veh().position,
    hw = [];
  HWs.forEach((h) => {
    const key = cur.subs[h.i].hw;
    hw.push([
      HW[key]?.nm || key,
      Math.hypot(h.bx-P.x,h.bz-P.z),
      done.has(key),
    ]);
  });
  if (kiteOnboard())add("Kite’s spaceship", "0 m", false);
  if (!kiteOnboard() && rk && here !== "earth")
    hw.push(["Kite’s spaceship", Math.hypot(rk.userData.base.x-P.x,rk.userData.base.z-P.z), false]);
  if (!kiteOnboard() && rk && here === "earth")
    hw.push(["Launch rocket", Math.hypot(rk.userData.base.x-P.x,rk.userData.base.z-P.z), false]);
  hw.sort((a, b) => a[1] - b[1])
    .slice(0, 5)
    .forEach(([n, d, ok]) => add(n, fmtM(d), ok));
  const html = rows
    .map(
      ([n, t, ok]) =>
        `<div class="r${ok ? " ok" : ""}"><span>${ok ? "✓ " : ""}${n}</span><b>${t}</b></div>`,
    )
    .join("");
  if (html !== trkKey) {
    trkKey = html;
    box.innerHTML = html;
  }
}
function fx(dt) {
  engineTick();
  musicTick();
  try {
    trackerTick(dt);
  } catch (e) {}
  document.body.classList.toggle("cine", !!tr || !!cruise || liftoff);
  const km = navigationKm(),
    key = fk(km);
  if (key !== lastDist) {
    lastDist = key;
    $("dv").textContent = key;
    $("dl").textContent =
      km < 1 ? "" : "Light needs " + flt(km) + " to reach Earth";
  }
  const al =
    started &&
    !paused &&
    !tr &&
    !cruise &&
    current().id === 4 &&
    !lineComplete &&
    /BEEP|electrical|Oh, no/.test(line().text);
  if (flash > 0) flash = Math.max(0, flash - dt * 1.1);
  const f = $("fl").style;
  f.background = al ? "#ff2a2a" : cur.id === "mars" ? "#ffb070" : "#fff";
  f.opacity =
    al && !SET.rm ? 0.2 + 0.12 * Math.sin(elapsed * 14) : flash * 0.8;
}
function updateDamage(body, leg, panel, restored) {
  body.getObjectByName("landing support").rotation.z = leg ? -0.1 : 0;
  body.getObjectByName("landing supports").visible = true;
  body.getObjectByName("service panel").rotation.y = panel ? 0.82 : 0;
  body.getObjectByName("system indicators").visible = restored;
}
function rampPose(from,to,progress) {
  const points=boardingPoints();
  const exitward = to.distanceTo(rk.userData.base) > from.distanceTo(rk.userData.base);
  const path = exitward ? [...points].reverse() : points;
  poseOnBoardingPath(path,cl(progress,0,1),exitward);
}
function landingTick(s,dt) {
  const a=sceneAge,base=rk.userData.base,exit=cur.cv.getPointAt(0);
  rk.position.copy(base);rk.position.y+=12*(1-sm(a/2));
  const yaw=Math.atan2(exit.x-base.x,exit.z-base.z);
  if(rk.rotation.y!==yaw){rk.rotation.y=yaw;rebuildObstacles();motionPath=null;}
  setHatchPose(sm((a-2.15)/.85)*(1-sm((a-6.2)/.7)));
  if(a>=2&&!rk.userData.touched){rk.userData.touched=true;rebuildObstacles();motionPath=null;tone(135,33,.36,"triangle",.4);rocketImpact(.55);}
  rv.visible=a>=3;
  if(a>=3&&a<=6.2){
    const points=boardingPoints().reverse();points.push(new THREE.Vector3(exit.x,surfaceY(exit.x,exit.z),exit.z));
    poseOnBoardingPath(points,cl((a-3)/3.2,0,1),true);
    rv.userData.ws.forEach(w=>w.rotation.x=a*5);
  }else if(a>6.2){rv.rotation.x=0;rv.rotation.order="XYZ";moveKite(new THREE.Vector3(exit.x,surfaceY(exit.x,exit.z),exit.z),dt,false);}
}
function launchTick(dt) {
  const base=rk.userData.base,hatch=rk.getObjectByName("hatch");
  if(lau.ph===0){lau.ph=.25;lau.t=0;awaitingLaunch=false;motionPath=null;syncControls();}
  if(lau.ph===.25){
    const gate=boardingPoints()[0],before=rv.position.clone();
    moveKite(gate,dt,false);
    const moved=rv.position.clone().sub(before),distance=Math.hypot(moved.x,moved.z);
    rv.userData.ws.forEach(w=>w.rotation.x+=distance/.48);
    const heading=distance>.001?Math.atan2(moved.x,moved.z):rk.rotation.y+Math.PI;
    rv.rotation.y+=wr(heading-rv.rotation.y)*Math.min(1,dt*7);
    if(rv.position.distanceTo(gate)>.08)return;
    lau.ph=.5;lau.t=0;motionPath=null;
  }
  lau.t+=dt;
  if(lau.ph===.5){
    setHatchPose(sm(lau.t/.85)*(1-sm((lau.t-4.5)/.75)));
    const boardProgress=cl((lau.t-.85)/3.65,0,1);
    poseOnBoardingPath(boardingPoints(),boardProgress,false);
    rv.visible=lau.t<4.5;
    if(lau.t>.85&&rv.visible)rv.userData.ws.forEach(w=>w.rotation.x+=dt*6);
    if(lau.t<5.25)return;
    rv.rotation.x=0;rv.rotation.order="XYZ";
    lau.ph=1;lau.t=0;lau.n=0;
  }
  rv.visible = false;
  if (lau.ph === 1) {
    const n = Math.max(1, lau.N - Math.floor(lau.t));
    if (n !== lau.n) {
      lau.n = n;
      $("cd").textContent = n;
      tone(880, 660, 0.16, "square", 0.55);
    }
    if (lau.t < lau.N) return;
    lau.ph = 2;
    lau.t = 0;
    $("cd").textContent = "LIFT OFF!";
    tone(55, 140, 2.5, "sawtooth", 0.5);
    rocketImpact(0.7);
  }
  liftoff = true;
  const t = lau.t;
  rk.position.y = base.y + t * t * 3.4;
  rk.rotation.z = Math.sin(t * 0.5) * 0.02 * Math.min(1, t);
  rfl.visible = true;
  rfl.scale.set(2.6, 4 + Math.random() * 3, 2.6);
  rfl.position.y = -1 - rfl.scale.y / 2;
  if (!SET.rm) {
    const nozzle = rk.position.clone();
    nozzle.y -= 2;
    ex(
      nozzle,
      new THREE.Vector3(
        (Math.random() - 0.5) * 6,
        -14,
        (Math.random() - 0.5) * 6,
      ),
      4.5,
      1.3,
      0xffa030,
      true,
      0.9,
    );
    ex(
      nozzle,
      new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        -6,
        (Math.random() - 0.5) * 10,
      ),
      6.5,
      2.4,
      0xaaaaaa,
      false,
      0.5,
    );
  }
  const fade = cl((rk.position.y - base.y) / 130, 0, 1);
  sc.background.set(cur.bg).lerp(BLK, fade);
  sc.fog.color.copy(sc.background);
  sky.material.opacity = 1 - fade;
  stm.opacity = Math.max(cur.id === "moon" ? 1 : 0, fade);
  if (t >= 8 && !tr) {
    rfl.visible = false;
    lau.go = lau.ph = 0;
    finishScene();
  }
}
