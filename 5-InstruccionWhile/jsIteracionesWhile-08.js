/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

function mostrar(){
	let acumuladorPositivos = 0;
	let acumuladorNegativos = 1;
	let numero;
	let respuesta;
	let flag = 0;

	do{
		numero = parseInt(prompt("Ingrese un número"));
			while(isNaN(numero)){
				numero = parseInt(prompt("Eso no es un numero. Reingrese un numero"));
			}
		if(numero>=0){
			acumuladorPositivos += numero;
		} else {
			flag = 1;
			acumuladorNegativos *= numero;
			
		}
		if (flag == 0){
			acumuladorNegativos = 0;
		}
		respuesta = prompt("Quiere ingresar otro número?");
	} while (respuesta == "si");

	document.getElementById("txtIdSuma").value = acumuladorPositivos;
	document.getElementById("txtIdProducto").value = acumuladorNegativos;

}


/*
function mostrar()
{ 
	//declaracion de la variable
	let numeroIngresado;
	let acumuladorPositivos = 0;
	let acumuladorNegativos = 1;
	let respuesta;
	let flag = 0

	// debemos armar un bucle del tipo miemtras el usuario quiera (do while)
	do{

		numeroIngresado = parseInt(prompt("Ingrese un número:"));
		// pedir y guardar los numeros ---> dentro del bucle
		
		//analizar el signo de cada numero
		//acumulamos el numero en el acumulador correspondiente
		if(numeroIngresado >= 0){
			acumuladorPositivos += numeroIngresado;

		}else{
			flag = 1
			acumuladorNegativos *= numeroIngresado;
		}
				
		respuesta = prompt("Quiere ingresar otro número?");
	}while(respuesta == "si");
		//mostrar resultados ---> fuera del bucle
		
	document.getElementById("txtIdSuma").value = acumuladorPositivos;
	
	if (flag == 0){
		acumuladorNegativos = 0;
	}
	document.getElementById("txtIdProducto").value = acumuladorNegativos;

}
