/// <reference path="./punto.ts" />

namespace Entidades{
  export class Rectangulo {
    private vertice1: Punto;
    private vertice2: Punto;
    private vertice3: Punto;
    private vertice4: Punto;
    private base: number;
    private altura: number;
    private area: number;
    private perimetro: number;
  
    public constructor(v1: Punto, v3: Punto) {
      this.vertice1 = new Punto(v1.getX(), v1.getY());
      this.vertice2 = new Punto(v3.getX(), v1.getY());
      this.vertice3 = new Punto(v3.getX(), v3.getY());
      this.vertice4 = new Punto(v1.getX(), v3.getY());
      this.base = Math.abs(this.vertice1.getX() - this.vertice3.getX());
      this.altura = Math.abs(this.vertice1.getY() - this.vertice3.getY());
      this.area = this.getArea();
      this.perimetro = this.getPerimetro();
    }
  
    public getArea(): number {
      return this.base * this.altura;
    }
  
    public getPerimetro(): number {
      return (this.base + this.altura) * 2;
    }
  
    public toString(): string {
      let rectangulo = "";
      for (let i = 0; i < this.altura; i++) {
        for (let j = 0; j < this.base; j++) {
          rectangulo += "*";
        }
        rectangulo += "\n";
      }
      let retorno =
        "Vertice 1: " +
        this.vertice1.getX() +
        " - " +
        this.vertice1.getY() +
        "\n" +
        "Vertice 2: " +
        this.vertice2.getX() +
        " - " +
        this.vertice2.getY() +
        "\n" +
        "Vertice 3: " +
        this.vertice3.getX() +
        " - " +
        this.vertice3.getY() +
        "\n" +
        "Vertice 4: " +
        this.vertice4.getX() +
        " - " +
        this.vertice4.getY() +
        "\n" +
        "Base: " +
        this.base +
        " cm\n" +
        "Altura: " +
        this.altura +
        " cm\n" +
        "Area: " +
        this.area +
        " cm\n" +
        "Perimetro: " +
        this.perimetro +
        " cm\n\n" +
        rectangulo;
      return retorno;
    }
  }  
}
