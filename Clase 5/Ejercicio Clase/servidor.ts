const express = require('express');
const app = express();

const path = require('path');

app.set('puerto', 9876);

// donde cargar los archivos estaticos (css, scripts, etc)
app.use(express.static('./public'));

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

//AGREGO MULTER
const multer = require('multer');

//AGREGO MIME-TYPES
const mime = require('mime-types');

//AGREGO STORAGE
const storage = multer.diskStorage({

    destination: "public/fotos/",
});

const upload = multer({

    storage: storage
});


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
app.post('/alumnos', upload.single("foto"), (request:any, response:any)=>{
    let file = request.file;
    let extension = mime.extension(file.mimetype);
    let alumno = JSON.parse(request.body.alumno);
    let path : string = file.destination + alumno.legajo + "." + extension;

    fs.renameSync(file.path, path);

    alumno.foto = path.split("public/")[1];

    let contenido = JSON.stringify(alumno) + ",\r\n";
    // agrega texto
    fs.appendFile(path_archivo, contenido, (err:any)=>{
        if(err) throw("Error al intentar agregar en archivo con foto.");
        console.log("Archivo escrito con foto.");
        response.send("Archivo Alumno escrito - con foto.");
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
app.post('/alumnos/modificar', upload.single("foto"), (request:any, response:any)=>{
    let file = request.file;
    let extension = mime.extension(file.mimetype);
    let alumno_request = JSON.parse(request.body.alumno);
    let path : string = file.destination + alumno_request.legajo + "." + extension;

    fs.renameSync(file.path, path);

    alumno_request.foto = path.split("public/")[1];


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
            if(alumno.legajo == alumno_request.legajo){
                alumno.nombre = alumno_request.nombre;
                alumno.apellido = alumno_request.apellido;
                alumno.foto = alumno_request.foto;
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
        let path_foto : string = "public/";
        obj_array.forEach( (alumno:any) => {
            if(alumno.legajo != obj.legajo){
                //se agregan todos los alumnos, menos el que se quiere eliminar
                obj_array_eli.push(alumno);
            } else {
                path_foto += alumno.foto;
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

            if(path_foto != "" && path_foto != undefined) {
                fs.unlink(path_foto, (err:any) => {
                    if (err) throw err;
                    console.log(path_foto + ' fue borrado.');
                });    
            }

            response.send("Archivo alumno eliminado.");
        });
    });
});

app.listen(app.get('puerto'), ()=>{
    console.log('Servidor corriendo sobre puerto:', app.get('puerto'));
});