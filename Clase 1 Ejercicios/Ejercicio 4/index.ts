function MostrarMensaje(numero:number){
    let mensaje:string = `El número ${numero} es `;
    if(numero%2 === 0){
        mensaje += "par.";
    } else {
        mensaje += "impar.";
    }
    console.log(mensaje);
}

MostrarMensaje(8);