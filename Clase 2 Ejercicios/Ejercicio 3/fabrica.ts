/// <reference path="./persona.ts"/>
/// <reference path="./empleado.ts"/>

namespace Entidades {
  export class Fabrica {
    private empleados: Empleado[];
    private razonSocial: string;

    public constructor(razonSocial: string) {
      this.razonSocial = razonSocial;
      this.empleados = [];
    }

    public agregarEmpleado(persona: Empleado): boolean {
      let retorno: boolean = false;
      let index: number = this.empleados.findIndex(
        (e) => e.Legajo === persona.Legajo
      );
      if (index === -1) {
        this.empleados.push(persona);
        retorno = true;
      }
      return retorno;
    }

    public calcularSueldos(): number {
      return this.empleados.reduce((prev, act) => prev + act.Sueldo, 0);
    }

    public eliminarEmpleado(persona: Empleado): boolean {
      let retorno: boolean = false;
      let index: number = this.empleados.findIndex(
        (e) => e.Legajo === persona.Legajo
      );
      if (index !== -1) {
        this.empleados.slice(index, 1);
        retorno = true;
      }
      return retorno;
    }

    public ToString(): string {
      let retorno: string = `Razon Social: ${this.razonSocial} \n
            Lista de Empleados: \n`;
      this.empleados.forEach((e) => {
        retorno += e.ToString() + "\n";
      });
      retorno += `Total sueldos: ${this.calcularSueldos()}\n`;
      return retorno;
    }
  }
}
