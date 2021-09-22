// JavaScript Document
var Hamburgermenu = document.querySelector(".toggle-button");
var navigatie = document.querySelector(".links");

Hamburgermenu.addEventListener("click", openmenu);

function openmenu() {
    if (navigatie.style.display === "none") {
        navigatie.style.display = "block";
    } else {
        navigatie.style.display = "none";
    }


}