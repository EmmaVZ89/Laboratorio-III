"use strict";
var esVerdad = true;
esVerdad = false;
// esVerdad = 0;
var entero = 1;
var decimal = 10.59;
var hexa = 0xFF55AA;
var binario = 0b1001001;
var octal = 0o7125;
var obj = null;
var indefinido;
// console.log(indefinido);
var cadena = "Hola mundo!!!!";
console.log(cadena);
var vec = [1, true, "hola"];
console.log(vec);
var numeros = [1, 2, 3];
var otrosNumeros = [4, 5, 6];
var eliminado = numeros.pop();
console.log(eliminado);
numeros.push(7);
console.log(numeros);
var Ejemplo;
(function (Ejemplo) {
    Ejemplo[Ejemplo["Basico"] = 0] = "Basico";
    Ejemplo[Ejemplo["Intermedio"] = 1] = "Intermedio";
    Ejemplo[Ejemplo["Avanzado"] = 2] = "Avanzado";
})(Ejemplo || (Ejemplo = {}));
var e = Ejemplo.Avanzado;
console.log(Ejemplo.Intermedio);
console.log(e);
//# sourceMappingURL=datos.js.map