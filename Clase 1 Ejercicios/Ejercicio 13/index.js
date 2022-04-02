"use strict";
function CalcularNumeroSmith(numero) {
    let suma1 = descomponerYSumar(numero);
    let arrayNum = [];
    let num = numero;
    for (let i = 0;; i++) {
        if (i !== 1 && num % i === 0) {
            while (num % i === 0) {
                let aux = i.toString();
                for (let j = 0; j < aux.length; j++) {
                    arrayNum.push(parseInt(aux[j]));
                }
                num /= i;
            }
        }
        if (num <= 1) {
            break;
        }
    }
    let suma2 = arrayNum.reduce((a, b) => a + b);
    if (compararNumeros(suma1, suma2)) {
        console.log(`El número ${numero} es un número Smith.`);
    }
    else {
        console.log(`El número ${numero} NO es un número Smith.`);
    }
}
function descomponerYSumar(numero) {
    return numero
        .toString()
        .split("")
        .map((n) => parseInt(n))
        .reduce((prev, act) => prev + act);
}
function compararNumeros(num1, num2) {
    return num1 === num2;
}
CalcularNumeroSmith(202);
// 4, 22, 27, 58, 85, 94, 121, 16, 202
//# sourceMappingURL=index.js.map