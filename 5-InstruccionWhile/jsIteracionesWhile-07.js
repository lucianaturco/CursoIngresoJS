/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.*/

function mostrar() {
	let acumulador = 0;
	let contador = 0;
	let numeroIngresado;
	let respuesta;

	do {
		numeroIngresado = parseInt(prompt("Ingrese un número"));
		while (isNaN(numeroIngresado)) {
			numeroIngresado = parseInt(prompt("Eso no es un numero. Ingrese un numero"));
		}
		acumulador += numeroIngresado;
		contador++;

		respuesta = prompt("Quiere ingresar otro número?");
	} while (respuesta == "si");

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador;

}

/*
function mostrar()
{

	let numeroIngresado;
	let respuesta = "si"
	let acumulador = 0;
	let contador = 0;


	while(respuesta == "si"){

		numeroIngresado = parseFloat(prompt("Ingrese un número: "));
		acumulador += numeroIngresado
		contador ++;
		respuesta = prompt("Quiere ingresar otro número?");
	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = (acumulador/contador).toFixed(2);


}


/* let numeroIngresado;
let acumulador = 0;
let contador = 0;
let respuesta;

do{

	numeroIngresado = parseFloat(prompt("Ingrese un número"));

	acumulador += numeroIngresado;
	contador ++;

	respuesta = prompt("Quiere ingresar otro número? ");

}while(respuesta == "si");

document.getElementById("txtIdSuma").value = acumulador;
document.getElementById("txtIdPromedio").value = (acumulador/contador).toFixed(2);
*/