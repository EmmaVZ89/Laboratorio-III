/// <reference path="./persona.ts" />
namespace Prueba{
    export class Alumno extends Persona{
        protected legajo : number;

        public get Legajo() : number{
            return this.legajo;
        }

        public set Legajo(value : number){
            this.legajo = value;
        }

        public constructor(nombre : string, apellido : string, legajo : number){
            super(nombre, apellido);
            this.legajo = legajo;
        }

        public ToString(): string {
            return super.ToString() + " " + this.legajo;
        }
    }
}