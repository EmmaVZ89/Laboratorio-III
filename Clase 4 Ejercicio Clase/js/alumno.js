"use strict";
var AJAX;
(function (AJAX) {
    class Alumno {
        constructor(legajo, nombre, apellido) {
            this.legajo = legajo;
            this.nombre = nombre;
            this.apellido = apellido;
        }
    }
    AJAX.Alumno = Alumno;
})(AJAX || (AJAX = {}));
//# sourceMappingURL=alumno.js.map