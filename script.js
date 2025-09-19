const sheets = [...document.querySelectorAll(".sheet")];
const total  = sheets.length;
let current  = 1;

// Dots
const dotsWrap = document.getElementById("dots");
function renderDots(){
  dotsWrap.innerHTML = "";
  for(let i=1;i<=total;i++){
    const d = document.createElement("div");
    d.className = "dot" + (i===current ? " active" : "");
    dotsWrap.appendChild(d);
  }
}
renderDots();

function goTo(n){
  if(n<1 || n>total) return;
  sheets.forEach((sh, idx)=>{
    const pageNum = idx+1;
    if(pageNum < n) sh.classList.add("flipped");
    else sh.classList.remove("flipped");
  });
  current = n;
  renderDots();
  syncButtons();
}

function next(){ if(current < total) goTo(current+1); }
function prev(){ if(current > 1)     goTo(current-1); }

const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
btnPrev.addEventListener("click", prev);
btnNext.addEventListener("click", next);

function syncButtons(){
  btnPrev.disabled = current<=1;
  btnNext.disabled = current>=total;
}
syncButtons();

// tıklama
document.getElementById("book").addEventListener("click", (e)=>{
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  if(x < rect.width/2) prev(); else next();
});

// klavye
addEventListener("keydown", (e)=>{
  if(e.key==="ArrowRight") next();
  if(e.key==="ArrowLeft")  prev();
});

// Sayaç
const startDate = new Date("2024-12-09T00:00:00");
function updateCounter(){
  const el = document.getElementById("counter");
  if(!el) return;
  const now  = new Date();
  const diff = Math.floor((now - startDate) / (1000*60*60*24));
  el.textContent = `9 Aralık 2024'ten beri geçen gün: ${diff}`;
}
updateCounter();
setInterval(updateCounter, 60*60*1000);

goTo(1);
