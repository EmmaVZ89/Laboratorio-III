function CalcularCubo(numero: number): number {
  return Math.pow(numero, 3);
}

function MostrarResultado(numero: number){
    console.log(CalcularCubo(numero));
}

MostrarResultado(5);
