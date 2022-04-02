"use strict";
/// <reference path="./figura_geometrica.ts" />
var Entidades;
(function (Entidades) {
    class Rectangulo2 extends Entidades.FiguraGeometrica {
        constructor(color, l1, l2) {
            super(color);
            this.base = l1;
            this.altura = l2;
            this.calcularDatos();
        }
        calcularDatos() {
            this.superficie = this.base * this.altura;
            this.perimetro = this.base * 2 + this.altura * 2;
        }
        dibujar() {
            let rectangulo = "";
            for (let i = 0; i < this.base; i++) {
                for (let j = 0; j < this.altura; j++) {
                    rectangulo += "*";
                }
                rectangulo += "\n";
            }
            return rectangulo;
        }
        ToString() {
            return super.ToString() +
                "Base: " + this.base + "\n" +
                "Altura: " + this.altura + "\n\n" + this.dibujar();
        }
    }
    Entidades.Rectangulo2 = Rectangulo2;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=rectangulo.js.map