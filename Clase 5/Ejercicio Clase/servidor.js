var express = require('express');
var app = express();
var path = require('path');
app.set('puerto', 9876);
// donde cargar los archivos estaticos (css, scripts, etc)
app.use(express.static('./public'));
app.get('/', function (request, response) {
    // fs.readFile("./index.html", "UTF-8", (err:any, archivo:any)=>{
    //     if(err) throw("Error al intentar leer el archivo.");
    //     response.send(archivo);
    // });
    response.sendFile(path.resolve(__dirname, 'index.html'));
});
//AGREGO FILE SYSTEM
var fs = require('fs');
//AGREGO JSON
app.use(express.json());
//INDICO RUTA HACIA EL ARCHIVO
var path_archivo = "./BACKEND/archivos/alumnos.txt";
//AGREGO MULTER
var multer = require('multer');
//AGREGO MIME-TYPES
var mime = require('mime-types');
//AGREGO STORAGE
var storage = multer.diskStorage({
    destination: "public/fotos/"
});
var upload = multer({
    storage: storage
});
//CREO LAS RUTAS PARA EL CRUD
//LISTAR
app.get('/alumnos', function (request, response) {
    fs.readFile(path_archivo, "UTF-8", function (err, archivo) {
        if (err)
            throw ("Error al intentar leer el archivo.");
        console.log("Archivo leído.");
        var alumnos_array = archivo.split(',\r\n');
        response.send(JSON.stringify(alumnos_array));
    });
});
//AGREGAR
app.post('/alumnos', upload.single("foto"), function (request, response) {
    var file = request.file;
    var extension = mime.extension(file.mimetype);
    var alumno = JSON.parse(request.body.alumno);
    var path = file.destination + alumno.legajo + "." + extension;
    fs.renameSync(file.path, path);
    alumno.foto = path.split("public/")[1];
    var contenido = JSON.stringify(alumno) + ",\r\n";
    // agrega texto
    fs.appendFile(path_archivo, contenido, function (err) {
        if (err)
            throw ("Error al intentar agregar en archivo con foto.");
        console.log("Archivo escrito con foto.");
        response.send("Archivo Alumno escrito - con foto.");
    });
});
//VERIFICAR
app.post('/alumnos/verificar', function (request, response) {
    var dato = request.body;
    fs.readFile(path_archivo, "UTF-8", function (err, archivo) {
        if (err)
            throw ("Error al intentar leer el archivo.");
        var alumnos_array = archivo.split(",\r\n");
        var obj_array = [];
        alumnos_array.forEach(function (alumno_str) {
            if (alumno_str != "" && alumno_str != undefined) {
                obj_array.push(JSON.parse(alumno_str));
            }
        });
        var alumnoRtn = {};
        obj_array.forEach(function (alumno) {
            if (alumno.legajo == dato.legajo) {
                alumnoRtn = alumno;
            }
        });
        response.send(JSON.stringify(alumnoRtn));
    });
});
//MODIFICAR
app.post('/alumnos/modificar', upload.single("foto"), function (request, response) {
    var file = request.file;
    var extension = mime.extension(file.mimetype);
    var alumno_request = JSON.parse(request.body.alumno);
    var path = file.destination + alumno_request.legajo + "." + extension;
    fs.renameSync(file.path, path);
    alumno_request.foto = path.split("public/")[1];
    fs.readFile(path_archivo, "UTF-8", function (err, archivo) {
        if (err)
            throw ("Error al intentar leer el archivo.");
        var alumnos_array = archivo.split(",\r\n");
        var obj_array = [];
        alumnos_array.forEach(function (alumno_str) {
            if (alumno_str != "" && alumno_str != undefined) {
                obj_array.push(JSON.parse(alumno_str));
            }
        });
        var alumnoRtn = {};
        var obj_array_modif = [];
        obj_array.forEach(function (alumno) {
            if (alumno.legajo == alumno_request.legajo) {
                alumno.nombre = alumno_request.nombre;
                alumno.apellido = alumno_request.apellido;
                alumno.foto = alumno_request.foto;
                alumnoRtn = alumno;
            }
            obj_array_modif.push(alumno);
        });
        var alumnos_string = "";
        obj_array_modif.forEach(function (alumno) {
            alumnos_string += JSON.stringify(alumno) + ",\r\n";
        });
        //escribe texto
        fs.writeFile(path_archivo, alumnos_string, function (err) {
            if (err)
                throw ("Error al intentar escribir en archivo.");
            console.log("Archivo modificado.");
            response.send(JSON.stringify(alumnoRtn));
        });
    });
});
//ELIMINAR
app.post('/alumnos/eliminar', function (request, response) {
    var obj = request.body;
    fs.readFile(path_archivo, "UTF-8", function (err, archivo) {
        if (err)
            throw ("Error al intentar leer el archivo.");
        var alumnos_array = archivo.split(",\r\n");
        var obj_array = [];
        alumnos_array.forEach(function (alumno_str) {
            if (alumno_str != "" && alumno_str != undefined) {
                obj_array.push(JSON.parse(alumno_str));
            }
        });
        var obj_array_eli = [];
        var path_foto = "public/";
        obj_array.forEach(function (alumno) {
            if (alumno.legajo != obj.legajo) {
                //se agregan todos los alumnos, menos el que se quiere eliminar
                obj_array_eli.push(alumno);
            }
            else {
                path_foto += alumno.foto;
            }
        });
        var alumnos_string = "";
        obj_array_eli.forEach(function (alumno) {
            alumnos_string += JSON.stringify(alumno) + ",\r\n";
        });
        //escribe texto
        fs.writeFile(path_archivo, alumnos_string, function (err) {
            if (err)
                throw ("Error al intentar escribir en archivo.");
            console.log("Archivo eliminado.");
            if (path_foto != "" && path_foto != undefined) {
                fs.unlink(path_foto, function (err) {
                    if (err)
                        throw err;
                    console.log(path_foto + ' fue borrado.');
                });
            }
            response.send("Archivo alumno eliminado.");
        });
    });
});
app.listen(app.get('puerto'), function () {
    console.log('Servidor corriendo sobre puerto:', app.get('puerto'));
});
