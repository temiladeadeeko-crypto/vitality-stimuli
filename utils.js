
function qs(name, fallback=""){
  const u = new URL(window.location.href);
  const v = u.searchParams.get(name);
  return (v===null || v==="") ? fallback : v;
}
function setPill(el, customization, transparency){
  el.textContent = `Customization: ${customization} • Transparency: ${transparency}`;
}
function showToast(msg){
  const t = document.getElementById("toast");
  if(!t) return;
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"), 1400);
}
function navSetup(){
  const btns = Array.from(document.querySelectorAll(".navbtn"));
  const views = ["home","privacy","policy","explore"];
  function show(view){
    btns.forEach(b=>{
      const active = b.dataset.view===view;
      b.setAttribute("aria-current", active ? "page" : "false");
    });
    views.forEach(v=>{
      const el = document.getElementById("vx-"+v);
      if(el) el.style.display = (v===view) ? "" : "none";
    });
    // store last view
    try{ localStorage.setItem("vx_last_view", view);}catch(e){}
  }
  btns.forEach(b=>b.addEventListener("click", ()=>show(b.dataset.view)));
  // start view
  let start = qs("view","");
  if(!start){
    try{ start = localStorage.getItem("vx_last_view") || "home"; }catch(e){ start = "home"; }
  }
  if(!views.includes(start)) start="home";
  show(start);
}
