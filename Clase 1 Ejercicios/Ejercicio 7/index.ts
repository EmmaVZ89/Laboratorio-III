function MostrarPrimos() {
  let cantidad: number = 0;
  for (let i = 0; cantidad < 20; i++) {
      if(esPrimo(i)){
          console.log(`El número ${i} es primo.`);
          cantidad++;
      }
  }
}

function esPrimo(numero: number): boolean {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i <= numero - 1; i++) {
    if (numero % i == 0) {
      return false;
    }
  }
  return true;
}

MostrarPrimos();
