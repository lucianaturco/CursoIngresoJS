/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	
	//declarar las variables
	let numeroIngresado;
	let maximo;
	let minimo;
	let respuesta;
	let flag = 0;
	
	//armo un bucle del tipo mientras el usuario quiera (do while)
	do{
	
		//pido un numero
		numeroIngresado =parseInt(prompt("Ingrese un numero :"));
		// debo reconocer si estoy pidiendo por primera vez.
		if (flag == 0){
			//si es asi inicializo max y min
			maximo = numeroIngresado;
			minimo = numeroIngresado;
			flag = 1;
		}
		//caso contrario me fijo si tengo un nuevo max o min
	// y los actualizo de ser necesario
	if(numeroIngresado>maximo){
		maximo = numeroIngresado;
	}
	else if(numeroIngresado<minimo){
		minimo = numeroIngresado;
	}
	
	/* achicar el codigo: 
	if(flag == 0  ||  numeroIngresado>maximo){
		maximo = numeroIngresado;
	}
	if(flag == 0) || numeroIngresado<minimo){
		minimo = numeroIngresado;
		flag = 1;
	}
	*/
	respuesta = prompt("Quiere ingresar otro numero?")
	
} while(respuesta == "si");

	//despues del bucle.....
	
	//mostrar info
	
	document.getElementById("txtIdMaximo").value = maximo
	document.getElementById("txtIdMinimo").value = minimo
}
/*	
	let numero;
	let maximo;
	let minimo;
	let respuesta;
	let flag = 0

	do{
		numero = parseInt(prompt("Ingrese un numero: "));
	
		if(flag == 0){
			maximo = numero;
			minimo = numero;
			flag = 1
		}else{
			if (numero > maximo){
				maximo = numero;
			} else if (numero < minimo){
				minimo = numero;
			}
		}
		
		respuesta = prompt("Quiere ingresar otro numero?");
	} while(respuesta == "si");
	
	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;
	

*/