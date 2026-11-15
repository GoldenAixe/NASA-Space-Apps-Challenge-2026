// Two articulated arms, a visible wrench, and a telescoping maintenance lift.
const elbows=[],wrists=[],forearmShafts=[];
arms.forEach(a=>{
  a.clear();V(a,[[.3,.7,.3,0,-.35,0,0xf0f3fa]]);
  const elbow=G(),shaft=V(G(),[[.26,1,.26,0,-.5,0,0xb7c5d9]]);
  const wrist=V(G(),[[.43,.25,.4,0,0,0,0xffb43e],[.12,.25,.12,-.15,0,.16,0xe9ad3c],[.12,.25,.12,.15,0,.16,0xe9ad3c]]);
  shaft.scale.y=.78;wrist.position.y=-.78;elbow.add(shaft,wrist);
  elbow.position.y=-.72;a.add(elbow);elbows.push(elbow);wrists.push(wrist);forearmShafts.push(shaft);
});
const wrench=V(G(),[[.12,.65,.12,0,0,0,0xd4e3ed],[.42,.12,.12,0,.32,0,0xd4e3ed],[.1,.25,.12,-.18,.4,0,0xd4e3ed],[.1,.25,.12,.18,.4,0,0xd4e3ed]]);
wrench.position.set(0,0,0);wrists[1].add(wrench);wrench.visible=false;
const maintenanceLift=G();maintenanceLift.name="maintenance lift";
const liftBase=V(G(),[[2.8,.2,2.4,0,.1,0,0x354961],[.2,.5,.2,-1.2,.4,-1,0xffc04a],[.2,.5,.2,1.2,.4,-1,0xffc04a]]);
const liftPost=V(G(),[[.3,1,.3,0,.5,0,0x94aac2]]);
const liftDeck=V(G(),[[2.8,.18,2.4,0,0,0,0x8b9daf],[2.8,.08,.12,0,.13,1.15,0xffc04a,1]]);
maintenanceLift.add(liftBase,liftPost,liftDeck);W.add(maintenanceLift);maintenanceLift.visible=false;
const REPAIR_ANCHORS=[[3.1,.1,3.1],[-1.1,2.4,2.9],[1.6,5.9,2.9],[0,4.9,3.0]];
let workAge=0;
function workAnchor(s) {
  const i=s.id===11 ? cl(lineIndex-1,0,3) : s.id===6 ? 2 : 3;
  rk.updateMatrixWorld(true);
  return rk.localToWorld(new THREE.Vector3(...REPAIR_ANCHORS[i]));
}
function maintenanceGoal(s,goal) {
  const inspecting=s.id===6;
  const anchor=workAnchor(s);
  const i=s.id===11 ? cl(lineIndex-1,0,3) : 3;
  const local= inspecting ? [3.8,0,6.1] : s.id===11&&lineIndex===0 ? [0,0,7.6] : [REPAIR_ANCHORS[i][0],0,5.9];
  const world=rk.localToWorld(new THREE.Vector3(...local));
  goal.set(world.x,gy(world.x,world.z),world.z);
  if(s.id===11&&lineIndex>1)goal.y+=Math.max(0,anchor.y-goal.y-2.2);
}
function aimArm(i,point) {
  rv.updateMatrixWorld(true);
  const local=rv.worldToLocal(point.clone()).sub(arms[i].position);
  const L1=.72,L2=cl(local.length()-L1+.55,.95,2.6),d=cl(local.length(),.15,L1+L2-.01),axis=local.clone().normalize();
  forearmShafts[i].scale.y=L2;wrists[i].position.y=-L2;
  const along=(L1*L1-L2*L2+d*d)/(2*d),height=Math.sqrt(Math.max(0,L1*L1-along*along));
  const side=i?1:-1;
  const outward=new THREE.Vector3(side,0,0),bend=outward.clone().addScaledVector(axis,-outward.dot(axis)).normalize();
  let joint=null;
  for(const angle of [0,.3,-.3,.6,-.6,1,-1,1.5,-1.5,Math.PI]){
    const candidate=axis.clone().multiplyScalar(along).addScaledVector(bend.clone().applyAxisAngle(axis,angle),height);
    if(armPoseClear(arms[i].position,candidate.clone().add(arms[i].position),axis.clone().multiplyScalar(d).add(arms[i].position))){joint=candidate;break;}
  }
  if(!joint){arms[i].rotation.set(-.35,0,side*.25);elbows[i].rotation.set(-.25,0,0);return;}
  arms[i].quaternion.setFromUnitVectors(new THREE.Vector3(0,-1,0),joint.clone().normalize());
  const lower=axis.clone().multiplyScalar(d).sub(joint).applyQuaternion(arms[i].quaternion.clone().invert()).normalize();
  elbows[i].quaternion.setFromUnitVectors(new THREE.Vector3(0,-1,0),lower);
}
function maintenanceGesture(s,dt) {
  const goal=new THREE.Vector3();maintenanceGoal(s,goal);
  const ready=rv.position.distanceTo(goal)<.2;
  const anchor=workAnchor(s);
  if(ready)workAge+=dt;
  const liftHeight=Math.max(0,rv.position.y-surfaceY(rv.position.x,rv.position.z));
  const onLift = s.id===11 && (lineIndex>0 || Math.hypot(rv.position.x-goal.x,rv.position.z-goal.z)<.2) || liftHeight>.02;
  maintenanceLift.visible=s.id===11 || liftHeight>.02;
  const platformPoint=onLift?rv.position:goal;
  maintenanceLift.position.set(platformPoint.x,surfaceY(platformPoint.x,platformPoint.z),platformPoint.z);
  liftPost.scale.y=Math.max(.01,liftHeight);liftDeck.position.y=liftHeight-.1;
  setMaintenanceLegs(onLift,dt);
  wrench.visible=s.id===11&&lineIndex>0;
  if(s.id===6){
    head.rotation.y=Math.sin(sceneAge*1.1)*.45;head.rotation.x=.12+Math.sin(sceneAge*2)*.12;
    arms[1].rotation.z=2.25;elbows[1].rotation.x=-.7;
  } else if(s.id===11&&lineIndex>0){
    head.rotation.x=-.12;
    const shoulder=rv.localToWorld(arms[1].position.clone());
    const approach=anchor.clone().sub(shoulder).normalize();
    const gripPoint=anchor.clone().addScaledVector(approach,-.52);
    aimArm(1,gripPoint);aimArm(0,anchor.clone().add(new THREE.Vector3(-.3,0,0)));
    rv.updateMatrixWorld(true);
    const tipDirection=wrists[1].worldToLocal(anchor.clone()).normalize();
    wrench.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),tipDirection);
    wrench.rotateY(Math.sin(workAge*8)*.18);
    if(ready&&Math.floor(workAge*3)!==Math.floor((workAge-dt)*3)){
      tone(330,170,.055,"triangle",.23);
      if(!SET.rm)ex(anchor,new THREE.Vector3(.5,.8,.3),.2,.2,0xffd85c,true,.8);
    }
  } else {head.rotation.x=0;wrench.visible=false;}
}
// Kite deploys two small walking legs for the final send-off.
const outroLegs=[];
for(const side of [-1,1]){
  const leg=V(G(),[[.27,.55,.27,0,-.27,0,0xc5d1df],[.55,.18,.75,0,-.65,.16,0xffb43e]]);
  leg.position.set(side*.5,.78,.05);rv.add(leg);leg.visible=false;outroLegs.push(leg);
}
let outroStart=0,outroHeading=0,farewellTime=0;
function outroPose(dt,isEnd) {
  const tangent=cur.cv.getTangentAt(cl(pos/PL,0,1));
  const walkAngle=Math.atan2(tangent.x,tangent.z);
  outroLegs.forEach((leg,i)=>{leg.visible=true;leg.rotation.x=isEnd ? .12*Math.sin(farewellTime*6) : Math.sin(pos*2.8+i*Math.PI)*.5;});
  rv.userData.ws.forEach(w=>w.visible=false);
  if(isEnd){
    if(!pn&&!paused)farewellTime+=dt;
    const heading=Math.atan2(cam.position.x-rv.position.x,cam.position.z-rv.position.z);
    rv.rotation.y+=wr(heading-rv.rotation.y)*Math.min(1,dt*4);
    rv.position.y=gy(rv.position.x,rv.position.z)+(SET.rm?0:Math.abs(Math.sin(farewellTime*3.4))*.85);
    head.rotation.set(0,0,0);
    arms[0].rotation.set(-.2,0,-.25);
    arms[1].rotation.set(0,0,2.4+Math.sin(farewellTime*9)*.35);
    elbows[1].rotation.set(-.3,0,Math.sin(farewellTime*9)*.18);
  } else {
    rv.rotation.y+=wr(walkAngle-rv.rotation.y)*Math.min(1,dt*6);
    rv.position.y=gy(rv.position.x,rv.position.z)+(SET.rm?0:Math.abs(Math.sin(pos*2.8))*.08);
    arms.forEach((a,i)=>a.rotation.set(Math.sin(pos*2.8+i*Math.PI)*.35,0,0));
    elbows.forEach(e=>e.rotation.set(-.12,0,0));
  }
}
