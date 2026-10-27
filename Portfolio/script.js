let menuToggle = document.querySelector(".menu-toggle");
let mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
});