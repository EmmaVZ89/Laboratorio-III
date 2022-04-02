"use strict";
function MostrarMensaje(numero) {
    let mensaje = `El número ${numero} es `;
    if (numero % 2 === 0) {
        mensaje += "par.";
    }
    else {
        mensaje += "impar.";
    }
    console.log(mensaje);
}
MostrarMensaje(8);
//# sourceMappingURL=index.js.map