function RepetirOInvertir(numero: number, cadena?: string) {
  if (cadena) {
    for (let i = 0; i < numero; i++) {
      console.log(cadena);
    }
  } else {
      console.log(InvertirNumero(numero));
  }
}

function InvertirNumero(numero: number): number {
    let aux:string = numero.toString();
    let reverseString:string = aux.split("").reverse().join("");
    return parseInt(reverseString);
}

RepetirOInvertir(12568);