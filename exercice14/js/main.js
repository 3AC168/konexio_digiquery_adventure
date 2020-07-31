
document.addEventListener("click", testButton); 
function testButton(event) {
    var heading1E1 = document.querySelector("h1");
    heading1E1.addClassList(".hightlight");  // addClassList is not a function, ne marche pas
    console.log(heading1E1);
}

/*
//Méthode Jénaïc fait en cours
window.addEventListener('load', function() {
    var btnE1 = document.querySelector('button');
    btnE1.addEventListener('click', function() {
        var heading1E1 = document.querySelector('h1');
        heading1E1.classList.add('hightlight');
    });
}); 

//
document.querySelector('button').onclick = function(){
    document.querySelector('h1').classList.add('hightlight');
}*/