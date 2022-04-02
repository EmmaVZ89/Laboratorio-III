let nombre:string = "emManuel";
let apellido:string = "zelaRayan";

function MostrarNombreApellido(nombre:string, apellido:string){
    let nom:string = nombre[0].toUpperCase() + nombre.slice(1).toLocaleLowerCase();
    let ape:string = apellido.toLocaleUpperCase();
    console.log(`${nom}, ${ape}`);
}

MostrarNombreApellido(nombre, apellido);