/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censo
nos pide realizar una carga de datos validada e 
ingresada por ventanas emergentes solamente 
(para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	let edad;
	//let contadorEdad = 0;
	//let acumuladorEdad = 0;
	let sexo;
	let estadoCivil;
	let sueldoBruto;
	let legajo;
	let nacionalidad;
	let respuesta = "si";

	while(respuesta == "si"){
		//validar la edad
		edad = parseInt(prompt("Ingrese su edad"));
		console.log(edad);

		while(edad<18 || edad>91){
		edad = prompt("Edad invalida. Reingrese edad entre 18 y 90 años.");
		} 
		/*acumuladorEdad += edad
		console.log(acumuladorEdad);
		contadorEdad++;
		console.log(contadorEdad);
		*/
		sexo = prompt("Ingrese sexo M o F");
		console.log(sexo);

		while(sexo != "m" || sexo != "f"){
		sexo = prompt("Sexo invalido. Reingrese sexo M o F");
		}
		
		estadoCivil = prompt("Ingrese su estado civil");
		console.log(estadoCivil);

		while(estadoCivil!="Soltero" || estadoCivil!="Casado" || estadoCivil!="Divorciado" || estadoCivil!="Viudo"){
			estadoCivil = prompt("Estado civil invalido. Reingrese dato");
		}
		

		//modificación de la variable de control del while.
	respuesta = prompt("Quiere comenzar otro ingreso?")
	} 

	//FUERA DEL WHILE 
	//mostrar los "promedios"

	//edad
	
	document.getElementById("txtIdEdad").value = edad;
	



}
