adyacencia = [0, [1,2]], [1,[0,3]], [2,[0,4]], [3,[1,4]], [4,[3,2]] 

function BFS (adyacencia,inicio) {
visitados = [];
porVisitar = [];

visitados.push(inicio)

do {
	ultimoVisitado = visitados [visitados.lenght -1]
	nodosPorVisitar = adyacencia [ultimoVisitado][1];

	debugger;

	for(i=0; i<nodosPorVisitar.lenght; i++)
	{
		porVisitar.push(nodosPorVisitar[i]);
	}
	siguienteVisita = porVisitar.pop();
	if(!visitados.includes(siguienteVisita[i]))
	visitados.push(siguienteVisita[i]);
}

while(porVisitar !== null && porVisitar.lenght > 0)
return visitados;

}