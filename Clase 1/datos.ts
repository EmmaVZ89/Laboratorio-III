"use strict";
var esVerdad : boolean = true;
esVerdad = false;
// esVerdad = 0;

var entero : number = 1;
var decimal : number = 10.59;
var hexa : number = 0xFF55AA;
var binario : number = 0b1001001;
var octal : number = 0o7125;

var obj : object | null = null;

var indefinido : number;
// console.log(indefinido);

var cadena : string = "Hola mundo!!!!";
console.log(cadena);

var vec : any = [1, true, "hola"];
console.log(vec);

var numeros : number[] = [1,2,3];
var otrosNumeros : Array<number> = [4, 5, 6];

var eliminado : number | undefined = numeros.pop();
console.log(eliminado);

numeros.push(7);
console.log(numeros);

enum Ejemplo 
{
    Basico,
    Intermedio,
    Avanzado
}

var e : Ejemplo = Ejemplo.Avanzado;

console.log(Ejemplo.Intermedio);
console.log(e);