function CalcularFactorialOCubo(numero : number){
    let factorial : number = 1;
    let num : number = numero;
    if(numero < 0){
        console.log(`El cubo de ${num} es ${Math.pow(num, 3)}`);
    } else if(num > 1){
        while(num > 1){
            factorial *= num;
            num--;
        }
        console.log(`El factorial de ${numero} es ${factorial}`);
    } else if(num === 1 || num === 0){
        console.log(`El factorial de ${numero} es ${factorial}`);
    }
}

CalcularFactorialOCubo(-3);