const burger = document.querySelector(".burger-menu");
const menu = document.querySelector(".header-nav");
const xmarc = document.querySelector(".xmarc");

burger.addEventListener("click", () => {
    menu.classList.add("show");
    xmarc.style.display = "block";
    burger.classList.toggle("none");
});


xmarc.addEventListener("click", () => {
    menu.classList.remove("show");
    xmarc.style.display = "none";
    burger.classList.toggle("block");
});
