let burger = document.querySelector(".burger");
let close = document.querySelector(".close-burger");
let nav = document.querySelector("nav");

burger.addEventListener("click", function () {
    this.style.display = "none";
    close.style.display = "initial";
    nav.style.display = "flex";
});

close.addEventListener("click", function () {
    this.style.display = "none";
    burger.style.display = "initial";
    nav.style.display = "none";
});