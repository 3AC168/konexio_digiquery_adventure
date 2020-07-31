window.addEventListener('load', function(){
    var heading1E1 = document.querySelector("h1");
    //heading1E1.style.color = "blue"; 
    //heading1E1.style.fontSize = "2em";  
    heading1E1.style = 'color: blue; font-size: 2em';  // ou soit ce méthode
    //heading1E1.addAttribute('style', 'color:blue', 'fontSize:2em'); // ça ne marche pas, après style ? 
})