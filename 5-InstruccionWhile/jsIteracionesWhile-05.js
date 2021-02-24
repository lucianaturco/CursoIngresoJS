/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;

	sexo = prompt("Ingrese el sexo f/m:");
	//sexo = prompt("Ingrese el sexo f/m:").toLowerCase();
	sexo = sexo.toLowerCase();

	while(!(sexo == 'f' || sexo == 'm')){
		sexo = prompt("Dato no válido. Ingrese nuevamente el sexo. f o m");
		//sexo = prompt("Dato no válido. Ingrese nuevamente el sexo. f o m").toLowerCase();
		sexo = sexo.toLowerCase();
	}

	document.getElementById("txtIdSexo").value = sexo;
}