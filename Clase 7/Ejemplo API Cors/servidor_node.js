"use strict";
var express = require('express');
var app = express();
app.set('puerto', 9876);
app.get('/', function (request, response) {
    response.send('GET - servidor NodeJS');
});
var fs = require('fs');
app.use(express.json());
var path_archivo = "./archivos/productos.txt";
var path_archivo_foto = "./archivos/productos_fotos.txt";
var multer = require('multer');
var mime = require('mime-types');
var storage = multer.diskStorage({
    destination: "public/fotos/",
});
var upload = multer({
    storage: storage
});
var mysql = require('mysql');
var myconn = require('express-myconnection');
var db_options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'productos_node'
};
app.use(myconn(mysql, db_options, 'single'));
var cors = require("cors");
app.use(cors());
app.use(express.static("public"));
app.get('/productos', function (request, response) {
    fs.readFile(path_archivo, "UTF-8", function (err, archivo) {
        if (err)
            throw ("Error al intentar leer el archivo.");
        console.log("Archivo leído.");
        var prod_array = archivo.split(",\r\n");
        response.send(JSON.stringify(prod_array));
    });
});
app.post('/productos', function (request, response) {
    var dato = request.body;
    var contenido = JSON.stringify(dato) + ",\r\n";
    fs.appendFile(path_archivo, contenido, function (err) {
        if (err)
            throw ("Error al intentar agregar en archivo.");
        console.log("Archivo escrito.");
        response.send("Archivo producto escrito.");
    });
});
app.post('/productos/modificar', function (request, response) {
    var obj = request.body;
    fs.readFile(path_archivo, "UTF-8", function (err, archivo) {
        if (err)
            throw ("Error al intentar leer el archivo.");
        var prod_array = archivo.split(",\r\n");
        var obj_array = [];
        prod_array.forEach(function (prod_str) {
            if (prod_str != "" && prod_str != undefined) {
                obj_array.push(JSON.parse(prod_str));
            }
        });
        var obj_array_modif = [];
        obj_array.forEach(function (prod) {
            if (prod.codigo == obj.codigo) {
                prod.marca = obj.marca;
                prod.precio = obj.precio;
            }
            obj_array_modif.push(prod);
        });
        var productos_string = "";
        obj_array_modif.forEach(function (prod) {
            productos_string += JSON.stringify(prod) + ",\r\n";
        });
        fs.writeFile(path_archivo, productos_string, function (err) {
            if (err)
                throw ("Error al intentar escribir en archivo.");
            console.log("Archivo modificado.");
            response.send("Archivo producto modificado.");
        });
    });
});
app.post('/productos/eliminar', function (request, response) {
    var obj = request.body;
    fs.readFile(path_archivo, "UTF-8", function (err, archivo) {
        if (err)
            throw ("Error al intentar leer el archivo.");
        var prod_array = archivo.split(",\r\n");
        var obj_array = [];
        prod_array.forEach(function (prod_str) {
            if (prod_str != "" && prod_str != undefined) {
                obj_array.push(JSON.parse(prod_str));
            }
        });
        var obj_array_eli = [];
        obj_array.forEach(function (prod) {
            if (prod.codigo != obj.codigo) {
                obj_array_eli.push(prod);
            }
        });
        var productos_string = "";
        obj_array_eli.forEach(function (prod) {
            productos_string += JSON.stringify(prod) + ",\r\n";
        });
        fs.writeFile(path_archivo, productos_string, function (err) {
            if (err)
                throw ("Error al intentar escribir en archivo.");
            console.log("Archivo eliminado.");
            response.send("Archivo producto eliminado.");
        });
    });
});
app.get('/productos_fotos', function (request, response) {
    fs.readFile(path_archivo_foto, "UTF-8", function (err, archivo) {
        if (err)
            throw ("Error al intentar leer el archivo con foto.");
        console.log("Archivo leído con foto.");
        var prod_array = archivo.split(",\r\n");
        response.send(JSON.stringify(prod_array));
    });
});
app.post('/productos_fotos', upload.single("foto"), function (request, response) {
    var file = request.file;
    var extension = mime.extension(file.mimetype);
    var obj = JSON.parse(request.body.obj);
    var path = file.destination + obj.codigo + "." + extension;
    fs.renameSync(file.path, path);
    obj.path = path.split("public/")[1];
    var contenido = JSON.stringify(obj) + ",\r\n";
    fs.appendFile(path_archivo_foto, contenido, function (err) {
        if (err)
            throw ("Error al intentar agregar en archivo con foto.");
        console.log("Archivo escrito con foto.");
        response.send("Archivo producto escrito - con foto.");
    });
});
app.post('/productos_fotos/modificar', upload.single("foto"), function (request, response) {
    var file = request.file;
    var extension = mime.extension(file.mimetype);
    var obj = JSON.parse(request.body.obj);
    var path = file.destination + obj.codigo + "." + extension;
    fs.renameSync(file.path, path);
    obj.path = path.split("public/")[1];
    fs.readFile(path_archivo_foto, "UTF-8", function (err, archivo) {
        if (err)
            throw ("Error al intentar leer el archivo con foto.");
        var prod_array = archivo.split(",\r\n");
        var obj_array = [];
        prod_array.forEach(function (prod_str) {
            if (prod_str != "" && prod_str != undefined) {
                obj_array.push(JSON.parse(prod_str));
            }
        });
        var obj_array_modif = [];
        obj_array.forEach(function (prod) {
            if (prod.codigo == obj.codigo) {
                prod.marca = obj.marca;
                prod.precio = obj.precio;
            }
            obj_array_modif.push(prod);
        });
        var productos_string = "";
        obj_array_modif.forEach(function (prod) {
            productos_string += JSON.stringify(prod) + ",\r\n";
        });
        fs.writeFile(path_archivo_foto, productos_string, function (err) {
            if (err)
                throw ("Error al intentar escribir en archivo.");
            console.log("Archivo modificado con foto.");
            response.send("Archivo producto modificado con foto.");
        });
    });
});
app.post('/productos_fotos/eliminar', function (request, response) {
    var obj = request.body;
    fs.readFile(path_archivo_foto, "UTF-8", function (err, archivo) {
        if (err)
            throw ("Error al intentar leer el archivo con foto.");
        var prod_array = archivo.split(",\r\n");
        var obj_array = [];
        prod_array.forEach(function (prod_str) {
            if (prod_str != "" && prod_str != undefined) {
                obj_array.push(JSON.parse(prod_str));
            }
        });
        var obj_array_eli = [];
        var path_foto = "public/";
        obj_array.forEach(function (prod) {
            if (prod.codigo != obj.codigo) {
                obj_array_eli.push(prod);
            }
            else {
                path_foto += prod.path;
            }
        });
        var productos_string = "";
        if (path_foto !== "") {
            obj_array_eli.forEach(function (prod) {
                productos_string += JSON.stringify(prod) + ",\r\n";
            });
            fs.writeFile(path_archivo_foto, productos_string, function (err) {
                if (err)
                    throw ("Error al intentar escribir en archivo con foto.");
                console.log("Archivo eliminado con foto.");
                fs.unlink(path_foto, function (err) {
                    if (err)
                        throw err;
                    console.log(path_foto + ' fue borrado.');
                });
                response.send("Archivo producto con foto eliminado.");
            });
        }
    });
});
app.post('/test_fotos_multiples', upload.array("fotos"), function (request, response) {
    console.log(request.files);
    var files = request.files;
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var extension = mime.extension(file.mimetype);
        var path = file.destination + "__foto__" + i + "." + extension;
        fs.renameSync(file.path, path);
    }
    response.send("Archivos múltiples subidos exitosamente!!!");
});
app.get('/productos_bd', function (request, response) {
    request.getConnection(function (err, conn) {
        if (err)
            throw ("Error al conectarse a la base de datos.");
        conn.query("select * from productos", function (err, rows) {
            if (err)
                throw ("Error en consulta de base de datos.");
            response.send(JSON.stringify(rows));
        });
    });
});
app.post('/productos_bd', upload.single("foto"), function (request, response) {
    var file = request.file;
    var extension = mime.extension(file.mimetype);
    var obj = JSON.parse(request.body.obj);
    var path = file.destination + obj.codigo + "." + extension;
    fs.renameSync(file.path, path);
    obj.path = path.split("public/")[1];
    request.getConnection(function (err, conn) {
        if (err)
            throw ("Error al conectarse a la base de datos.");
        conn.query("insert into productos set ?", [obj], function (err, rows) {
            if (err) {
                console.log(err);
                throw ("Error en consulta de base de datos.");
            }
            response.send("Producto agregado a la bd.");
        });
    });
});
app.post('/productos_bd/modificar', upload.single("foto"), function (request, response) {
    var file = request.file;
    var extension = mime.extension(file.mimetype);
    var obj = JSON.parse(request.body.obj);
    var path = file.destination + obj.codigo + "." + extension;
    fs.renameSync(file.path, path);
    obj.path = path.split("public/")[1];
    var obj_modif = {};
    obj_modif.marca = obj.marca;
    obj_modif.precio = obj.precio;
    obj_modif.path = obj.path;
    request.getConnection(function (err, conn) {
        if (err)
            throw ("Error al conectarse a la base de datos.");
        conn.query("update productos set ? where codigo = ?", [obj_modif, obj.codigo], function (err, rows) {
            if (err) {
                console.log(err);
                throw ("Error en consulta de base de datos.");
            }
            response.send("Producto modificado en la bd.");
        });
    });
});
app.post('/productos_bd/eliminar', function (request, response) {
    var obj = request.body;
    var path_foto = "public/";
    request.getConnection(function (err, conn) {
        if (err)
            throw ("Error al conectarse a la base de datos.");
        conn.query("select path from productos where codigo = ?", [obj.codigo], function (err, result) {
            if (err)
                throw ("Error en consulta de base de datos.");
            path_foto += result[0].path;
        });
    });
    request.getConnection(function (err, conn) {
        if (err)
            throw ("Error al conectarse a la base de datos.");
        conn.query("delete from productos where codigo = ?", [obj.codigo], function (err, rows) {
            if (err) {
                console.log(err);
                throw ("Error en consulta de base de datos.");
            }
            fs.unlink(path_foto, function (err) {
                if (err)
                    throw err;
                console.log(path_foto + ' fue borrado.');
            });
            response.send("Producto eliminado de la bd.");
        });
    });
});
app.listen(app.get('puerto'), function () {
    console.log('Servidor corriendo sobre puerto:', app.get('puerto'));
});
//# sourceMappingURL=servidor_node.js.map