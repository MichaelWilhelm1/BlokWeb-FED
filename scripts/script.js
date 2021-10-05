// JavaScript Document
var Hamburgermenu = document.querySelector(".toggle-button");
var navigatie = document.querySelector(".links");

Hamburgermenu.addEventListener("click", openmenu);

function openmenu() {
    /* 
    
    Eerste oplossing:
    if (navigatie.style.display === "none") {
        navigatie.style.display = "block";
    } else {
        navigatie.style.display = "none";
    }
*/

    navigatie.classList.toggle("active");

}

/*
Chathulp in en uit klappen
*/


Chatknop = document.querySelector("#chaticoon");
Chat = document.querySelector("#chat");

Chatknop.addEventListener("click", voorschijn);

function voorschijn() {
    Chat.classList.toggle("zichtbaar");
}