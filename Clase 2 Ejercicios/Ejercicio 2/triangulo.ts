/// <reference path="./figura_geometrica.ts" />

namespace Entidades {
  export class Triangulo extends FiguraGeometrica {
    public altura: number;
    public base: number;

    public constructor(color: string, b: number, h: number) {
      super(color);
      this.base = b;
      this.altura = h;
      this.calcularDatos();
    }

    public calcularDatos(): void {
      this.superficie = (this.base * this.altura) / 2;
      this.perimetro = this.base + this.altura * 2;
    }

    public dibujar(): string {
      let triangulo = "";
      let espacios = this.altura;
      for (let i = 1; i <= this.altura; i++) {
        espacios--;
        for (let k = 0; k < espacios; k++) {
          triangulo += " . ";
        }
        if (i == 1) {
          triangulo += "*";
        } else {
          for (let j = 1; j <= i * 2 - 1; j++) {
            triangulo += "*";
          }
        }
        for (let l = 0; l < espacios; l++) {
          triangulo += " . ";
        }
        triangulo += "\n";
      }
      return triangulo;
    }

    public ToString(): string {
      return (
        super.ToString() +
        "Base: " +
        this.base +
        "\n" +
        "Altura: " +
        this.altura +
        "\n\n" +
        this.dibujar()
      );
    }
  }
}
