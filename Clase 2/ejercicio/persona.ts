 namespace Prueba{
     export class Persona{
         protected apellido : string;
         protected nombre : string;

         public get Apellido() : string{
             return this.apellido;
         }

         public set Apellido(value : string){
             this.apellido = value;
         }

         public get Nombre() : string{
             return this.nombre;
         }

         public set Nombre(value : string){
             this.nombre = value;
         }

         public constructor(nombre : string, apellido : string){
             this.nombre = nombre;
             this.apellido = apellido;
         }

         public ToString() : string{
             return this.nombre + " " + this.apellido;
         }
     }
 }