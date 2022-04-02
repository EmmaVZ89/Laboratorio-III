"use strict";
/// <reference path="./punto.ts" />
var Entidades;
(function (Entidades) {
    class Rectangulo {
        constructor(v1, v3) {
            this.vertice1 = new Entidades.Punto(v1.getX(), v1.getY());
            this.vertice2 = new Entidades.Punto(v3.getX(), v1.getY());
            this.vertice3 = new Entidades.Punto(v3.getX(), v3.getY());
            this.vertice4 = new Entidades.Punto(v1.getX(), v3.getY());
            this.base = Math.abs(this.vertice1.getX() - this.vertice3.getX());
            this.altura = Math.abs(this.vertice1.getY() - this.vertice3.getY());
            this.area = this.getArea();
            this.perimetro = this.getPerimetro();
        }
        getArea() {
            return this.base * this.altura;
        }
        getPerimetro() {
            return (this.base + this.altura) * 2;
        }
        toString() {
            let rectangulo = "";
            for (let i = 0; i < this.altura; i++) {
                for (let j = 0; j < this.base; j++) {
                    rectangulo += "*";
                }
                rectangulo += "\n";
            }
            let retorno = "Vertice 1: " +
                this.vertice1.getX() +
                " - " +
                this.vertice1.getY() +
                "\n" +
                "Vertice 2: " +
                this.vertice2.getX() +
                " - " +
                this.vertice2.getY() +
                "\n" +
                "Vertice 3: " +
                this.vertice3.getX() +
                " - " +
                this.vertice3.getY() +
                "\n" +
                "Vertice 4: " +
                this.vertice4.getX() +
                " - " +
                this.vertice4.getY() +
                "\n" +
                "Base: " +
                this.base +
                " cm\n" +
                "Altura: " +
                this.altura +
                " cm\n" +
                "Area: " +
                this.area +
                " cm\n" +
                "Perimetro: " +
                this.perimetro +
                " cm\n\n" +
                rectangulo;
            return retorno;
        }
    }
    Entidades.Rectangulo = Rectangulo;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=rectangulo.js.map