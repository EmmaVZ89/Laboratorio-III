/// <reference path="./persona.ts" />
namespace Entidades {
  export class Empleado extends Persona {
    protected legajo: number;
    protected sueldo: number;

    public constructor(
      nombre: string,
      apellido: string,
      dni: number,
      sexo: string,
      legajo: number,
      sueldo: number
    ) {
        super(nombre, apellido, dni, sexo);
        this.legajo = legajo;
        this.sueldo = sueldo;
    }

    public get Legajo():number{
        return this.legajo;
    }

    public get Sueldo():number{
        return this.sueldo;
    }

    public hablar(idioma: string): string {
        return "El empleado habla " + idioma;
    }

    public ToString(): string {
        return super.ToString() + " - " + this.sueldo + " - " + this.legajo;
    }
  }
}
