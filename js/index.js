//Esta variable guarda una referencia al control de resultado, se declara global para no tener que estar ejecutando document.getElementById en cada ocasión que se necesite
let ctrlMostrado = document.getElementById('salida');

function dibujaTarjetas(arreglo) {
	let imprime = "<table id='registro'><tr><th>Habitación</th><th>Huesped</th></tr>";
	//La siguiente estructura de for es casi ya un arcaísmo. Sin embargo, los clásicos nunca mueren.
	for (let i = 0; i < arreglo.length; i++) {
		imprime += "<tr><td>" + arreglo[i].numHabitacion + "</td><td>" + arreglo[i].nombreHuesped + "</td></tr>";
	}
	imprime += "</table>"
	ctrlMostrado.innerHTML = imprime;
}

function ordenaPorHabitacion(registro) {
	if (registro.length<=1){
		return registro;
	} else {
		var pivot = Math.floor(Math.random()* registro.length-1);
		var max = [];
		var min = [];
		var p = [];
		for (var i = 0; registro.length;i++){
			if (registro[pivot].numHabitacion > registro[i].numHabitacion) {
				min.push(registro[i].numHabitacion);
			} else if (registro[pivot].numHabitacion < registro[i].numHabitacion) {
				max.push(registro[i].numHabitacion);
			} else {
				p.push (registro[i].numHabitacion);
			}
		}
		return(ordenaPorHabitacion(min)).concat(p, ordenaPorHabitacion(max));
	}
	//En esta función escribe la función que ordenará el arreglo por habitación


}

function ordenaPorHuesped(arreglo) {
	//Acá puedes hacer la otra que ordene por el nombre del huesped
}
