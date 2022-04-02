/// <reference path="./figura_geometrica.ts" />

namespace Entidades {
  export class Rectangulo2 extends FiguraGeometrica {
    private base: number;
    private altura: number;

    public constructor(color: string, l1: number, l2: number) {
      super(color);
      this.base = l1;
      this.altura = l2;
      this.calcularDatos();
    }

    public calcularDatos(): void {
      this.superficie = this.base * this.altura;
      this.perimetro = this.base * 2 + this.altura * 2;
    }

    public dibujar(): string {
      let rectangulo = "";
      for (let i = 0; i < this.base; i++) {
        for (let j = 0; j < this.altura; j++) {
          rectangulo += "*";
        }
        rectangulo += "\n";
      }
      return rectangulo;
    }

    public ToString(): string {
        return super.ToString() + 
        "Base: " + this.base + "\n" +
        "Altura: " + this.altura + "\n\n" + this.dibujar();
    }
  }
}
