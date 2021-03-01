/*al presionar el botón 
pedir la cantidad de veces que quiero repetir el mensaje
 "Hola UTN FRA"
*/

function mostrar()
{	
	let cantidad;

	cantidad = parseInt(prompt("Ingrese un numero: "));

	for(let i = 0; i<cantidad; i++){
		console.log ("Hola UTN FRA");
	}

}
	