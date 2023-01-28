const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navclose = document.getElementById("navclose");

navBtn.addEventListener("click", () => {navbar.classList.add("showNav")});
navclose.addEventListener("click", () => {navbar.classList.add("showNav")});