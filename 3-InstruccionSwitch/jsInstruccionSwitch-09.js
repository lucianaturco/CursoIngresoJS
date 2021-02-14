/*Una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar 
para poder calcular el precio final

en Invierno: 
bariloche tiene un aumento del 20% 
cataratas y Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% 
cataratas y Cordoba tiene un aumento del 10% 
Mar del plata tiene un aumento del 20%

en Otoño y Primavera: 
bariloche tiene un aumento del 10% 
cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% y 
Cordoba tiene el precio sin descuento*/

function mostrar() {
	let tarifaBase = 15000;
	let aumento = 0;
	let descuento = 0;
	let estacion;
	let destino;
	let precioConAumento;
	let precioConDescuento;
	let precioFinal;


	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	if (estacion == "Invierno") {
		if (destino == "Bariloche") {
			aumento = 0.2;
		} else {
			if (destino == "Mar del plata") {
				descuento = 0.2;
			} else {
				descuento = 0.1;
			}
		}
	} else {
		if (estacion == "Verano") {
			if (destino == "Bariloche") {
				descuento = 0.2;
			} else {
				if (destino == "Mar del plata") {
					aumento = 0.2;
				} else {
					aumento = 0.1;
				}
			}
		}
		else {
			if (destino != "Cordoba") {
				aumento = 0.1
			} else {
				precioFinal = tarifaBase
			}
		}
	}


	precioConAumento = tarifaBase * aumento;
	console.log(precioConAumento);
	precioConDescuento = tarifaBase * descuento;
	console.log(precioConDescuento);
	precioFinal = tarifaBase + precioConAumento - precioConDescuento;
	console.log(precioFinal);

	alert(`Si el destino es ${destino} en ${estacion}. El precio final es $${precioFinal}`);

}









/*una agencia de viajes debe sacar las tarifas de los viajes ,
se cobra $15.000 por cada estadia como base,
se pide el ingreso de una estacion del año y localidad para vacacionar
para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20%
cataratas y Cordoba tiene un descuento del 10%
Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20%
cataratas y Cordoba tiene un aumento del 10%
Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10%
cataratas tiene un aumento del 10%
Mar del plata tiene un aumento del 10% y
Cordoba tiene el precio sin descuento


function mostrar() {
	let estacion;
	let destino;
	let aumento;
	let descuento;
	let precioBase = 15000;
	let precioFinal;

	estacion = document.getElementById("txtIdEstacion").value;

	destino = document.getElementById("txtIdDestino").value;


	switch (estacion) {
		case "Invierno":
			//console.log("Invierno");
			if (destino == "Bariloche") {
				console.log("IB");
				aumento = precioBase * 20 /100;
				precioFinal = precioBase + aumento;
			} else if (destino == "Mar del plata") {
				console.log("IMP");
				descuento = precioBase *20 /100;
				precioFinal = precioBase - descuento;
			} else {
				console.log("ICC");
				descuento = precioBase* 10/100;
				precioFinal = precioBase - descuento;
			}
			break;
		case "Verano":
			//console.log("Verano");
			if (destino == "Bariloche") {
				console.log("VB");
				descuento = precioBase * 20/100;
				precioFinal = precioBase - descuento;
			} else if (destino == "Mar del plata") {
				console.log("VMP");
				aumento = precioBase * 20 /100;
				precioFinal = precioBase + aumento;
			} else {
				console.log("VCC");
				aumento = precioBase * 10 /100;
				precioFinal = precioBase + aumento;
			}
			break;
		case "Otoño":
		case "Primavera":
			//console.log("O/P");
			if (destino == "Cordoba"){
				console.log("op cordoba");
				precioFinal = precioBase;
			} else{
				console.log("op resto no cordoba")
				aumento = precioBase * 10/100;
				precioFinal = precioBase + aumento
			}
			break;
	}
	alert(`El precio final es $${precioFinal}`);

}
/* Estrategia de resolucion
1- definir variables
2- relevar los datos de entrada (destino/estacion)
3- definir un ambito para cada estacion
4- dentro de cada ambito del punto anterior definir un ambito para cada destino
5- calculamos el precio final
6- informamos el precio final */
