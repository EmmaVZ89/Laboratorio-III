namespace Entidades {
    export abstract class FiguraGeometrica {
        protected color : string;
        protected perimetro : number;
        protected superficie : number;

        public constructor (color : string){
            this.color = color;
            this.perimetro = 0;
            this.superficie = 0;
        }

        public getColor() : string {
            return this.color;
        }

        public ToString() : string {
            return "Color: " + this.color + "\n" +
            "Perimetro: " + this.perimetro + "\n" +
            "Superficie: " + this.superficie + "\n";
        }

        public abstract dibujar() : string;

        public abstract calcularDatos() : void;
    }
}