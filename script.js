document.addEventListener('DOMContentLoaded', () => {
    // Gerekli HTML elementlerini seç
    const pages = document.querySelectorAll('.page');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const dayCounterEl = document.getElementById('day-counter');

    let currentPageIndex = 0;
    const totalPages = pages.length;

    // Sayfaların doğru sırada üst üste gelmesi için z-index ayarı
    pages.forEach((page, index) => {
        page.style.zIndex = totalPages - index;
    });

    // Butonların durumunu güncelle (ilk/son sayfada pasif yap)
    function updateButtons() {
        prevBtn.disabled = currentPageIndex === 0;
        nextBtn.disabled = currentPageIndex >= totalPages - 1;
    }

    // Sonraki sayfaya git
    function goNextPage() {
        if (currentPageIndex < totalPages - 1) {
            const currentPage = pages[currentPageIndex];
            currentPage.classList.add('flipped');
            currentPageIndex++;
            updateButtons();
        }
    }

    // Önceki sayfaya git
    function goPrevPage() {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            const previousPage = pages[currentPageIndex];
            previousPage.classList.remove('flipped');
            updateButtons();
        }
    }
    
    // Gün sayacını hesapla ve güncelle
    function updateDayCounter() {
        const startDate = new Date('2024-12-09T00:00:00');
        const today = new Date();
        
        // Zaman farkını milisaniye olarak al
        const timeDifference = today.getTime() - startDate.getTime();
        
        // Milisaniyeyi güne çevir ve 1 ekleyerek kaçıncı gün olduğunu bul
        const dayCount = Math.floor(timeDifference / (1000 * 3600 * 24)) + 1;
        
        if (dayCounterEl) {
            dayCounterEl.innerHTML = `Bugün bizim <br> ${dayCount}. günümüz ❤️`;
        }
    }

    // Butonlara tıklama olaylarını ekle
    prevBtn.addEventListener('click', goPrevPage);
    nextBtn.addEventListener('click', goNextPage);

    // Başlangıçta fonksiyonları çağır
    updateButtons();
    updateDayCounter();
});
