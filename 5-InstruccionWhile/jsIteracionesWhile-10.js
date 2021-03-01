/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{	
	//declarar variables 
	let numeroIngresado;
	let respuesta;
	let acumuladorNegativos = 0;
	let acumuladorPositivo = 0;
	let contadorPositivos = 0;
	let contadorNegativos = 0;
	let contadorCeros = 0;
	let contadorPares = 0;
	let promedioPositivos = 0;
	let promedioNegativos = 0;
	let diferencia;
	// generar un bucle del tipo mientras el usuario quiera ( do while)
	// dentro del bucle......
	//pedir 1 numero
	//analizar el signo del numero y actuar en consecuencia
	//analizar si es par 
	do{ 
		 numeroIngresado = parseInt(prompt("Ingrese un número: "));
		 while(isNaN(numeroIngresado)){
			numeroIngresado = parseInt(prompt("Error. Ingrese un número: "));
		 }
		
		if(numeroIngresado < 0){
			acumuladorNegativos += numeroIngresado;
			contadorNegativos ++;
		}else if(numeroIngresado == 0){
			contadorCeros ++;
		}else{
			acumuladorPositivo += numeroIngresado;
			contadorPositivos ++;
		}
		
		if (numeroIngresado % 2 == 0){
			contadorPares ++;
		} 

		respuesta = prompt("Quiere ingresar otro número?");
	}while(respuesta == "si");
	//despues del bucle
	//hacer los calculos que necesitan los datos conseguidos dentro del bucle

	//mostar los resultados
	
	console.log("Suma de los negativos: " + acumuladorNegativos);
	console.log("Suma de los positivos: "+ acumuladorPositivo);
	console.log("Cantidad de positivos: "+ contadorPositivos);
	console.log("Cantidad de negativos: " +contadorNegativos);
	console.log("Cantidad de ceros: " + contadorCeros);
	console.log("Cantidad de números pares: " + contadorPares);

	if (contadorPositivos > 0){
	promedioPositivos = acumuladorPositivo / contadorPositivos;
	console.log("Promedio de positivos: " + promedioPositivos);
	}
	if (contadorNegativos > 0){
	promedioNegativos = acumuladorNegativos / contadorNegativos;
	console.log("Promedios de negativos: " + promedioNegativos);
	}

	diferencia = contadorPositivos - contadorNegativos;
	console.log("Diferencia entre positivos y negativos: " + diferencia);


}