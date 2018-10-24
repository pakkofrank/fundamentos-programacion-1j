/*
javascrip
elementos basicos
 */
var edad;
var numeroCuenta;
var edad = 1;
edad = 20;

var title = document.querySelector('h1');
title.addEventListener('click', updateName);

//esta es una funcion
function updateName(){
    var name= prompt('Nombre del jugador');
    title.textContent = "jugador 1: " + name;
}