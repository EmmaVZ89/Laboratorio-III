"use strict";
/// <reference path="./figura_geometrica.ts" />
var Entidades;
(function (Entidades) {
    class Triangulo extends Entidades.FiguraGeometrica {
        constructor(color, b, h) {
            super(color);
            this.base = b;
            this.altura = h;
            this.calcularDatos();
        }
        calcularDatos() {
            this.superficie = (this.base * this.altura) / 2;
            this.perimetro = this.base + this.altura * 2;
        }
        dibujar() {
            let triangulo = "";
            let espacios = this.altura;
            for (let i = 1; i <= this.altura; i++) {
                espacios--;
                for (let k = 0; k < espacios; k++) {
                    triangulo += " . ";
                }
                if (i == 1) {
                    triangulo += "*";
                }
                else {
                    for (let j = 1; j <= i * 2 - 1; j++) {
                        triangulo += "*";
                    }
                }
                for (let l = 0; l < espacios; l++) {
                    triangulo += " . ";
                }
                triangulo += "\n";
            }
            return triangulo;
        }
        ToString() {
            return (super.ToString() +
                "Base: " +
                this.base +
                "\n" +
                "Altura: " +
                this.altura +
                "\n\n" +
                this.dibujar());
        }
    }
    Entidades.Triangulo = Triangulo;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=triangulo.js.map