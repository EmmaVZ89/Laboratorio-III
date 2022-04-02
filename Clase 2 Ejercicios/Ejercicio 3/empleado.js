"use strict";
/// <reference path="./persona.ts" />
var Entidades;
(function (Entidades) {
    class Empleado extends Entidades.Persona {
        constructor(nombre, apellido, dni, sexo, legajo, sueldo) {
            super(nombre, apellido, dni, sexo);
            this.legajo = legajo;
            this.sueldo = sueldo;
        }
        get Legajo() {
            return this.legajo;
        }
        get Sueldo() {
            return this.sueldo;
        }
        hablar(idioma) {
            return "El empleado habla " + idioma;
        }
        ToString() {
            return super.ToString() + " - " + this.sueldo + " - " + this.legajo;
        }
    }
    Entidades.Empleado = Empleado;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=empleado.js.map