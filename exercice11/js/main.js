
//var pE1 = document.createElement("p");
var bodyE1 = document.createElement("p");
var pE1= bodyE1.textContent = "Konexio";  
body.appendChild(pE1);   // ne marche pas  

/*
//Méthode Jénaïc 
function init() {                               
    var pE1 = document.createElement('p');
    pE1.textContent = 'Konexio';
    console.log(pE1);
    var bodyE1 = document.querySelector('#exercice');   //querySelector('body') > ('a') > ('#exercice') ?
    bodyE1.appendChild(pE1);
}

window.onload = init;     // fonction ajouté par méthode Jénaïc en cours > cannot read property 'appendChild' of null at init
*/
