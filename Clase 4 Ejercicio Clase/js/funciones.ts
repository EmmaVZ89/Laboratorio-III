/// <reference path="./alumno.ts" />
namespace AJAX {
  let xhttp: XMLHttpRequest = new XMLHttpRequest();

  // MostrarListado();

  export function CrearAlumno() {
    let legajo: string = (<HTMLInputElement>(
      document.getElementById("txtLegajo")
    )).value;
    let nombre: string = (<HTMLInputElement>(
      document.getElementById("txtNombre")
    )).value;
    let apellido: string = (<HTMLInputElement>(
      document.getElementById("txtApellido")
    )).value;
    let alumno = {"legajo": legajo, "nombre": nombre, "apellido": apellido};

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

  export async function MostrarListado() {
    xhttp.open("GET", "./alumnos", true); // tomar como referencia el index.html
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        let div = <HTMLDivElement>document.getElementById("div_listado");
        let alumnosArrayStr = JSON.parse(xhttp.responseText);
        let alumnosArrayJson = [];
        for (let i = 0; i < alumnosArrayStr.length; i++) {
          if(alumnosArrayStr[i] != "") {
            alumnosArrayJson.push(JSON.parse(alumnosArrayStr[i]));
          }
        }

        let listado = "";
        alumnosArrayJson.forEach( (alumno:AJAX.Alumno) => {
          listado += `${alumno.legajo} - ${alumno.apellido} - ${alumno.nombre}<br>`;
        });
        div.innerHTML = listado;
      }
    };
    xhttp.send();
  }

  export function VerificarAlumno() : boolean{
    let retorno = false;
    let legajo: number = parseInt((<HTMLInputElement>(
      document.getElementById("txtLegajoVer")
    )).value);
    let alumno = {
      "legajo": legajo
    }
    
    xhttp.open("POST", "./alumnos/verificar", true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF8");
    // let form: FormData = new FormData();
    // form.append("legajo", legajo);
    xhttp.send(JSON.stringify(alumno));

    xhttp.onreadystatechange = () => {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        let respuesta = xhttp.responseText;
        let alumnoJson = JSON.parse(respuesta);
        if(alumnoJson.legajo != undefined) {
          console.log(alumnoJson);
          retorno = true;
        } else {
          console.log(`El alumno con legajo ${alumno.legajo} no esta en el listado.`);
        }
      }
    };
    return retorno;
  }

  export function ModificarAlumno() {
    let legajo: number = parseInt((<HTMLInputElement>(
      document.getElementById("txtLegajoMod")
    )).value);
    let nombre: string = (<HTMLInputElement>(
      document.getElementById("txtNombreMod")
    )).value;
    let apellido: string = (<HTMLInputElement>(
      document.getElementById("txtApellidoMod")
    )).value;
    let alumno = 
    {
      "legajo": legajo,
      "nombre": nombre,
      "apellido": apellido
    }

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
        if(alumnoJson.legajo != undefined) {
          console.log("Alumno Modificado!");
          console.log(alumnoJson);
          MostrarListado();
        } else{
          console.log(`El alumno con legajo ${legajo} no esta en el listado.`);
        }
      }
    };
  }

  export function BorrarAlumno() {
    let legajo: number = parseInt((<HTMLInputElement>(
      document.getElementById("txtLegajoDel")
    )).value);
    let alumno = 
    {
      "legajo": legajo
    }

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
}
