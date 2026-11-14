// Use only the verified NSSDCA record in the existing in-story information panels too.
ALMANAC.forEach(d=>{
  Object.assign(HW[d.key],{intro:d.summary,stt:d.status,loc:d.location,source:d.source,
    rows:[["Mission",d.summary],["Dates (UT)",d.dates],["Equipment",d.equipment],["Location",d.location],["Status",d.status],["Science",d.discovery]],
    note:"The real hardware did not talk to Kite or donate parts. These are fictional story events."});
});
function almanacPicture(d,large=false) {
  if(d.image){const img=document.createElement("img");img.src=d.image;img.alt=d.caption;img.decoding="async";if(!large)img.loading="lazy";return img;}
  const missing=document.createElement("div");missing.className="photo-missing";missing.textContent=large?d.caption:"NSSDCA photo not verified";return missing;
}
function selectExplorer(key) {
  const d=ALMANAC.find(x=>x.key===key);if(!d)return;
  $("almanacGrid").querySelectorAll("button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.explorer===key));
  const panel=$("almanacDetail");panel.replaceChildren();
  const type=document.createElement("div");type.className="eyebrow";type.textContent=d.world+" · "+d.kind;
  const title=document.createElement("h2");title.textContent=d.name;
  const summary=document.createElement("p");summary.textContent=d.summary;
  const fig=document.createElement("figure");fig.append(almanacPicture(d,true));
  if(d.image){const caption=document.createElement("figcaption");caption.textContent=d.caption;fig.append(caption);}
  const dl=document.createElement("dl");
  for(const [label,value]of [["Dates (UT)",d.dates],["Location",d.location],["Status",d.status],["Equipment",d.equipment],["Science",d.discovery]]){
    const dt=document.createElement("dt"),dd=document.createElement("dd");dt.textContent=label;dd.textContent=value;dl.append(dt,dd);
  }
  const links=document.createElement("p");links.className="source-links";
  for(const [label,url]of [["NSSDCA fact record",d.source],["NSSDCA photo record",d.photoSource],[d.key==="ins"?"Original equipment illustration":d.key==="ing"?"Original mission image":"Original photograph",d.photoUrl]]){
    if(!url)continue;const a=document.createElement("a");a.href=url;a.target="_blank";a.rel="noopener noreferrer";a.textContent=label;links.append(a);
  }
  const note=document.createElement("p");note.className="story-separation";note.textContent="Historical information verified against NSSDCA, 14 November 2026. Kite’s dialogues and repair exchanges are fictional.";
  panel.append(type,title,summary,fig,dl,links,note);
}
function openAlmanac(){
  if(!ended)return;pn=true;$("almanac").hidden=false;$("end").hidden=true;
  const grid=$("almanacGrid");
  if(!grid.children.length)ALMANAC.forEach(d=>{
    const b=document.createElement("button");b.className="almanac-card";b.dataset.explorer=d.key;b.setAttribute("aria-pressed","false");
    const name=document.createElement("strong");name.textContent=d.name;const tag=document.createElement("small");tag.textContent=d.world+" · "+d.kind;
    b.append(almanacPicture(d),name,tag);b.addEventListener("click",()=>selectExplorer(d.key));grid.append(b);
  });
  selectExplorer(grid.querySelector('[aria-pressed="true"]')?.dataset.explorer||"lmod");
  $("almanac").querySelector("button").focus();
}
function closeAlmanac(){pn=false;$("almanac").hidden=true;$("end").hidden=false;$("end").querySelector('[data-a="almanac"]').focus();}
