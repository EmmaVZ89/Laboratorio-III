"use strict";
function DetectarPalidromo(cadena) {
    let cad1 = cadena.toLocaleLowerCase().split(" ").join("");
    let cad2 = cadena
        .toLocaleLowerCase()
        .split(" ")
        .join("")
        .split("")
        .reverse()
        .join("");
    if (cad1 === cad2) {
        console.log("Es un palindromo.");
    }
    else {
        console.log("NO es un palindromo.");
    }
    console.log(cad1);
    console.log(cad2);
}
DetectarPalidromo("La ruta nos aporto otro paso natural");
//# sourceMappingURL=index.js.map