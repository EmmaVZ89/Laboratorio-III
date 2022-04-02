"use strict";
function MostrarInfoCadena(cadena) {
    let mensaje = "La cadena es una mezcla entre mayusculas y minusculas";
    if (cadena.toLocaleLowerCase() === cadena) {
        mensaje = "La cadena tiene todas minusculas.";
    }
    else if (cadena.toUpperCase() === cadena) {
        mensaje = "La cadena tiene todas mayusculas.";
    }
    console.log(mensaje);
}
MostrarInfoCadena("hoLa");
//# sourceMappingURL=index.js.map