"use strict";
var Entidades;
(function (Entidades) {
    class FiguraGeometrica {
        constructor(color) {
            this.color = color;
            this.perimetro = 0;
            this.superficie = 0;
        }
        getColor() {
            return this.color;
        }
        ToString() {
            return "Color: " + this.color + "\n" +
                "Perimetro: " + this.perimetro + "\n" +
                "Superficie: " + this.superficie + "\n";
        }
    }
    Entidades.FiguraGeometrica = FiguraGeometrica;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=figura_geometrica.js.map