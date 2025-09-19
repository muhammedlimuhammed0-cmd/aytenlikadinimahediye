// KART
const card=document.getElementById("card");
card.addEventListener("click",e=>{
  if(e.target.closest(".nav")) return;
  if(!card.classList.contains("open")){
    card.classList.add("open");
    setTimeout(()=>{if(current===0) goTo(1)},10);
    return;
  }
  if(e.target.closest(".book")) next();
});

// sayaç
const startDate=new Date("2024-12-09T00:00:00");
function updateCounter(){
  const el=document.getElementById("counter");
  if(!el) return;
  const days=Math.floor((Date.now()-startDate)/(1000*60*60*24));
  el.textContent=`Seninle geçen gün: ${days}`;
}
updateCounter();
setInterval(updateCounter,60*60*1000);

// kitap
const pages=[...document.querySelectorAll(".page")];
const total=pages.length;
let current=0;
const dotsWrap=document.getElementById("dots");

function renderDots(){
  dotsWrap.innerHTML="";
  for(let i=1;i<=total;i++){
    const d=document.createElement("div");
    d.className="dot"+(i===current?" active":"");
    dotsWrap.appendChild(d);
  }
}
renderDots();

function goTo(n){
  if(n<1||n>total) return;
  pages.forEach((pg,idx)=>{
    const p=idx+1;
    if(p<=n) pg.classList.add("flipped");
    else pg.classList.remove("flipped");
  });
  current=n;
  renderDots();
  syncButtons();
}
function next(){if(current<total) goTo(current+1);}
function prev(){if(current>1) goTo(current-1);}
function syncButtons(){
  btnPrev.disabled=current<=1;
  btnNext.disabled=current>=total;
}

const btnPrev=document.getElementById("prev");
const btnNext=document.getElementById("next");
btnPrev.addEventListener("click",e=>{e.stopPropagation();prev();});
btnNext.addEventListener("click",e=>{e.stopPropagation();next();});

// klavye
document.addEventListener("keydown",e=>{
  if(!card.classList.contains("open")) return;
  if(e.key==="ArrowRight") next();
  if(e.key==="ArrowLeft") prev();
});
