window.onload = function () {
  document.querySelector(".burger").addEventListener("click", function () {
    document.querySelector(".mobile-menu").classList.toggle("open");
    document.querySelector(".burger").classList.toggle("open");
  });
};
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);
    document.querySelector(".mobile-menu").classList.remove("open");
    document.querySelector(".burger").classList.remove("open");
    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
