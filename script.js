document.addEventListener('DOMContentLoaded', () => {
    const book = document.querySelector('.book');
    const pages = document.querySelectorAll('.page');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const dayCounterEl = document.getElementById('day-counter');

    let currentPageIndex = 0;
    const totalPages = pages.length;

    // Set initial z-index for pages
    pages.forEach((page, index) => {
        page.style.zIndex = totalPages - index;
    });

    // --- Page Flip Logic ---
    function updateButtons() {
        prevBtn.disabled = currentPageIndex === 0;
        nextBtn.disabled = currentPageIndex >= totalPages - 1;
    }

    function goNextPage() {
        if (currentPageIndex < totalPages -1) {
            const currentPage = pages[currentPageIndex];
            currentPage.classList.add('flipped');
            currentPageIndex++;
            updateButtons();
        }
    }

    function goPrevPage() {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            const previousPage = pages[currentPageIndex];
            previousPage.classList.remove('flipped');
            updateButtons();
        }
    }

    // Event Listeners for buttons
    prevBtn.addEventListener('click', goPrevPage);
    nextBtn.addEventListener('click', goNextPage);

    // --- Day Counter Logic ---
    function updateDayCounter() {
        const startDate = new Date('2024-12-09T00:00:00');
        const today = new Date();
        
        // To calculate the time difference of two dates
        const timeDifference = today.getTime() - startDate.getTime();
        
        // To calculate the no. of days between two dates
        const dayDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
        
        if (dayCounterEl) {
            dayCounterEl.textContent = `9 Aralık 2024’ten bu yana geçen gün: ${dayDifference} gün ❤️`;
        }
    }

    // Initial calls
    updateButtons();
    updateDayCounter();
});
