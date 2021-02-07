function mostrar() {
	//Genero el número RANDOM entre 1 y 10 

	let numero;
	let maximo;
	let minimo;

	maximo = 10;
	minimo = 1;
	numero = Math.round(Math.random() * (maximo - minimo) + minimo);

	//numero=Math.round(Math.random()*9 + 1);
	alert(numero);

}