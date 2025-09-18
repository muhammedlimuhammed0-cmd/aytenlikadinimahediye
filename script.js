// Sadece karta tek listener: çift tetiklenme yok
const card = document.getElementById('card');
card.addEventListener('click', () => {
  card.classList.toggle('open');
});

// Sayaç (9 Aralık 2024)
const startDate = new Date('2024-12-09T00:00:00');
function updateCounter(){
  const el = document.getElementById('counter');
  if(!el) return;
  const days = Math.floor((Date.now() - startDate) / (1000*60*60*24));
  el.textContent = `Seninle geçen gün: ${days}`;
}
updateCounter();
setInterval(updateCounter, 60*60*1000);
