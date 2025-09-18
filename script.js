// tek görev: karta 'open' sınıfını ekle/çıkar
const card   = document.getElementById('card');
const toggle = document.getElementById('toggle');

function flipCard(){
  card.classList.toggle('open');
}
toggle.addEventListener('click', flipCard);
// karta da tıklama kalsın (istenirse)
card.addEventListener('click', flipCard);

// sayaç (9 Aralık 2024)
const startDate = new Date('2024-12-09T00:00:00');

function updateCounter(){
  const el = document.getElementById('counter');
  if(!el) return;
  const now  = new Date();
  const days = Math.floor((now - startDate) / (1000*60*60*24));
  el.textContent = `Seninle geçen gün: ${days}`;
}
updateCounter();
setInterval(updateCounter, 60*60*1000); // saat başı güncelle
