"use strict";
let nombre = "emManuel";
let apellido = "zelaRayan";
function MostrarNombreApellido(nombre, apellido) {
    let nom = nombre[0].toUpperCase() + nombre.slice(1).toLocaleLowerCase();
    let ape = apellido.toLocaleUpperCase();
    console.log(`${nom}, ${ape}`);
}
MostrarNombreApellido(nombre, apellido);
//# sourceMappingURL=index.js.map