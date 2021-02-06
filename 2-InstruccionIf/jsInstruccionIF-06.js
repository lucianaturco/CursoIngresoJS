/*Al ingresar una edad debemos informar si la persona 
es mayor de edad (mas de 18 años) 
o adolescente (entre 13 y 17 años) 
o niño (menor a 13 años).
*/

function mostrar() {
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	/*
	
	if (edad >= 18) {

		alert("La persona es mayor de edad");
	}

	else {

		if (edad >= 13 && edad < 18) {

			alert("La persona es adolescente");
		}

		else {

			alert("La persona es un niño");
		}
	}
*/

if(edad>=18){
	alert("es adulto");
}
else if(edad>13 && edad<18){
	alert("es adolescente");
}
else{
	alert("es niño");
}
}