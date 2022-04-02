/// <reference path="./persona.ts" />
/// <reference path="./empleado.ts" />
/// <reference path="./fabrica.ts" />

let empleado1 = new Entidades.Empleado("Emmanuel", "Zelarayan", 11111, "m", 555, 50000);
let empleado2 = new Entidades.Empleado("Soledad", "Quiroz", 22222, "f", 666, 10000);
let empleado3 = new Entidades.Empleado("Luna", "Rodriguez", 33333, "m", 777, 20000);
let empleado4 = new Entidades.Empleado("Lautaro", "Perez", 44444, "m", 888, 30000);

let fabrica = new Entidades.Fabrica("Canuto SRL");
fabrica.agregarEmpleado(empleado1);
fabrica.agregarEmpleado(empleado2);
fabrica.agregarEmpleado(empleado3);
fabrica.agregarEmpleado(empleado4);

console.log(fabrica.ToString());

let btnAgregar = (<HTMLInputElement> document.getElementById("btnAgregar"));
btnAgregar.addEventListener("click", () => {
    let legajo : number = parseInt((<HTMLInputElement> document.getElementById("txtLegajo")).value);
    let nombre : string = (<HTMLInputElement> document.getElementById("txtNombre")).value;
    let apellido : string = (<HTMLInputElement> document.getElementById("txtApellido")).value;
    let dni : number = parseInt((<HTMLInputElement> document.getElementById("txtDni")).value);
    let sueldo : number = parseInt((<HTMLInputElement> document.getElementById("txtSueldo")).value);
    let rdoMasculino = <HTMLInputElement> document.getElementById("rdoMasculino");
    let rdoFemenino = <HTMLInputElement> document.getElementById("rdoFemenino");
    let sexo = "";
    if(rdoMasculino.checked){
        sexo = rdoMasculino.value;
    } else {
        sexo = rdoFemenino.value;
    }
    let empleado = new Entidades.Empleado(nombre, apellido, dni, sexo, legajo, sueldo);
    if(empleado.Nombre !== ""){
        fabrica.agregarEmpleado(empleado);
        console.clear();
        console.log(fabrica.ToString());
        (<HTMLElement> document.getElementById("fabrica")).innerText = fabrica.ToString();
    }
    
});