//al presionar el botón pedir un número. 
//Informar si el numero es PRIMO o no.

function mostrar()
{
	let numero;
	let contadorDivisores = 0;

	numero = parseInt(prompt("Ingrese un numero:"));

	while(isNaN(numero)){
		numero = parseInt(prompt("Esto no es un numero. Ingrese un numero:"));
	}
	
	for(let i=2	;i<numero ;i++){
		if(numero % i == 0){
		contadorDivisores++;
		}
	}

	if(contadorDivisores != 0 || numero<=1){
		alert(numero + " no es primo.");
	} else {
		alert(numero + " es primo");
	}




}