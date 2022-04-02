"use strict";
var Entidades;
(function (Entidades) {
    class Punto {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        getX() {
            return this.x;
        }
        getY() {
            return this.y;
        }
    }
    Entidades.Punto = Punto;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=punto.js.map