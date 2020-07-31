//Méthode par moi
document.addEventListener("click", testButton);
function testButton(event){
    var heading1E1 = document.querySelector("h1");
    heading1E1.style.color = "red"; 
} 

/*Méthode par Jénaïc fait en cours
var heading1E1 = null;
function onBtoClicked() {
    heading1E1.style.colr = 'red';
}
function init() {
    heading1E1 = document.querySelector('button');
    btnE1.addEventListener('click', onBtoClicked);
}

window.onload = init;

 
document.querySelector('button').onclick = function() {
    document.querySelector('h1').style.color = 'red';
}*/