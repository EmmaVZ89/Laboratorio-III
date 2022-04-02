"use strict";
var Manejador;
(function (Manejador) {
    function crearAlumno() {
        var nombre = document.getElementById("txtNombre").value;
        var apellido = document.getElementById("txtApellido").value;
        var legajo = parseInt(document.getElementById("txtLegajo").value);
        var alumno = new Prueba.Alumno(nombre, apellido, legajo);
        console.log(alumno.ToString());
        alert(alumno.ToString());
    }
    Manejador.crearAlumno = crearAlumno;
})(Manejador || (Manejador = {}));
//# sourceMappingURL=manejador.js.map