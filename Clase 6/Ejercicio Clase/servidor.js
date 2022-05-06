"use strict";
const express = require('express');
const app = express();
const path = require('path');
app.set('puerto', 9876);
// donde cargar los archivos estaticos (css, scripts, etc)
app.use(express.static('./public'));
app.get('/', (request, response) => {
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
//AGREGO MYSQL y EXPRESS-MYCONNECTION
const mysql = require('mysql');
const myconn = require('express-myconnection');
const db_options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'alumno_pdo'
};
//AGREGO MW 
app.use(myconn(mysql, db_options, 'single'));
//#################################################################################################
//CREO LAS RUTAS PARA EL CRUD
//#################################################################################################
//LISTAR
app.get('/alumnos', (request, response) => {
    request.getConnection((err, conn) => {
        if (err)
            throw ("Error al conectarse a la base de datos.");
        conn.query("SELECT * FROM alumnos", (err, rows) => {
            if (err)
                throw ("Error en consulta de base de datos.");
            //response.json(rows);
            response.send(JSON.stringify(rows));
        });
    });
});
//AGREGAR
app.post('/alumnos', upload.single("foto"), (request, response) => {
    let file = request.file;
    let extension = mime.extension(file.mimetype);
    let alumno = JSON.parse(request.body.alumno);
    let path = file.destination + alumno.legajo + "." + extension;
    fs.renameSync(file.path, path);
    alumno.foto = path.split("public/")[1];
    request.getConnection((err, conn) => {
        if (err)
            throw ("Error al conectarse a la base de datos.");
        conn.query("INSERT INTO alumnos SET ?", [alumno], (err, rows) => {
            if (err) {
                console.log(err);
                throw ("Error en consulta de base de datos.");
            }
            response.send("Alumno agregado a la bd.");
        });
    });
});
//VERIFICAR
app.post('/alumnos/verificar', (request, response) => {
    let dato = request.body;
    let alumno = {};
    request.getConnection((err, conn) => {
        if (err)
            throw ("Error al conectarse a la base de datos.");
        //obtengo el path de la foto del alumno a ser eliminado
        conn.query("SELECT * FROM alumnos WHERE legajo = ?", [dato.legajo], (err, result) => {
            if (err)
                throw ("Error en consulta de base de datos.");
            if (result.length) {
                alumno = result[0];
            }
            response.send(JSON.stringify(alumno));
        });
    });
});
//MODIFICAR
app.post('/alumnos/modificar', upload.single("foto"), (request, response) => {
    let file = request.file;
    let extension = mime.extension(file.mimetype);
    let alumno_request = JSON.parse(request.body.alumno);
    let path = file.destination + alumno_request.legajo + "." + extension;
    fs.renameSync(file.path, path);
    alumno_request.foto = path.split("public/")[1];
    let alumno_modif = {};
    //para excluir la pk (legajo)
    alumno_modif.nombre = alumno_request.nombre;
    alumno_modif.apellido = alumno_request.apellido;
    alumno_modif.foto = alumno_request.foto;
    request.getConnection((err, conn) => {
        if (err)
            throw ("Error al conectarse a la base de datos.");
        conn.query("UPDATE alumnos SET ? WHERE legajo = ?", [alumno_modif, alumno_request.legajo], (err, rows) => {
            if (err) {
                console.log(err);
                throw ("Error en consulta de base de datos.");
            }
            alumno_modif.legajo = alumno_request.legajo; // solo lo agrego para mostrarlo en consola en el front
            response.send(JSON.stringify(alumno_modif));
        });
    });
});
//ELIMINAR
app.post('/alumnos/eliminar', (request, response) => {
    let obj = request.body;
    let path_foto = "public/";
    request.getConnection((err, conn) => {
        if (err)
            throw ("Error al conectarse a la base de datos.");
        //obtengo el path de la foto del alumno a ser eliminado
        conn.query("SELECT foto FROM alumnos WHERE legajo = ?", [obj.legajo], (err, result) => {
            if (err)
                throw ("Error en consulta de base de datos.");
            //console.log(result[0].path);
            path_foto += result[0].foto;
        });
    });
    request.getConnection((err, conn) => {
        if (err)
            throw ("Error al conectarse a la base de datos.");
        conn.query("DELETE FROM alumnos WHERE legajo = ?", [obj.legajo], (err, rows) => {
            if (err) {
                console.log(err);
                throw ("Error en consulta de base de datos.");
            }
            fs.unlink(path_foto, (err) => {
                if (err)
                    throw err;
                console.log(path_foto + ' fue borrado.');
            });
            response.send("Alumno eliminado de la bd.");
        });
    });
});
app.listen(app.get('puerto'), () => {
    console.log('Servidor corriendo sobre puerto:', app.get('puerto'));
});
//# sourceMappingURL=servidor.js.map