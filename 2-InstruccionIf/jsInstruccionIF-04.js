//Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .

function mostrar() {

	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);
/*
	if (edad >= 13  &&  edad <= 17) {
			alert("La persona es adolescente")
		}
*/

		if (! (edad<13 || edad>17)){

			alert("La persona es adolescente");
		}
	}



