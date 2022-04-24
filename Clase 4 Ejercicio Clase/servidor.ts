const express = require('express');
const app = express();

const path = require('path');

app.set('puerto', 9876);

// donde cargar los archivos estaticos (css, scripts, etc)
app.use(express.static('./js'));

app.get('/', (request:any, response:any)=>{
    // fs.readFile("./index.html", "UTF-8", (err:any, archivo:any)=>{
    //     if(err) throw("Error al intentar leer el archivo.");
    //     response.send(archivo);
    // });
    response.sendFile(path.resolve(__dirname, 'index.html'));
});

//AGREGO FILE SYSTEM
const fs = require('fs');

//AGREGO JSON
app.use(express.json());

//INDICO RUTA HACIA EL ARCHIVO
const path_archivo = "./BACKEND/archivos/alumnos.txt";

//CREO LAS RUTAS PARA EL CRUD

//LISTAR
app.get('/alumnos', (request:any, response:any)=>{
    fs.readFile(path_archivo, "UTF-8", (err:any, archivo:any)=>{
        if(err) throw("Error al intentar leer el archivo.");
        console.log("Archivo leído.");
        let alumnos_array = archivo.split(',\r\n');
        response.send(JSON.stringify(alumnos_array));
    });
});

//AGREGAR
app.post('/alumnos', (request:any, response:any)=>{
    let dato = request.body;
    let contenido = JSON.stringify(dato) + ",\r\n";
    //agrega texto
    fs.appendFile(path_archivo, contenido, (err:any)=>{
        if(err) throw("Error al intentar agregar en archivo.");
        console.log("Archivo escrito.");
        response.send("Archivo alumno escrito.");
    });
});

//VERIFICAR
app.post('/alumnos/verificar', (request:any, response:any)=>{
    let dato = request.body;
    fs.readFile(path_archivo, "UTF-8", (err:any, archivo:any)=>{
        if(err) throw("Error al intentar leer el archivo.");
        let alumnos_array = archivo.split(",\r\n");
        let obj_array : Array<any> = [];
        alumnos_array.forEach( (alumno_str:any) => {
            if(alumno_str != "" && alumno_str != undefined){
                obj_array.push(JSON.parse(alumno_str));
            }
        });

        let alumnoRtn: any = {};
        obj_array.forEach( (alumno:any) => {
            if(alumno.legajo == dato.legajo){
                alumnoRtn = alumno;
            }
        });

        response.send(JSON.stringify(alumnoRtn));
    });
});

//MODIFICAR
app.post('/alumnos/modificar', (request:any, response:any)=>{
    let obj = request.body;
    fs.readFile(path_archivo, "UTF-8", (err:any, archivo:any)=>{
        if(err) throw("Error al intentar leer el archivo.");
        let alumnos_array = archivo.split(",\r\n");
        let obj_array : Array<any> = [];
        alumnos_array.forEach( (alumno_str:any) => {
            if(alumno_str != "" && alumno_str != undefined){
                obj_array.push(JSON.parse(alumno_str));
            }
        });

        let alumnoRtn = {};
        let obj_array_modif : Array<any> = [];
        obj_array.forEach( (alumno:any) => {
            if(alumno.legajo == obj.legajo){
                alumno.nombre = obj.nombre;
                alumno.apellido = obj.apellido;
                alumnoRtn = alumno;
            }
            obj_array_modif.push(alumno);
        });

        let alumnos_string : string = "";
        obj_array_modif.forEach( (alumno:any) => {
            alumnos_string += JSON.stringify(alumno) + ",\r\n";
        });

        //escribe texto
        fs.writeFile(path_archivo, alumnos_string, (err:any)=>{
            if(err) throw("Error al intentar escribir en archivo.");
            console.log("Archivo modificado.");
            response.send(JSON.stringify(alumnoRtn));
        });
    });
});

//ELIMINAR
app.post('/alumnos/eliminar', (request:any, response:any)=>{
    let obj = request.body;
    fs.readFile(path_archivo, "UTF-8", (err:any, archivo:any)=>{
        if(err) throw("Error al intentar leer el archivo.");
        let alumnos_array = archivo.split(",\r\n");
        let obj_array : Array<any> = [];
        alumnos_array.forEach( (alumno_str:any) => {
            if(alumno_str != "" && alumno_str != undefined){
                obj_array.push(JSON.parse(alumno_str));
            }
        });

        let obj_array_eli : Array<any> = [];
        obj_array.forEach( (alumno:any) => {
            if(alumno.legajo != obj.legajo){
                //se agregan todos los alumnos, menos el que se quiere eliminar
                obj_array_eli.push(alumno);
            }           
        });

        let alumnos_string : string = "";
        obj_array_eli.forEach( (alumno:any) => {
            alumnos_string += JSON.stringify(alumno) + ",\r\n";
        });

        //escribe texto
        fs.writeFile(path_archivo, alumnos_string, (err:any)=>{
            if(err) throw("Error al intentar escribir en archivo.");
            console.log("Archivo eliminado.");
            response.send("Archivo alumno eliminado.");
        });
    });
});

app.listen(app.get('puerto'), ()=>{
    console.log('Servidor corriendo sobre puerto:', app.get('puerto'));
});