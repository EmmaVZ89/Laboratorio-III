"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/// <reference path="./alumno.ts" />
var AJAX;
(function (AJAX) {
    let xhttp = new XMLHttpRequest();
    // MostrarListado();
    function CrearAlumno() {
        let legajo = (document.getElementById("txtLegajo")).value;
        let nombre = (document.getElementById("txtNombre")).value;
        let apellido = (document.getElementById("txtApellido")).value;
        let alumno = { "legajo": legajo, "nombre": nombre, "apellido": apellido };
        xhttp.open("POST", "/alumnos", true);
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF8");
        // let form: FormData = new FormData();
        // let alumnoStr = JSON.stringify(alumno);
        // form.append("alumno", alumno);
        xhttp.send(JSON.stringify(alumno));
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                let respuesta = xhttp.responseText;
                console.log(respuesta);
                MostrarListado();
            }
        };
    }
    AJAX.CrearAlumno = CrearAlumno;
    function MostrarListado() {
        return __awaiter(this, void 0, void 0, function* () {
            xhttp.open("GET", "./alumnos", true); // tomar como referencia el index.html
            xhttp.onreadystatechange = () => {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    let div = document.getElementById("div_listado");
                    let alumnosArrayStr = JSON.parse(xhttp.responseText);
                    let alumnosArrayJson = [];
                    for (let i = 0; i < alumnosArrayStr.length; i++) {
                        if (alumnosArrayStr[i] != "") {
                            alumnosArrayJson.push(JSON.parse(alumnosArrayStr[i]));
                        }
                    }
                    let listado = "";
                    alumnosArrayJson.forEach((alumno) => {
                        listado += `${alumno.legajo} - ${alumno.apellido} - ${alumno.nombre}<br>`;
                    });
                    div.innerHTML = listado;
                }
            };
            xhttp.send();
        });
    }
    AJAX.MostrarListado = MostrarListado;
    function VerificarAlumno() {
        let retorno = false;
        let legajo = parseInt((document.getElementById("txtLegajoVer")).value);
        let alumno = {
            "legajo": legajo
        };
        xhttp.open("POST", "./alumnos/verificar", true);
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF8");
        // let form: FormData = new FormData();
        // form.append("legajo", legajo);
        xhttp.send(JSON.stringify(alumno));
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                let respuesta = xhttp.responseText;
                let alumnoJson = JSON.parse(respuesta);
                if (alumnoJson.legajo != undefined) {
                    console.log(alumnoJson);
                    retorno = true;
                }
                else {
                    console.log(`El alumno con legajo ${alumno.legajo} no esta en el listado.`);
                }
            }
        };
        return retorno;
    }
    AJAX.VerificarAlumno = VerificarAlumno;
    function ModificarAlumno() {
        let legajo = parseInt((document.getElementById("txtLegajoMod")).value);
        let nombre = (document.getElementById("txtNombreMod")).value;
        let apellido = (document.getElementById("txtApellidoMod")).value;
        let alumno = {
            "legajo": legajo,
            "nombre": nombre,
            "apellido": apellido
        };
        xhttp.open("POST", './alumnos/modificar', true);
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF8");
        // let form: FormData = new FormData();
        // form.append("legajo", legajo);
        // form.append("nombre", nombre);
        // form.append("apellido", apellido);
        xhttp.send(JSON.stringify(alumno));
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                let respuesta = xhttp.responseText;
                let alumnoJson = JSON.parse(respuesta);
                if (alumnoJson.legajo != undefined) {
                    console.log("Alumno Modificado!");
                    console.log(alumnoJson);
                    MostrarListado();
                }
                else {
                    console.log(`El alumno con legajo ${legajo} no esta en el listado.`);
                }
            }
        };
    }
    AJAX.ModificarAlumno = ModificarAlumno;
    function BorrarAlumno() {
        let legajo = parseInt((document.getElementById("txtLegajoDel")).value);
        let alumno = {
            "legajo": legajo
        };
        xhttp.open("POST", "./alumnos/eliminar", true);
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF8");
        // let form: FormData = new FormData();
        // form.append("legajo", legajo);
        xhttp.send(JSON.stringify(alumno));
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                let resultado = xhttp.responseText;
                console.log(resultado);
                MostrarListado();
            }
        };
    }
    AJAX.BorrarAlumno = BorrarAlumno;
})(AJAX || (AJAX = {}));
//# sourceMappingURL=funciones.js.map