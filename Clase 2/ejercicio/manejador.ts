/// <reference path="./persona.ts" />
/// <reference path="./alumno.ts" />

namespace Manejador{
    export function crearAlumno() : void{
        let nombre : string = (<HTMLInputElement> document.getElementById("txtNombre")).value;
        let apellido : string = (<HTMLInputElement> document.getElementById("txtApellido")).value;
        let legajo : number = parseInt((<HTMLInputElement> document.getElementById("txtLegajo")).value);

        let alumno : Prueba.Alumno = new Prueba.Alumno(nombre, apellido, legajo);

        console.log(alumno.ToString());
        alert(alumno.ToString());
    }
}