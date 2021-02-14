/*una agencia de viajes nos piden informar si hacemos viajes a lugares 
según la estación del año estemos, 
informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche
*/


function mostrar()
{	let destino;
	let estacion;


	estacion = document.getElementById("txtIdEstacion").value;

	destino = document.getElementById("txtIdDestino").value;
	
	switch(estacion){
		case "Invierno":
			if(destino=="Bariloche"){
				alert(`Se viaja a ${destino}`);
			} else{
				alert(`No se viaja a ${destino}`);
			}
			break;
		case "Verano":
			if (destino=="Mar del plata" || destino=="Cataratas"){
				alert(`Se viaja a ${destino}`);
			} else {
				alert(`No se viaja a ${destino}`);
			}
			break;
		case "Primavera":
			if(destino!= "Bariloche"){
				alert(`Se viaja a ${destino}`);
			} else {
				alert(`No se viaja a ${destino}`);
			}
			break;
		default:
			alert(`Se viaja a ${destino}`);
	
	}
	




}
/* Estrategia de resolucion
1- definir variables
2- relevar los datos de entrada (destino/estacion)
3- definir un ambito para cada estacion
4- dentro de cada ambito del punto anterior definir un ambito para cada destino
5- verificar si se viaja o no
6- informar
 */
