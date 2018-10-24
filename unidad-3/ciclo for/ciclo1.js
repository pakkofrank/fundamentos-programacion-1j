var btnUno = document.querySelector('#btn1');
btnUno.addEventListener('click', ejemplo1);

var btnDos = document.querySelector('#btn2');
btnDos.addEventListener('click', ejemplo2);


var btnTres = document.querySelector('#btn3');
btnTres.addEventListener('click', ejemplo3); 


var btnCuatro = document.querySelector('#btn4');
btnCuatro.addEventListener('click', ejemplo4); 


var btnCinco = document.querySelector('#btn5');
btnCinco.addEventListener('click', ejemplo5);



var lienzo = document.querySelector('#lienzo');

var numeros = document.querySelector('#numero');

var resultados = document.querySelector('#resultado');

var opc = document.querySelector('#opciones');


function ejemplo5 (){
    var c = lienzo.getContext('2d');

    var i = 0;

    do{
        var x = Math.trunc((Math.random() *501) + 1);
var y = Math.trunc((Math.random() *501) + 1);

var r = Math.trunc((Math.random() *50)
+ 1);


c.beginPath();
c.fillStyle = 'rgba(0,255,0,0.5)';
c.arc(x, y, r, 0, 2*Math.PI);
c.fill();
i++;
     } while(i < 50);
}


function ejemplo1 (){
    for(i=0; i<=Number(numeros.value); i++){
        var row = resultados.insertRow(-1);
        var cell = row.insertCell(0);
        cell.innerHTML=i;
    }
}

function ejemplo2 (){
    var total = Number(numeros.value);
    for(i=1; i<=total; i++){
        var row = resultados.insertRow(-1);
        var cell = row.insertCell(0);
        cell.innerHTML=prompt('escribe un numero: ('+i+'/'+total+')');

    }

}

function ejemplo3 (){
    var total = Number(numeros.value);
    var i=0;
    while (i<total) {
        var row = resultados.insertRow(-1);
        var cell = row.insertCell(0);
        cell.innerHTML=i;
        i++;
        
        
    }


}

function ejemplo4(){
    var total = Number(numeros.value);
    while(0<total){
        var op = document.createElement('option');
        op.text = total;
        opc.add(op);
        total--;
    }
}