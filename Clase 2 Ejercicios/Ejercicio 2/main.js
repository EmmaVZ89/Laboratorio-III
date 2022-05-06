"use strict";
/// <reference path="./figura_geometrica.ts" />
/// <reference path="./rectangulo.ts" />
/// <reference path="./triangulo.ts" />
var Prueba;
(function (Prueba) {
    let rect = new Entidades.Rectangulo2("red", 4, 8);
    console.log(rect.ToString());
    let triang = new Entidades.Triangulo("blue", 3, 5);
    console.log(triang.ToString());
    document.getElementById("rectangulo").innerText = rect.ToString();
    document.getElementById("triangulo").innerText = triang.ToString();
})(Prueba || (Prueba = {}));
//# sourceMappingURL=main.js.map