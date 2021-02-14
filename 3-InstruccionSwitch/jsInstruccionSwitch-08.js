//Al seleccionar un destino informar si hace FRIO o CALOR en ese destino

function mostrar() {
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch (destino) {
		case "Bariloche":
		case "Ushuaia":
			alert("En ese destino hace FRIO");
			break;
		default:
			alert("En ese destino hace CALOR");		
	}
}