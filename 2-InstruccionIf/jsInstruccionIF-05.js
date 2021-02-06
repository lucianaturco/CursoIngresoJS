//Al ingresar una edad solo debemos informar si la persona NO es adolescente.


function mostrar(){
	let edad;

	edad=parseInt(document.getElementById("txtIdEdad").value);

	if(edad<13 || edad>17){

		alert("La persona no es adolescente");
	}


}
