"use strict";

const menuToggle = document.querySelector(".menuToggle");
const nav = document.querySelector(".nav__desktop");

menuToggle.onclick = function () {
  nav.classList.toggle("open");
};

const list = document.querySelectorAll(".desktop-list");
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));
