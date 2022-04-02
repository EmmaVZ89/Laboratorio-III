"use strict";
function AveriguarSigno(cadFecha) {
    let arrFecha = cadFecha.split("-");
    let dia = parseInt(arrFecha[0]);
    let mes = parseInt(arrFecha[1]);
    let anio = parseInt(arrFecha[2]);
    let signo = "";
    if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4))
        signo = "Aries";
    if ((dia >= 24 && mes == 9) || (dia <= 23 && mes == 10))
        signo = "Libra";
    if ((dia >= 21 && mes == 4) || (dia <= 21 && mes == 5))
        signo = "Tauro";
    if ((dia >= 24 && mes == 10) || (dia <= 22 && mes == 11))
        signo = "Escorpio";
    if ((dia >= 22 && mes == 5) || (dia <= 21 && mes == 6))
        signo = "Geminis";
    if ((dia >= 23 && mes == 11) || (dia <= 21 && mes == 12))
        signo = "Sagitario";
    if ((dia >= 21 && mes == 6) || (dia <= 23 && mes == 7))
        signo = "Cancer";
    if ((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1))
        signo = "Capricornio";
    if ((dia >= 24 && mes == 7) || (dia <= 23 && mes == 8))
        signo = "Leo";
    if ((dia >= 21 && mes == 1) || (dia <= 19 && mes == 2))
        signo = "Acuario";
    if ((dia >= 24 && mes == 8) || (dia <= 23 && mes == 9))
        signo = "Virgo";
    if ((dia >= 20 && mes == 2) || (dia <= 20 && mes == 3))
        signo = "Piscis";
    console.log(`Tu signo es ${signo}`);
}
AveriguarSigno("25-10-1988");
//# sourceMappingURL=index.js.map