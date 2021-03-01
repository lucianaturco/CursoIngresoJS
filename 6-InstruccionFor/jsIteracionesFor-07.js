/*al presionar el botón pedir un número. 

/mostrar los numeros divisores desde el 1 al número ingresado, 
y mostrar la cantidad de numeros divisores encontrados.*/

function mostrar()
{
	let numero;
	let contadorDivisores = 0;

	numero = parseInt(prompt("Ingrese un numero:"));
	while(isNaN(numero) || numero <=0){
		numero = parseInt(prompt("Error. Ingrese un numero: "));
	}
	for(let i=1	;i<=numero ;i++){
		if (numero % i == 0){
			contadorDivisores++;
			console.log(i);
		}

	}	

	console.log(`Cantidad de numero divisores encontrados: ${contadorDivisores}`);
}