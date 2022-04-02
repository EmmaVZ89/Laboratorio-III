"use strict";
function RepetirOInvertir(numero, cadena) {
    if (cadena) {
        for (let i = 0; i < numero; i++) {
            console.log(cadena);
        }
    }
    else {
        console.log(InvertirNumero(numero));
    }
}
function InvertirNumero(numero) {
    let aux = numero.toString();
    let reverseString = aux.split("").reverse().join("");
    return parseInt(reverseString);
}
RepetirOInvertir(12568);
//# sourceMappingURL=index.js.map