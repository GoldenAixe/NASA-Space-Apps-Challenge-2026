// Physical surface obstacles exclude beacons, invisible inspection targets and the moving hatch.
let obstacles=[],walkableSurfaces=[],motionPath=null,liftLegExtension=0;
const KITE_RADIUS=1.98;
function rebuildObstacles(){
  obstacles=[];walkableSurfaces=[];
  if(cur.sp)return;
  dyn.updateMatrixWorld(true);
  dyn.traverse(o=>{
    if(!o.isMesh||o.isInstancedMesh||!o.geometry)return;
    const material=Array.isArray(o.material)?o.material[0]:o.material;
    if(!material||material.transparent&&material.opacity<.5||o===rfl)return;
    for(let parent=o;parent&&parent!==dyn;parent=parent.parent)if(parent.name==="hatch")return;
    o.geometry.computeBoundingBox();
    const box=o.geometry.boundingBox.clone().applyMatrix4(o.matrixWorld);
    box.outline=footprintHull(o.geometry.boundingBox,o.matrixWorld);
    const center=box.getCenter(new THREE.Vector3()),ground=gy(center.x,center.z);
    if(box.max.y<ground-.05||box.min.y>ground+25)return;
    if(box.max.y<=ground+.9&&box.max.y-box.min.y<.9){walkableSurfaces.push(box);return;}
    obstacles.push(box);
  });
}
function footprintHull(bounds,matrix){
  const points=[];
  for(const x of [bounds.min.x,bounds.max.x])for(const y of [bounds.min.y,bounds.max.y])for(const z of [bounds.min.z,bounds.max.z]){const v=new THREE.Vector3(x,y,z).applyMatrix4(matrix);points.push([v.x,v.z]);}
  points.sort((a,b)=>a[0]-b[0]||a[1]-b[1]);
  const cross=(a,b,c)=>(b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]),lower=[],upper=[];
  for(const p of points){while(lower.length>1&&cross(lower.at(-2),lower.at(-1),p)<=0)lower.pop();lower.push(p);}
  for(const p of points.slice().reverse()){while(upper.length>1&&cross(upper.at(-2),upper.at(-1),p)<=0)upper.pop();upper.push(p);}
  lower.pop();upper.pop();return lower.concat(upper);
}
function footprintTouches(b,x,z,radius){
  let inside=true;
  for(let i=0;i<b.outline.length;i++){
    const a=b.outline[i],c=b.outline[(i+1)%b.outline.length],dx=c[0]-a[0],dz=c[1]-a[1];
    if(dx*(z-a[1])-dz*(x-a[0])<0)inside=false;
    const t=cl(((x-a[0])*dx+(z-a[1])*dz)/(dx*dx+dz*dz||1),0,1);
    if((x-a[0]-t*dx)**2+(z-a[1]-t*dz)**2<radius*radius)return true;
  }
  return inside;
}
function surfaceY(x,z){
  let y=gy(x,z);
  for(const b of walkableSurfaces)if(x>=b.min.x&&x<=b.max.x&&z>=b.min.z&&z<=b.max.z&&footprintTouches(b,x,z,0))y=Math.max(y,b.max.y);
  return y;
}
function blockedAt(x,z){
  const y=surfaceY(x,z);
  return obstacles.some(b=>b.max.y>y+.12&&b.min.y<y+3.3&&x>b.min.x-KITE_RADIUS&&x<b.max.x+KITE_RADIUS&&z>b.min.z-KITE_RADIUS&&z<b.max.z+KITE_RADIUS&&footprintTouches(b,x,z,KITE_RADIUS));
}
function clearSegment(a,b){
  const distance=Math.hypot(b.x-a.x,b.z-a.z),steps=Math.max(1,Math.ceil(distance/.12));
  for(let i=1;i<=steps;i++){const f=i/steps;if(blockedAt(a.x+(b.x-a.x)*f,a.z+(b.z-a.z)*f))return false;}
  return true;
}
function surfacePath(from,to){
  if(clearSegment(from,to))return [to.clone()];
  const cell=1,margin=24,minX=Math.floor(Math.min(from.x,to.x)-margin),minZ=Math.floor(Math.min(from.z,to.z)-margin);
  const width=Math.ceil(Math.abs(from.x-to.x)+margin*2)+1,height=Math.ceil(Math.abs(from.z-to.z)+margin*2)+1;
  const cellAt=p=>[Math.round(p.x-minX),Math.round(p.z-minZ)];
  const [sx,sz]=cellAt(from),[gx,gz]=cellAt(to),id=(x,z)=>x+z*width;
  const start=id(sx,sz),goal=id(gx,gz),open=[{x:sx,z:sz,k:start,g:0,f:0}],cost=new Map([[start,0]]),came=new Map(),closed=new Set();
  const free=(x,z)=>x>=0&&z>=0&&x<width&&z<height&&!blockedAt(minX+x*cell,minZ+z*cell);
  let terminal=null;
  for(let count=0;open.length&&count<16000;count++){
    open.sort((a,b)=>b.f-a.f);const node=open.pop();if(closed.has(node.k))continue;closed.add(node.k);
    const world=node.k===start?from:new THREE.Vector3(minX+node.x,0,minZ+node.z);
    if(Math.hypot(world.x-to.x,world.z-to.z)<1.5&&clearSegment(world,to)){terminal=node.k;break;}
    for(const [dx,dz]of [[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){
      const x=node.x+dx,z=node.z+dz,k=id(x,z);
      if(!free(x,z)||dx&&dz&&(!free(node.x+dx,node.z)||!free(node.x,node.z+dz)))continue;
      if(!clearSegment(world,new THREE.Vector3(minX+x,0,minZ+z)))continue;
      const g=node.g+Math.hypot(dx,dz);
      if(g>=(cost.get(k)??Infinity))continue;
      cost.set(k,g);came.set(k,node.k);open.push({x,z,k,g,f:g+Math.hypot(x-gx,z-gz)});
    }
  }
  if(terminal===null)return [];
  const path=[to.clone()];
  for(let k=terminal;k!==start&&k!==undefined;k=came.get(k))path.push(new THREE.Vector3(minX+k%width,0,minZ+Math.floor(k/width)));
  path.reverse();
  // Remove redundant waypoints only when the entire shortcut is physically clear.
  const simple=[];let anchor=from;
  for(let i=0;i<path.length;){let far=i;while(far+1<path.length&&clearSegment(anchor,path[far+1]))far++;simple.push(path[far]);anchor=path[far];i=far+1;}
  return simple;
}
function moveKite(goal,dt,maintaining){
  if(!dt)return;
  const base=surfaceY(rv.position.x,rv.position.z),horizontal=Math.hypot(goal.x-rv.position.x,goal.z-rv.position.z);
  // Lower the lift before relocating it. Extend the feet before raising the deck.
  if(horizontal>.12&&rv.position.y>base+.05){rv.position.y=Math.max(base,rv.position.y-dt*1.8);return;}
  if(horizontal>.04){
    if(!motionPath||motionPath.goal.distanceToSquared(goal)>16){motionPath={goal:goal.clone(),points:surfacePath(rv.position,goal)};}
    if(clearSegment(rv.position,goal)){motionPath.points=[goal.clone()];motionPath.goal.copy(goal);}
    const point=motionPath.points[0];
    if(!point)return;
    const delta=new THREE.Vector3(point.x-rv.position.x,0,point.z-rv.position.z),length=delta.length();
    const step=Math.min(length,(maintaining?7:28)*dt),next=rv.position.clone();
    if(length>0)next.addScaledVector(delta,step/length);
    if(clearSegment(rv.position,next)){rv.position.x=next.x;rv.position.z=next.z;}
    else {motionPath=null;}
    rv.position.y=surfaceY(rv.position.x,rv.position.z);
    if(motionPath&&length<=step+.01)motionPath.points.shift();
  }else{
    motionPath=null;
    const targetY=maintaining?goal.y:surfaceY(goal.x,goal.z);
    if(targetY<=rv.position.y||liftLegExtension>=.98||targetY-base<.05)rv.position.y+=cl(targetY-rv.position.y,-1.8*dt,1.8*dt);
  }
}
function setMaintenanceLegs(on,dt){
  liftLegExtension=cl(liftLegExtension+(on?1:-1)*dt/0.65,0,1);
  outroLegs.forEach(leg=>{
    leg.visible=liftLegExtension>.001;
    leg.scale.y=liftLegExtension>.001?liftLegExtension:1;
    leg.position.y=liftLegExtension>.001?.74:.78;
    leg.rotation.x=0;
  });
  rv.userData.ws.forEach(w=>{w.visible=true;w.scale.setScalar(1-.98*liftLegExtension);});
}
function rampGeometry(){
  const base=rk.userData.base,length=6,hingeY=base.y+1.1;
  const deckFloor=gy(base.x,base.z)+(cur.launch?.6:0);
  return {length,angle:Math.acos(cl((deckFloor-hingeY)/length,-.95,-.01))};
}
function setHatchPose(open){
  const hatch=rk.getObjectByName("hatch"),g=rampGeometry();
  hatch.rotation.x=g.angle*open;hatch.scale.y=1+(g.length/3.6-1)*open;
  rk.updateMatrixWorld(true);
}
function boardingPoints(){
  const g=rampGeometry(),rotation=new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0),g.angle);
  rk.updateMatrixWorld(true);
  const rampPoint=t=>rk.localToWorld(new THREE.Vector3(0,g.length*t,-.12).applyQuaternion(rotation).add(new THREE.Vector3(0,1.1,2.66)));
  const tip=rampPoint(1),hinge=rampPoint(0),localTip=rk.worldToLocal(tip.clone());
  const gate=rk.localToWorld(new THREE.Vector3(0,0,localTip.z+2));gate.y=surfaceY(gate.x,gate.z);
  const inside=rk.localToWorld(new THREE.Vector3(0,1.125,-.6));
  return [gate,tip,hinge,inside];
}
function poseOnBoardingPath(points,progress,exitward){
  const lengths=points.slice(1).map((p,i)=>p.distanceTo(points[i])),total=lengths.reduce((a,b)=>a+b,0);
  let remaining=progress*total,index=0;
  while(index<lengths.length-1&&remaining>lengths[index]){remaining-=lengths[index++];}
  const a=points[index],b=points[index+1],f=lengths[index]?cl(remaining/lengths[index],0,1):0;
  rv.position.copy(a).lerp(b,f);
  const delta=b.clone().sub(a),pitch=-Math.atan2(delta.y,Math.hypot(delta.x,delta.z));
  rv.rotation.order="YXZ";rv.rotation.set(pitch,Math.atan2(delta.x,delta.z),0);
}

function moonMarsTravelText(progress){
  const total=STORY_KM.mars-STORY_KM.moon;
  const travelled=Math.round(total*cl(progress,0,1));
  return "MOON → MARS · "+total.toLocaleString("en-US")+" km total · "+travelled.toLocaleString("en-US")+" km travelled";
}
const KITE_BODY_VOLUMES=[
  new THREE.Box3(new THREE.Vector3(-.95,.72,-1.25),new THREE.Vector3(.95,1.55,1.25)),
  new THREE.Box3(new THREE.Vector3(-.87,2,.2),new THREE.Vector3(.87,3.02,1.2)),
];
function kiteSolidVolumes(){
  const volumes=KITE_BODY_VOLUMES.slice();
  for(const wheel of rv.userData.ws){
    if(!wheel.visible)continue;
    // A conservative tire/hub box in Kite's own frame, including wheel retraction.
    const half=new THREE.Vector3(.23*wheel.scale.x,.48*wheel.scale.y,.48*wheel.scale.z);
    volumes.push(new THREE.Box3(wheel.position.clone().sub(half),wheel.position.clone().add(half)));
  }
  return volumes;
}
function segmentHitsBody(a,b,radius){
  for(const volume of kiteSolidVolumes()){
    const box=volume.clone().expandByScalar(radius),delta=b.clone().sub(a);let lo=0,hi=1,miss=false;
    for(const axis of ["x","y","z"]){
      if(Math.abs(delta[axis])<1e-8){if(a[axis]<box.min[axis]||a[axis]>box.max[axis]){miss=true;break;}}
      else {let p=(box.min[axis]-a[axis])/delta[axis],q=(box.max[axis]-a[axis])/delta[axis];if(p>q)[p,q]=[q,p];lo=Math.max(lo,p);hi=Math.min(hi,q);if(lo>hi){miss=true;break;}}
    }
    if(!miss)return true;
  }
  return false;
}
function armPoseClear(shoulder,elbow,hand){
  return !segmentHitsBody(shoulder,elbow,.15)&&!segmentHitsBody(elbow,hand,.15)&&!segmentHitsBody(hand,hand,.23);
}
function protectKiteArms(){
  rv.updateMatrixWorld(true);
  arms.forEach((arm,i)=>{
    const elbow=rv.worldToLocal(elbows[i].getWorldPosition(new THREE.Vector3()));
    const hand=rv.worldToLocal(wrists[i].getWorldPosition(new THREE.Vector3()));
    if(!armPoseClear(arm.position,elbow,hand)){
      forearmShafts[i].scale.y=.78;wrists[i].position.y=-.78;
      for(const angle of [.42,.65,.9]){
        arm.rotation.set(-.35,0,(i?1:-1)*angle);elbows[i].rotation.set(-.25,0,0);
        rv.updateMatrixWorld(true);
        const safeElbow=rv.worldToLocal(elbows[i].getWorldPosition(new THREE.Vector3()));
        const safeHand=rv.worldToLocal(wrists[i].getWorldPosition(new THREE.Vector3()));
        if(armPoseClear(arm.position,safeElbow,safeHand))break;
      }
    }
  });
}
