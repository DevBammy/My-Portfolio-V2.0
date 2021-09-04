const nav = document.querySelector(".nav");
const burger = document.querySelector(".toggle");

burger.addEventListener('click', () => {
    nav.classList.toggle('show');
});