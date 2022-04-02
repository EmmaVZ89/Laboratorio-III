"use strict";
/// <reference path="./persona.ts"/>
/// <reference path="./empleado.ts"/>
var Entidades;
(function (Entidades) {
    class Fabrica {
        constructor(razonSocial) {
            this.razonSocial = razonSocial;
            this.empleados = [];
        }
        agregarEmpleado(persona) {
            let retorno = false;
            let index = this.empleados.findIndex((e) => e.Legajo === persona.Legajo);
            if (index === -1) {
                this.empleados.push(persona);
                retorno = true;
            }
            return retorno;
        }
        calcularSueldos() {
            return this.empleados.reduce((prev, act) => prev + act.Sueldo, 0);
        }
        eliminarEmpleado(persona) {
            let retorno = false;
            let index = this.empleados.findIndex((e) => e.Legajo === persona.Legajo);
            if (index !== -1) {
                this.empleados.slice(index, 1);
                retorno = true;
            }
            return retorno;
        }
        ToString() {
            let retorno = `Razon Social: ${this.razonSocial} \n
            Lista de Empleados: \n`;
            this.empleados.forEach((e) => {
                retorno += e.ToString() + "\n";
            });
            retorno += `Total sueldos: ${this.calcularSueldos()}\n`;
            return retorno;
        }
    }
    Entidades.Fabrica = Fabrica;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=fabrica.js.map