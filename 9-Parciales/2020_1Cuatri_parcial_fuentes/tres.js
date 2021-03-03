/*En el ingreso a un viaje en avion nos solicitan 
nombre , 
edad, 
sexo("f" o "m") y 
estado civil("soltero", "casado" o "viudo")y 
temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/


function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let respuesta;
	let tempMaxima;
	let nombreMaxTemp;
	let promedioEdadSolteros;

	let flag = 1
	let contadorViudoMayor = 0;
	//let contadorViudosHombres = 0;
	let contadorSolterosHombres = 0;
	let contHombresSyV = 0;
	let contadorTerceraEdad = 0;
	let acumuladorSolteros = 0;

	do{

		nombre = prompt("Ingrese el nombre:");
			while(isNaN(nombre)== 0){
				nombre = prompt("Error. Ingrese el nombre:");
			}
		
		edad = parseInt(prompt("Ingrese la edad: "));
			while(isNaN(edad) || edad <= 0){
				edad = parseInt(prompt("Error. Ingrese la edad: "));
			}
		
		sexo = prompt("Ingrese el sexo f/m:");
			while(isNaN(sexo) == 0 || sexo !='f' && sexo!= 'm'){
				sexo = prompt("Error. Ingrese el sexo f/m:");
			}
		
		estadoCivil = prompt("Ingrese el estado civil soltero/casado/viudo :");
			while(isNaN(estadoCivil) == 0 || estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo" ){
				estadoCivil = prompt("Error. Ingrese el estado civil soltero/casado/viudo :");
			}

		temperatura = parseFloat(prompt("Ingrse la temperatura corporal:"));
			while(isNaN(temperatura) || temperatura < 35 ||	temperatura > 42){
				temperatura = parseFloat(prompt("Error. Ingrse la temperatura corporal:"));
			}


		if(flag	|| temperatura > tempMaxima){
			tempMaxima = temperatura;
			nombreMaxTemp = nombre;
			flag = 0;
		}

		if (edad >= 18 && estadoCivil == "viudo"){
		contadorViudoMayor++;
		}
	
		if (sexo == 'm' && (estadoCivil == "soltero"	|| estadoCivil == "viudo")){
			//if (sexo == 'm' && estadoCivil != "casado")	
		contHombresSyV ++;
	}




/*
		switch(estadoCivil){
			case "viudo":
				if(edad >= 18){
					contadorViudoMayor++;
				}
				if(sexo == 'm'){
					contadorViudosHombres++;
				}
				break;
			case "soltero":
				if(sexo == 'm'){
					contadorSolterosHombres++;
					acumuladorSolteros += edad;
				}
			break;
			case "casado":
			break;
		}
*/
		if (edad > 60 && temperatura > 38){
			contadorTerceraEdad++;
		}
		if(sexo == 'm' && estadoCivil =="soltero"){
			acumuladorSolteros += edad;
			contadorSolterosHombres++;
		}


		respuesta = prompt("Quiere ingresar datos de otro pasajero? s/n");
	}while(respuesta == 's');



	console.log(`El nombre de la persona con mas temperatura: ${nombreMaxTemp}`);
	console.log(`Mayores de edad estan viudos: ${contadorViudoMayor} `);
	
	console.log(`Cantidad de hombres que hay solteros o viudos: ${contHombresSyV}`);

	console.log(`Personas de la tercera edad que tienen mas de 38 de temperatura: ${contadorTerceraEdad}`);

	if(contadorSolterosHombres != 0){
	promedioEdadSolteros = acumuladorSolteros / contadorSolterosHombres;
	console.log(`El promedio de edad entre los hombres solteros: ${promedioEdadSolteros}`);
	} else {
		console.log("No se ingresaron hombres solteros");
	}






}

