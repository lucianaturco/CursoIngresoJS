//al presionar el botón pedir un número. 
//mostrar los numeros pares desde el 1 al número ingresado, 
//y mostrar la cantidad de numeros pares encontrados.

function mostrar()
{
	let numero; 
	let contadorPares = 0;
	
	numero = parseInt(prompt("Ingrese un numero: "));
	while(isNaN(numero) || numero <=0){
		numero = parseInt(prompt("Error. Ingrese un numero: "));
	}
	for(let i=1	;i <= numero; i++){
		if(i % 2 == 0){
			contadorPares++;
			console.log(i);
		}
	}
	console.log(`Cantidad de numeros pares encontrados: ${contadorPares}`);
}
