var pResultado = document.querySelector('#resultado');

var btnNumero = document.querySelector('#btnNumero');

btnNumero.addEventListener('click', evalNumero);

var opciones = document.querySelector('#opciones');
opciones.addEventListener('change', evalOpcion);

var inputNumero = document.querySelector('numero');

function evalOpcion(){
    var numero = Number(inputNumero.value);
    var opcion = selectOpciones.value;

    switch(opcion) {
        case 'mitad':
        pResultado.textContent = 'la mitad es' + (numero/2);
        break;
        case 'cuadrado':
        pResultado.textContent = 'cuadrado es' + (numero*numero);
        break;
        case 'par':
        if(numero*2 === 0){
            pResultado.textContent = 'es par';

        }
        else{
            pResultado.textContent = 'es impar'
        }
        break;
        default:
        pResultado.textContent = '';



    }
}



function evalOpcion(){
    var numeros = Number(inputNumero.value);
    var opcion= (opciones.value);
}



if(opcion === 'mitad'){
    pResultado.textContent = "es la mitad" + (numeros/2);

}else if(opcion === "cuadrado"){
    pResultado.textContent = ' el cuadrado  es' + (numero*numeros);

}else if(opcion === 'par'){
    if(numeros*2 === 0){
        pResultado.textContent = 'el numero es par';
    }else {
        pResultado.textContent = 'el numero es impar';
    }
    
}



function evalNumero(){
    var inputNumero = document.querySelector('#numero');
    var numero = Number(inputNumero.value);

    if(numero > 0) {
        pResultado.textContent = 'el numero ' + numero + ' es positivo ';

    }else if (numero < 0){
        pResultado.textContent = 'el numero ' + numero + ' es negativo ';
    }
    else {
        pResultado.textContent = "escribiste el numero cero ";
    }
}