/*ingresar el nombre y los datos requeridos para calcular el IMC , 
e informar a la persona si es:
Bajo peso
Peso normal
Preobesidad
Obesidad I
Obesidad II
Obesidad III*/

/*peso en kilogramos dividido por la estatura en metros cuadrados
imc = peso(kg)/talla(m2)
function mostrar() {

	let peso;
	let estatura;
	let imc;
	let grado;

	peso = prompt("Ingrese su peso");
	peso = parseFloat(peso);

	//console.log(peso);

	estatura = prompt("Ingrese su estatura");
	estatura =parseFloat(estatura);
	//console.log(estatura);

	estatura = estatura * estatura;

	//console.log(estatura);

	imc = peso / estatura;
	imc = imc.toFixed(2);

	//console.log(imc);

	if(imc>40){
		grado = "Obesidad III";
	} else{
		if(imc>35){
			grado = "Obesidad II";
		}
		else{
			if(imc>30){
				grado="Obesidad I";
			}
			else{
				if(imc>25){
					grado="Preobesidad";
				}
				else{
					if(imc>18.5){
						grado="Peso Normal";
					}
					else{
						grado="Bajo Peso";
					}
				}
			}
		}
	}

	alert(`La persona tiene ${grado}. IMC = ${imc}`);


}

/*
1-con if
pedir a una persoan que fue de vaciones , la distancia que viajo y el tiempo que tardo, para calcular la velocidad
e informar:
60 km/hr = muy lento
hata 80km/h= lento
hasta 100= buen ritmo
hasta 120= ahi de la ley
mas = eso no se hace


function mostrar() {

	let distancia;
	let tiempo;
	let velocidad;

	distancia = prompt("Ingrese la distancia");
	distancia = parseInt(distancia);
	tiempo = prompt("Ingrese el tiempo");
	tiempo = parseInt(tiempo);

	velocidad = distancia / tiempo

	if (velocidad > 120) {
		alert("eso no se hace");
	}
	else {
		if (velocidad > 100) {
			alert("ahí de la ley");
		}
		else {
			if (velocidad > 80) {
				alert("buen ritmo");
			}
			else {
				if (velocidad > 60) {
					alert("lento");
				} else {
					alert("muy lento");
				}
			}
		}
	}








}
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 */

/*let nota;

nota = Math.round(Math.random() * 9 + 1);

if (nota >= 9) {
	alert(`EXCELENTE. Nota=${nota}`);
}


else if (nota >= 4) {
	alert(`APROBÓ. Nota=${nota}`);
}


else {
	alert(`Vamos, la próxima se puede. Nota= ${nota}`);
}
}*/