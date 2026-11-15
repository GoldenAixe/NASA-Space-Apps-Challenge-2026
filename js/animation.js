// Reuse the original particle pool, track stamping, light rig and view interpolation.
const vec = new THREE.Vector3(),
  target = new THREE.Vector3(),
  desired = new THREE.Vector3(),
  look = new THREE.Vector3(),
  projected = new THREE.Vector3();
let lastMap = 0;
function animateScene(dt) {
  const active = started && !paused && !pn && !ended,
    s = current(),
    sp = line().speaker;
  rv.scale.setScalar(started ? 1 : 1.6);
  if (active) {
    sceneAge += dt;
    elapsed += dt;
    if (route) {
      travelTick(dt);
      if (!route) return;
    } else {
      const delta = targetPos - pos;
      v =
        Math.abs(delta) > 0.03
          ? Math.sign(delta) * Math.min(Math.abs(delta) * 2.5, 28)
          : 0;
      pos = Math.abs(delta) <= 0.03 ? targetPos : cl(pos + v * dt, 0, PL);
      if (s.id === 22) {
        const previous = pos;
        pos = outroStart + (PL-outroStart)*sm(sceneAge/6);
        v = dt ? (pos-previous)/dt : 0;
      }
    }
  }
  if (started && current().id === 4 && !cruise)
    pos = targetPos = SET.rm ? PL * 0.5 : PL * cl(sceneAge / 24, 0, 0.9);
  if (cruise) pos = targetPos = PL * cl(cruise.t / cruise.dur, 0, 1);
  const f = cl(pos / PL, 0, 1),
    P = cur.cv.getPointAt(f),
    T = cur.cv.getTangentAt(f);
  if (!cur.sp) {
    rv.visible = true;
    ship.visible = false;
    const goal = new THREE.Vector3(P.x,gy(P.x,P.z),P.z);
    const maintaining = !route && !lau.go && rk && [6,11,12,13].includes(s.id);
    if (maintaining) maintenanceGoal(s,goal);
    const old = rv.position.clone();
    if (!lau.go && ![5,14].includes(s.id)) moveKite(goal,dt,maintaining);
    const moving = Math.hypot(rv.position.x-old.x,rv.position.z-old.z);
    if (active && moving > 0.0001) {
      const heading = Math.atan2(rv.position.x-old.x,rv.position.z-old.z);
      rv.rotation.y += wr(heading-rv.rotation.y)*Math.min(1,dt*9);
      rv.userData.ws.forEach((w) => (w.rotation.x += moving/0.48));
      arms.forEach((a,i) => a.rotation.x = Math.sin(pos*1.7+i*Math.PI)*.23);
      if (lastT.distanceToSquared(rv.position) > 0.7) {
        stamp(rv.position.x, rv.position.z, rv.rotation.y);
        lastT.copy(rv.position);
      }
    } else if (active && s.id !== 22) {
      const partnerKey = HW[sp] ? sp : s.hardware;
      const partner = !route && HWs.find(h => cur.subs[h.i].hw === partnerKey);
      const face = partner ? partner.g.position : maintaining ? workAnchor(s) : null;
      const heading = face ? Math.atan2(face.x-rv.position.x,face.z-rv.position.z) : .25;
      rv.rotation.y += wr(heading-rv.rotation.y)*Math.min(1,dt*7);
    }
  } else {
    rv.visible = false;
    ship.visible = true;
    ship.position.copy(P);
    updateDamage(
      flightBody,
      false,
      s.id === 4 && lineIndex >= 4,
      cur.id === "m2m",
    );
    ship.rotation.y = Math.atan2(T.x, T.z);
    ship.rotation.z =
      s.id === 4 && !SET.rm ? Math.sin(elapsed * 6) * 0.08 : 0;
    ship.position.y += SET.rm ? 0 : Math.sin(elapsed) * 0.15;
    if ((active || cruise) && !SET.rm) {
      const nozzle = new THREE.Vector3(0, 0, -3.8);
      ship.localToWorld(nozzle);
      ex(
        nozzle,
        new THREE.Vector3(0, 0, -1)
          .transformDirection(ship.matrixWorld)
          .multiplyScalar(14),
        1.6,
        0.65,
        0xffa030,
        true,
        0.8,
      );
    }
  }
  if (!started) {
    rv.position.set(-6, gy(-6, 0), 0);
    rv.rotation.y = 0.35;
    rv.visible = true;
    head.rotation.y = SET.rm ? 0 : Math.sin(elapsed * 0.7) * 0.1;
  }
  if (active && !SET.rm && !route) {
    head.rotation.z =
      sp === "kite" && !spokenDone ? Math.sin(elapsed * 7) * 0.035 : 0;
    head.rotation.y = sp === "kite" ? Math.sin(elapsed * 1.8) * 0.12 : 0;
    const wave =
      !lau.go &&
      (s.id === 3 || s.id === 13 || (s.id === 21 && lineIndex >= 7));
    arms.forEach(
      (a, i) =>
        (a.rotation.z =
          wave && i === 1
            ? 2.4 + Math.sin(elapsed * 7) * 0.3
            : sp === "kite"
              ? Math.sin(elapsed * 3 + i) * 0.13
              : 0),
    );
    eyeMats.forEach(
      (m) => (m.scale.y = Math.sin(elapsed * 0.7) > 0.995 ? 0.14 : 0.18),
    );
  }
  if (rk && started && !tr && !cruise) {
    if ((lau.ph > 0 || lau.go) && active) launchTick(dt);
    else if (s.id === 5 || s.id === 14) landingTick(s,dt);
    else {
      rk.position.copy(rk.userData.base);
      rfl.visible = false;
    }
    if (rk)
      updateDamage(
        rk,
        cur.id === "moon" &&
          (s.id < 11 || (s.id === 11 && lineIndex < 1)),
        cur.id === "moon" &&
          (s.id < 11 || (s.id === 11 && lineIndex < 3)),
        s.id >= 12,
      );
    if (rk && s.id === 12) {
      const lamps = rk.getObjectByName("system indicators").children;
      lamps.forEach(
        (lamp, i) =>
          (lamp.visible =
            lineIndex > 1 || (lineIndex === 1 && lineAge >= i * 0.14)),
      );
    }
  }
  if (active && !route && !lau.go && rk && [6,11,12,13].includes(s.id)) maintenanceGesture(s,dt);
  else {
    maintenanceLift.visible=false;wrench.visible=false;
    if(s.id!==22){setMaintenanceLegs(false,dt);elbows.forEach((e,i)=>{e.rotation.set(0,0,0);forearmShafts[i].scale.y=.78;wrists[i].position.y=-.78;});}
  }
  if (s.id === 22 && started) outroPose(dt,ended);
  protectKiteArms();
  // All historical models stay on the ground. A cyan projection demonstrates mechanisms.
  // These gestures illustrate the story; they do not claim retired machines have restarted.
  for (const h of HWs) {
    h.g.position.set(h.bx, h.by, h.bz);
    const key = cur.subs[h.i].hw;
    h.g.rotation.y = 0.3;
    h.rg.scale.setScalar(
      key === s.hardware && !SET.rm
        ? 1 + Math.sin(elapsed * 3) * 0.05
        : 1,
    );
    h.bm.opacity = key === s.hardware ? 0.2 : 0.07;
  }
  if (active && !SET.rm && !route) {
    animateDemonstration(dt);
    if (rk && rfl.visible && Math.random() < 0.65)
      ex(
        rk.position.clone().add(new THREE.Vector3(0, -1, 0)),
        new THREE.Vector3(
          (Math.random() - 0.5) * 2,
          -5,
          (Math.random() - 0.5) * 2,
        ),
        2.2,
        0.7,
        0xffb350,
        true,
        0.7,
      );
    if (s.id === 5 && sceneAge >= 2 && sceneAge < 2.45)
      ex(
        rk.position.clone(),
        new THREE.Vector3(
          (Math.random() - 0.5) * 7,
          0.3,
          (Math.random() - 0.5) * 7,
        ),
        1.8,
        1.1,
        0xb3b6ca,
        false,
        0.23,
      );
  }
  if (active && !route && s.id === 11) {
    const n =
      line().sourceLine === 45
        ? 4
        : line().sourceLine === 44
          ? Math.min(3, lineIndex)
          : 0;
    repairVisual(n, dt);
  } else if (
    active &&
    !route &&
    s.chapter === 3 &&
    lineIndex === s.lines.length - 1
  ) {
    ensureRepairs();
    const part = s.id - 7,
      h = HWs.find((h) => cur.subs[h.i].hw === s.hardware),
      f = sm(lineAge / 1.0);
    repairPieces.forEach((g, i) => {
      g.visible = i === part && f < 1;
      if (g.visible) {
        g.position.copy(h.g.position).lerp(rv.position, f);
        g.position.y += 1.7 + Math.sin(Math.PI * f) * 2;
      }
    });
  } else repairVisual(0, 0, true);
  if (!started) elapsed += dt;
}
const demoLayer = new THREE.Group();
W.add(demoLayer);
const demoModels=new Map();
let demoKey=null,demoModel=null;
function clearDemonstrations(){disposeGroup(demoLayer);demoModels.clear();demoKey=demoModel=null;}
function ensureDemonstration(key){
  if(demoModels.has(key))return demoModels.get(key);
  const h=HWs.find(h=>cur.subs[h.i].hw===key);if(!h)return null;
  const model=mechanismModel(key);model.scale.setScalar(key==="ing"?.85:.48);
  model.traverse(o=>{if(o.isMesh)o.material=new THREE.MeshBasicMaterial({color:0x000000,wireframe:true,transparent:true,opacity:.42,depthWrite:false});});
  model.position.set(h.bx,h.by+4.5,h.bz);demoLayer.add(model);demoModels.set(key,model);return model;
}
function setDemonstration(){
  const key=HW[line().speaker]?line().speaker:current().hardware;
  demoKey=key;demoModel=key?ensureDemonstration(key):null;
}
function animateDemonstration(dt){
  for(const[key,model]of demoModels){
    const h=HWs.find(h=>cur.subs[h.i].hw===key);if(!h)continue;
    model.visible=true;model.position.set(h.bx,h.by+4.5,h.bz);
    const u=model.userData,t=elapsed;
    if(u.ws)u.ws.forEach(w=>w.rotation.x+=dt*1.4);
    if(u.hd)u.hd.rotation.y=Math.sin(t)*.18;
    if(u.arm)u.arm.rotation.z=Math.sin(t*1.5)*.2;
    if(u.signal)u.signal.scale.y=1+Math.sin(t*3)*.2;
    if(key==="lmod")model.rotation.y=Math.sin(t)*.06;
    if(key==="lrv")model.rotation.y=Math.sin(t)*.1;
    if(u.rotors&&!(key==="ing"&&(done.has(key)||current().hardware===key&&line().sourceLine>=90)))u.rotors.forEach((r,i)=>r.rotation.y+=(i?-1:1)*dt*15);
  }
}
let repairPieces = [];
function ensureRepairs() {
  if (repairPieces.length && repairPieces[0].parent === dyn) return;
  repairPieces = [];
  const bracket = V(G(), [
    [1, 0.15, 0.3, 0, 0, 0, 0xe8b54d],
    [0.15, 0.8, 0.3, -0.43, 0.35, 0, 0xe8b54d],
  ]);
  const motor = G();
  Cy(motor, 0.35, 0.35, 0.7, 0, 0, 0, 0x51c9ee, 1, 8, Math.PI / 2);
  V(motor, [[0.12, 0.12, 0.4, 0, 0, 0.5, 0xcbd9e6]]);
  const circuit = V(G(), [
    [0.7, 0.08, 0.7, 0, 0, 0, 0x36a788],
    [0.25, 0.12, 0.25, 0, 0.1, 0, 0x242f46],
    [0.1, 0.1, 1, 0, 0, 0.65, 0xffda64],
  ]);
  const camera = V(G(), [
    [0.6, 0.4, 0.3, 0, 0, 0, 0xcbd9e6],
    [0.25, 0.25, 0.1, 0, 0, 0.2, 0x51c9ee, 1],
    [0.12, 0.12, 1, 0.5, -0.1, 0.2, 0xa3b3c9],
    [0.4, 0.2, 0.5, 0.5, -0.2, 0.7, 0xe8b54d],
  ]);
  repairPieces = [bracket, motor, circuit, camera];
  repairPieces.forEach((g) => dyn.add(g));
}
function repairVisual(n, dt, hide = false) {
  if (hide) {
    repairPieces.forEach((g) => (g.visible = false));
    return;
  }
  if (!rk) return;
  ensureRepairs();
  const anchors = REPAIR_ANCHORS;
  rk.updateMatrixWorld(true);
  repairPieces.forEach((piece, i) => {
    piece.visible = i < n && (i < n-1 || workAge > 0);
    if (!piece.visible) return;
    const f = i === n - 1 ? sm(workAge / 1.2) : 1;
    const end = rk.localToWorld(new THREE.Vector3(...anchors[i]));
    rv.updateMatrixWorld(true);
    const hand = wrists[1].getWorldPosition(new THREE.Vector3());
    piece.position.copy(hand).lerp(end, f);
    piece.rotation.y = rk.rotation.y;
    if (i === 3 && lineAge < 1.7 && !SET.rm)
      piece.rotation.z = Math.sin(lineAge * 8) * 0.35;
  });
}
function cameraFrame(dt) {
  const s = current(),
    focusKey = route
      ? null
      : pn
        ? hwk
        : line().speaker === "kite"
          ? null
          : HW[line().speaker]
            ? line().speaker
            : s.hardware,
    h = HWs.find((h) => cur.subs[h.i].hw === focusKey);
  let center = rv.position.clone().add(new THREE.Vector3(0, 1.8, 0)),
    distance = 12;
  if (cur.sp) {
    center = ship.position.clone();
    const T = cur.cv.getTangentAt(cl(pos / PL, 0, 1));
    desired
      .copy(center)
      .addScaledVector(T, -12)
      .add(new THREE.Vector3(12,7,0));
    const flightOffset=desired.clone().sub(center);
    flightOffset.applyAxisAngle(new THREE.Vector3(0,1,0),cyaw);
    desired.copy(center).add(flightOffset);
    desired.y += cpit*8;
    target.copy(center).addScaledVector(T, 1.5);
  } else if (!started) {
    if (innerWidth < 700) {
      desired.set(4, 6, 22);
      target.set(-5, -5, -2);
    } else {
      desired.set(9, 6.5, 20);
      target.set(0, 4, -5);
    }
  } else {
    if (h) {
      center.lerp(
        h.g.position.clone().add(new THREE.Vector3(0, 1.8, 0)),
        0.62,
      );
      distance = 15;
    }
    if (!route && [3, 5, 11, 12, 13, 14].includes(s.id) && rk) {
      const cockpit = rk.position.clone().add(new THREE.Vector3(0, 5, 0));
      center.lerp(cockpit, rv.visible ? 0.65 : 1);
      distance = 26;
    }
    if (s.id === 22) {
      const tangent=cur.cv.getTangentAt(1);
      const back=Math.atan2(tangent.x,tangent.z)+Math.PI;
      const yaw=ended ? back+Math.PI*sm(farewellTime/1.2) : back;
      const side=new THREE.Vector3(Math.cos(yaw),0,-Math.sin(yaw));
      desired.copy(rv.position).add(new THREE.Vector3(Math.sin(yaw)*18,7,Math.cos(yaw)*18));
      target.copy(rv.position).add(new THREE.Vector3(0,2,0)).addScaledVector(side,ended && innerWidth>700 ? 5 : 0);
      const k=1-Math.exp(-dt*3.1);
      cam.position.lerp(desired,k);look.lerp(target,k);cam.lookAt(look);
      return;
    }
    if (innerWidth < 700) distance *= 1.5;
    const yaw = 0.4 + cyaw,
      dist = distance * manualZoom;
    desired.set(
      center.x + Math.sin(yaw) * dist,
      center.y + 5 + cpit * 8,
      center.z + Math.cos(yaw) * dist,
    );
    target.copy(center);
  }
  const k = SET.rm || snap ? 1 : 1 - Math.exp(-dt * 3.1);
  cam.position.lerp(desired, k);
  look.lerp(target, k);
  cam.lookAt(look);
  snap = 0;
  if (!cur.sp)
    cam.position.y = Math.max(
      cam.position.y,
      gy(cam.position.x, cam.position.z) + 1.4,
    );
  stars.position.copy(cam.position);
  gal.position.copy(cam.position);
  sky.position.copy(cam.position);
  gal.visible = cur.id === "moon" || !!cur.sp;
  sun.position.copy(veh().position).add(new THREE.Vector3(-22, 25, 20));
  sun.target.position.copy(veh().position);
  flare.visible = cur.id === "moon";
  if (flare.visible)
    flare.position.copy(cam.position).addScaledVector(SUND, 430);
  if (cur.sunc) {
    sunM.position.copy(cam.position).addScaledVector(SUND, 420);
    sunM.quaternion.copy(cam.quaternion);
  }
  if (cur.id === "moon") {
    earth.visible = true;
    earth.position.copy(cam.position).addScaledVector(ED, 430);
    earth.scale.setScalar(40);
  }
  HWs.forEach((h) => {
    const key = cur.subs[h.i].hw,
      dist = h.g.position.distanceTo(rv.position);
    projected.set(h.bx, h.by + h.top, h.bz).project(cam);
    const onscreen =
      inspectable(key) &&
      started &&
      !pn &&
      !paused &&
      !ended &&
      !tr &&
      !cruise &&
      projected.z < 1 &&
      projected.z > -1 &&
      Math.abs(projected.x) < 0.93 &&
      projected.y < 0.68 &&
      projected.y > -0.45 &&
      dist < 36;
    h.lb.style.display = onscreen ? "block" : "none";
    h.lb.disabled = !onscreen;
    h.lb.querySelector("span").textContent = (done.has(key) ? "✓ " : "") + HW[key].nm;
    h.lb.style.transform = `translate(${(projected.x * 0.5 + 0.5) * innerWidth}px,${(-projected.y * 0.5 + 0.5) * innerHeight}px) translate(-50%,-100%)`;
  });
}
function loop(now) {
  requestAnimationFrame(loop);
  const raw = (now - lastFrame) / 1000;
  lastFrame = now;
  if (document.hidden || (paused && started && !pn)) return;
  const dt = Math.min(raw, 0.05),
    active = started && !paused && !pn && !ended && !tr && !cruise;
  if (active && !route && !awaitingLaunch && !lau.go) {
    if (sceneSettling > 0) {
      sceneSettling = Math.max(0, sceneSettling - dt);
      if (sceneSettling === 0 && !cur.sp && ![5,14,22].includes(current().id)) {
        const q=cur.cv.getPointAt(cl(pos/PL,0,1));
        if (Math.hypot(rv.position.x-q.x,rv.position.z-q.z)>.15 && ![6,11,12,13].includes(current().id)) sceneSettling=.05;
      }
      if (sceneSettling === 0) beginLine(lineComplete);
    } else {
      lineAge += dt;
      // A blocked browser speech service falls back only after it reports no playback.
      if (
        !spokenDone &&
        ((!speechStarted && lineAge > 6) ||
          (speechStarted &&
            lineAge > Math.max(18, speechText().length * 0.19 + 8)))
      ) {
        stopSpeech();
        spokenDone = true;
        notify(
          "No speech voice is available here. Timed subtitles are enabled.",
        );
        SET.cap = true;
        caption();
      }
      const readSeconds = Math.max(
        1.1,
        line().text.split(/\s+/).length /
          (SET.narr && speechStarted ? 3.8 : 2.7),
      );
      const actionMin = current().id === 22 && lineIndex === 0 ? 6.4 : current().id === 11 ? 7 : current().id === 6 && lineIndex === 1 ? 5 : 0,
        sceneOK = current().id !== 11 || lineIndex === 0 || workAge >= 2.5;
      if (
        spokenDone &&
        lineAge >= Math.max(readSeconds, actionMin) &&
        sceneOK &&
        !lineComplete
      ) {
        lineComplete = true;
        lineWait = 0.35;
        caption();
        save();
      }
      if (lineComplete && auto) {
        lineWait -= dt;
        if (lineWait <= 0) advance();
      }
    }
  }
  const fdt = (paused || pn) && started ? 0 : dt;
  if (tr || cruise) elapsed += fdt;
  if (cruise && started && !paused && !pn) {
    cruise.t += fdt;
    $("tpn").textContent=moonMarsTravelText(cruise.t/cruise.dur);
    $("tpf").style.width =
      Math.min(100, (cruise.t / cruise.dur) * 100) + "%";
    if (cruise.t >= cruise.dur) {
      const ix = cruise.index;
      cruise = null;
      startTr(4, () => enterScene(ix, 0, false, false, true));
    }
  }
  if (tr) {
    if (started && !paused && !pn) trStep(fdt);
  } else {
    animateScene(fdt);
    cameraFrame(fdt);
  }
  syncControls();
  fx(fdt);
  if (active && !SET.rm) {
    clouds.forEach((g) => {
      g.position.x += dt * 0.35;
      if (g.position.x > 160) g.position.x = -160;
    });
    exs.forEach((s) => {
      if (!s.visible) return;
      const u = s.userData;
      u.life -= dt;
      if (u.life <= 0) {
        s.visible = false;
        return;
      }
      s.position.addScaledVector(u.vel, dt);
      s.material.opacity = (u.life / u.max) * u.op;
    });
  }
  if (now - lastMap > 100) {
    drawMM(veh());
    lastMap = now;
  }
  R.setViewport(0, 0, bw, bh);
  R.render(sc, cam);
  performanceWindow += dt;
  if (raw > 0.045) lowFrames++;
  if (performanceWindow > 8) {
    if (lowFrames > 80 && QP < 1.5) {
      QP = 1.5;
      R.shadowMap.enabled = false;
      rs();
    }
    lowFrames = 0;
    performanceWindow = 0;
  }
}
R.domElement.addEventListener("webglcontextlost", (e) => {
  e.preventDefault();
  if (started) pause(true);
  notify(
    "Graphics were interrupted. Progress is saved; reload to restore the adventure.",
  );
});
