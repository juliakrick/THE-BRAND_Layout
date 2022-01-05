'use strict'

const burger = document.querySelector(".overlay__open");
const closebtn = document.querySelector(".overlay__close-button");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".overlay__nav");


let isOpen = false;
burger.addEventListener("click", () => {
    isOpen = !isOpen;
    overlay.classList.toggle("open");
    if (isOpen) {
        document.body.style.overflow = "hidden";
        document.body.style.height = "100vh"
        document.body.parentNode.style.overflowY = "scroll"
    }
    if (!isOpen) {
        document.body.style.overflow = null;
        document.body.style.height = null
        document.body.parentNode.style.overflowY = null
    }
});
closebtn.addEventListener("click", () => {
    isOpen = !isOpen;
    overlay.classList.remove("open");
    document.body.style.overflow = null;
});
overlay.addEventListener("click", () => {
    isOpen = !isOpen;
    overlay.classList.remove("open");
    document.body.style.overflow = null;
});




