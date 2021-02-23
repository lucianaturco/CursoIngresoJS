/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;

	sexoIngresado = prompt("Ingrese el sexo");

	while(!(sexoIngresado == "f" || sexoIngresado == "m")){
		sexoIngresado = prompt("Dato no válido. Ingrese nuevamente el sexo. f o m");
	}

	document.getElementById("txtIdSexo").value = sexoIngresado;
}