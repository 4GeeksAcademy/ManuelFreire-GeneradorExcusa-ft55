import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  
  function resultado(alojamiento) {
    let resAleatorio = Math.floor(Math.random() * alojamiento.length)
    return alojamiento[resAleatorio]
  }

window.onload = function() {
  //write your code here
  let rendered = document.getElementById("excuse");
  rendered.innerHTML = '<li>' + resultado(who) + ' ' + resultado(action) + ' ' + resultado(what) + ' ' + resultado(when) + '</li>';
};
  
