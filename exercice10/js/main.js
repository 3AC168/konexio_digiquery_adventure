/*
var spanE1 = document.querySelector("span");    // on demande faire avec querySelector, cela ne marche pas 
spanE1.textContent = "konexio"; 
console.log(spanE1); */

function init() {                              // fonction ajouté par méthode Jénaïc en cours
    var spanE1 = document.createElement("span");  // je fais seulement ces 3 lignes, il marche aussi  
    spanE1.textContent = "Konexio"; 
    console.log(spanE1);
}                                                       
window.onload = init;                         // fonction ajouté par méthode Jénaïc en cours

/*
var spanE1 = document.querySelector("span");
spanE1.textContent = "konexio"; 
console.log(spanE1); */
