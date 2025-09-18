// tıkla-dön
function flipCard(){
  document.getElementById("card").classList.toggle("is-flipped");
}

// sayaç (9 Aralık 2024)
const startDate = new Date("2024-12-09T00:00:00");

function updateCounter(){
  const now = new Date();
  const diff = now - startDate;
  const days = Math.floor(diff / (1000*60*60*24));
  const el = document.getElementById("counter");
  if(el){
    el.textContent = `Seninle geçen gün: ${days}`;
  }
}
updateCounter();
// saat başı yenilesin (saniyelik titreme olmasın)
setInterval(updateCounter, 60*60*1000);
