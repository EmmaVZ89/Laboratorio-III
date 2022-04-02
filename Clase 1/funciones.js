"use strict";
function Sumar(a, b) {
    return a + b;
}
function Saludar(nombre) {
    return "Hola " + nombre;
}
function Despedir() {
    console.log("Chau!");
}
// variable con funciones*******************************************************************************************
let miFuncion = Sumar;
console.log(miFuncion(5, 5));
miFuncion = Saludar;
console.log(miFuncion("Juan"));
let miVariable = function () {
    console.log("Hola");
};
miVariable();
// funciones con parametros opcionales ******************************************
// En JS todos los parametros son opcionales
function NombreApellido(nombre, apellido) {
    if (apellido) {
        return nombre + " " + apellido;
    }
    else {
        return nombre;
    }
}
let nombre = NombreApellido("Juan", "Perez");
let otroNombre = NombreApellido("Juan");
console.log(nombre);
console.log(otroNombre);
// Funciones con parametros predeterminados *******************************************************
function GenerarNombreCompleto(nombre, apellido, capitalizado = false) {
    var cadena;
    if (capitalizado) {
        cadena = Capitalizar(nombre) + " " + Capitalizar(apellido);
    }
    else {
        cadena = nombre + " " + apellido;
    }
    return cadena;
}
function Capitalizar(cadena) {
    return cadena.charAt(0).toUpperCase() + cadena.slice(1).toLocaleLowerCase();
}
console.log(GenerarNombreCompleto("tony", "stark", true));
// Parametros REST ***************************************************************************
function CompletarNombreApellido(nombre, ...losDemasParametros) {
    return nombre + " " + losDemasParametros.join(" ");
}
let superman = CompletarNombreApellido("Clark", "Joseph", "Kent");
let ironman = CompletarNombreApellido("Anthony", "Edward", "Tony", "Stark");
console.log(superman);
console.log(ironman);
// Funciones flecha ***************************************************************************
// Todas hacen lo mismo
let f1 = function (i) {
    return i * i;
};
console.log(f1(2));
let f2 = function (i) {
    return i * i;
};
console.log(f2(2));
let f3 = (i) => {
    return i * i;
};
console.log(f3(2));
let f4 = (i) => {
    return i * i;
};
console.log(f4(2));
let f5 = (i) => i * i;
console.log(f5(2));
/*

*/
//# sourceMappingURL=funciones.js.map