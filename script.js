// ---- Basic book engine ----
const sheets = Array.from(document.querySelectorAll('.sheet'));
const book   = document.getElementById('book');
const total  = sheets.length;
let current  = 1; // 1..total

// Dots renderer
const dotsWrap = document.getElementById('dots');
function renderDots(){
  dotsWrap.innerHTML = '';
  for(let i=1;i<=total;i++){
    const d = document.createElement('div');
    d.className = 'dot' + (i === current ? ' active' : '');
    dotsWrap.appendChild(d);
  }
}
renderDots();

// goTo page n (1..total)
function goTo(n){
  if(n < 1) n = 1;
  if(n > total) n = total;
  sheets.forEach((sh, idx) => {
    const pageNum = idx + 1;
    if(pageNum < n) sh.classList.add('flipped');
    else sh.classList.remove('flipped');
  });
  current = n;
  renderDots();
  syncButtons();
}

// next / prev
function next(){ if(current < total) goTo(current + 1); }
function prev(){ if(current > 1) goTo(current - 1); }

// Buttons
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');
btnPrev.addEventListener('click', (e)=>{ e.stopPropagation(); prev(); });
btnNext.addEventListener('click', (e)=>{ e.stopPropagation(); next(); });

function syncButtons(){
  btnPrev.disabled = current <= 1;
  btnNext.disabled = current >= total;
}
syncButtons();

// Click on book: left half -> prev, right half -> next
book.addEventListener('click', (e)=>{
  // ignore clicks on nav
  if(e.target.closest('.nav')) return;
  const rect = book.getBoundingClientRect();
  const x = e.clientX - rect.left;
  if(x < rect.width * 0.46) prev(); else next();
});

// keyboard arrows
window.addEventListener('keydown', (e)=>{
  if(e.key === 'ArrowRight') next();
  if(e.key === 'ArrowLeft') prev();
});

// prevent double triggers: ensure only one handler toggles sheets (we're not toggling open/close, using goTo)

// ---- Day counter (since Dec 9, 2024 local midnight) ----
const startDate = new Date(2024, 11, 9, 0, 0, 0); // month is 0-indexed: 11 = December
function updateCounter(){
  const el = document.getElementById('counter');
  if(!el) return;
  const now = new Date();
  // compute in local time by clearing times to local midnight boundaries:
  const msPerDay = 1000*60*60*24;
  const diffMs = now.setHours(0,0,0,0) - startDate.getTime();
  const days = Math.floor(diffMs / msPerDay);
  el.textContent = `9 Aralık 2024'ten bu yana geçen gün: ${days} gün`;
}
updateCounter();
// update hourly just in case
setInterval(updateCounter, 60*60*1000);

// initial page
goTo(1);
