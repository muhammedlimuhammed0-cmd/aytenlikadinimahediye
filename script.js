// Kart açma animasyonu
function flipCard() {
  document.getElementById("card").classList.toggle("is-flipped");
}

// Sayaç - 9 Aralık 2024'ten itibaren
const startDate = new Date("2024-12-09");
function updateCounter() {
  const now = new Date();
  const diff = now - startDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("counter").innerText =
    `Seninle geçen gün: ${days} 💕`;
}
setInterval(updateCounter, 1000);
updateCounter();