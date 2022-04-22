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
app.listen(app.get('puerto'), function () {
    console.log('Servidor corriendo sobre puerto:', app.get('puerto'));
});
//# sourceMappingURL=servidor_node.js.map