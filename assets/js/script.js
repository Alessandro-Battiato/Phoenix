"use strict";

const menuToggle = document.querySelector(".menuToggle");
const nav = document.querySelector(".nav__desktop");

menuToggle.onclick = function () {
  nav.classList.toggle("open"); //IL FAMOSO INTERRUTTORE
};

const list = document.querySelectorAll(".desktop-list");
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active"); /*CREDO D'AVER CAPITO IN SOSTANZA
  C'è LA CLASSE ACTIVE PER LA HOME CHE è ILLUMINATA MA QUANDO CLICCHI SU UN QUALSIASI
  LA FUNZIONE VIENE CHIAMATA E TOGLIE LA CLASSE ATTIVA AD OGNUNO MA POI RIMETTE LA
  CLASSE ATTIVA SOLAMENTE A THIS OVVERO LETTERALMENTE L'UNICO LIST SUL QUALE HAI CLICCATO*/
}
list.forEach((item) => item.addEventListener("click", activeLink));
