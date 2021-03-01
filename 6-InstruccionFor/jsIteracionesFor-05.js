//al presionar el botón repetir el pedido de número hasta que ingresemos el 9

function mostrar()
{
	let numero;
	for(	;	;	){
	//for(respuesta = "si"; respuesta == "si"	; respuesta = prompt("Quiere ingresar otro numero?")){
		numero = parseInt(prompt("Ingrese un numero: "));

		while(isNaN(numero)){
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
		}
		if (numero == 9){
			break;
		}
	}


}
/*
	do{
		numero = parseInt(prompt("Ingrese un numero: "));
		if (isNaN(numero)){
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
		}
		if(numero == 9){
			break;
		}


		respuesta = prompt("Quiere seguir ingresando un numero?");
	}while(respuesta == "si");

*/
