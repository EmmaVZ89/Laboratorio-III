"use strict";
var Entidades;
(function (Entidades) {
    class Persona {
        constructor(nombre, apellido, dni, sexo) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.dni = dni;
            this.sexo = sexo;
        }
        get Apellido() {
            return this.apellido;
        }
        get Dni() {
            return this.dni;
        }
        get Nombre() {
            return this.nombre;
        }
        get Sexo() {
            return this.sexo;
        }
        ToString() {
            return this.nombre + " - " + this.apellido + " - " + this.sexo + " - " + this.dni;
        }
    }
    Entidades.Persona = Persona;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=persona.js.map