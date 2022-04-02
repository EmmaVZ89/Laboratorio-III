function Sumar(a: number, b: number): number {
  return a + b;
}

function Saludar(nombre: string): string {
  return "Hola " + nombre;
}

function Despedir(): void {
  console.log("Chau!");
}

// variable con funciones*******************************************************************************************

let miFuncion: Function = Sumar;

console.log(miFuncion(5, 5));

miFuncion = Saludar;

console.log(miFuncion("Juan"));

let miVariable: Function = function (): void {
  console.log("Hola");
};
miVariable();

// funciones con parametros opcionales ******************************************
// En JS todos los parametros son opcionales

function NombreApellido(nombre: string, apellido?: string): string {
  if (apellido) {
    return nombre + " " + apellido;
  } else {
    return nombre;
  }
}

let nombre: string = NombreApellido("Juan", "Perez");
let otroNombre: string = NombreApellido("Juan");

console.log(nombre);
console.log(otroNombre);

// Funciones con parametros predeterminados *******************************************************

function GenerarNombreCompleto(
  nombre: string,
  apellido: string,
  capitalizado: boolean = false
): string {
  var cadena: string;
  if (capitalizado) {
    cadena = Capitalizar(nombre) + " " + Capitalizar(apellido);
  } else {
    cadena = nombre + " " + apellido;
  }
  return cadena;
}

function Capitalizar(cadena: string): string {
  return cadena.charAt(0).toUpperCase() + cadena.slice(1).toLocaleLowerCase();
}

console.log(GenerarNombreCompleto("tony", "stark", true));

// Parametros REST ***************************************************************************
function CompletarNombreApellido(
  nombre: string,
  ...losDemasParametros: string[]
): string {
  return nombre + " " + losDemasParametros.join(" ");
}

let superman: string = CompletarNombreApellido("Clark", "Joseph", "Kent");
let ironman: string = CompletarNombreApellido(
  "Anthony",
  "Edward",
  "Tony",
  "Stark"
);

console.log(superman);
console.log(ironman);

// Funciones flecha ***************************************************************************
// Todas hacen lo mismo

let f1: Function = function (i: number): number {
  return i * i;
};
console.log(f1(2));

let f2: Function = function (i: number) {
  return i * i;
};
console.log(f2(2));

let f3: Function = (i: number): number => {
  return i * i;
};
console.log(f3(2));

let f4: Function = (i: number) => {
  return i * i;
};
console.log(f4(2));

let f5: Function = (i: number) => i * i;
console.log(f5(2));

/*

*/
