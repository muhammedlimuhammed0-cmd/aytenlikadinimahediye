const pages = document.querySelectorAll(".page");
const dots = document.querySelectorAll(".dot");
let currentPage = 0;

function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.remove("active");
    dots[i].classList.remove("active");
    if (i === index) {
      page.classList.add("active");
      dots[i].classList.add("active");
    }
  });
}

document.getElementById("prev").addEventListener("click", () => {
  currentPage = (currentPage - 1 + pages.length) % pages.length;
  showPage(currentPage);
});

document.getElementById("next").addEventListener("click", () => {
  currentPage = (currentPage + 1) % pages.length;
  showPage(currentPage);
});
