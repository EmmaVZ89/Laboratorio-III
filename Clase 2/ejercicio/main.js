"use strict";
var TestPrueba;
(function (TestPrueba) {
    var alumnos = [
        new Prueba.Alumno("Juan", "Perez", 1111),
        new Prueba.Alumno("Maria", "Rodriguez", 2222),
        new Prueba.Alumno("Gustavo", "Guzman", 3333),
        new Prueba.Alumno("Pedro", "Soria", 4444),
    ];
    alumnos.forEach(function (a) { return console.log(a.ToString()); });
})(TestPrueba || (TestPrueba = {}));
//# sourceMappingURL=main.js.map