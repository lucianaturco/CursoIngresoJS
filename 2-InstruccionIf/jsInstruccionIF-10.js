function mostrar() {
	/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 */

	let nota;

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
}