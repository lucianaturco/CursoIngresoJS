/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9 inclusive.");
	
	if (numeroIngresado<0 || numeroIngresado>9){
		alert ("El número ingresado no está dentro del rango pedido");
	}
}
