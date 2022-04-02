function CalcularNumeroSmith(numero: number) {
  let suma1: number = descomponerYSumar(numero);
  let arrayNum: number[] = [];
  let num: number = numero;

  for (let i = 0; ; i++) {
    if (i !== 1 && num % i === 0) {
      while (num % i === 0) {
        let aux: string = i.toString();
        for (let j = 0; j < aux.length; j++) {
          arrayNum.push(parseInt(aux[j]));
        }
        num /= i;
      }
    }
    if (num <= 1) {
      break;
    }
  }
  let suma2 = arrayNum.reduce((a, b) => a + b);

  if(compararNumeros(suma1, suma2)){
      console.log(`El número ${numero} es un número Smith.`);
  } else {
    console.log(`El número ${numero} NO es un número Smith.`);
  }
}

function descomponerYSumar(numero:number):number{
    return numero
    .toString()
    .split("")
    .map((n) => parseInt(n))
    .reduce((prev, act) => prev + act);
}

function compararNumeros(num1 : number, num2 : number){
    return num1 === num2;
}

CalcularNumeroSmith(202);

// 4, 22, 27, 58, 85, 94, 121, 16, 202