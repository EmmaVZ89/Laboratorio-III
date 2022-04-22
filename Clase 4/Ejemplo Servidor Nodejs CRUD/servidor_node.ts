
const express = require('express');

const app = express();

app.set('puerto', 9876);

app.get('/', (request:any, response:any)=>{
    response.send('GET - servidor NodeJS');
});

//AGREGO FILE SYSTEM
const fs = require('fs');

//AGREGO JSON
app.use(express.json());

//INDICO RUTA HACIA EL ARCHIVO
const path_archivo = "./archivos/productos.txt";


//CREO LAS RUTAS PARA EL CRUD

//LISTAR
app.get('/productos', (request:any, response:any)=>{
    
    fs.readFile(path_archivo, "UTF-8", (err:any, archivo:any)=>{

        if(err) throw("Error al intentar leer el archivo.");

        console.log("Archivo leído.");

        let prod_array = archivo.split(",\r\n");

        response.send(JSON.stringify(prod_array));
    });
});

//AGREGAR
app.post('/productos', (request:any, response:any)=>{

    let dato = request.body;
    let contenido = JSON.stringify(dato) + ",\r\n";

    //agrega texto
    fs.appendFile(path_archivo, contenido, (err:any)=>{

        if(err) throw("Error al intentar agregar en archivo.");

        console.log("Archivo escrito.");

        response.send("Archivo producto escrito.");
    });

});

//MODIFICAR
app.post('/productos/modificar', (request:any, response:any)=>{

    let obj = request.body;

    fs.readFile(path_archivo, "UTF-8", (err:any, archivo:any)=>{

        if(err) throw("Error al intentar leer el archivo.");

        let prod_array = archivo.split(",\r\n");
        let obj_array : Array<any> = [];

        prod_array.forEach( (prod_str:any) => {

            if(prod_str != "" && prod_str != undefined){

                obj_array.push(JSON.parse(prod_str));
            }
        });

        let obj_array_modif : Array<any> = [];

        obj_array.forEach( (prod:any) => {
            
            if(prod.codigo == obj.codigo){
                
                prod.marca = obj.marca;
                prod.precio = obj.precio;
            }

            obj_array_modif.push(prod);
        });

        let productos_string : string = "";

        obj_array_modif.forEach( (prod:any) => {

            productos_string += JSON.stringify(prod) + ",\r\n";
        });

        //escribe texto
        fs.writeFile(path_archivo, productos_string, (err:any)=>{

            if(err) throw("Error al intentar escribir en archivo.");

            console.log("Archivo modificado.");

            response.send("Archivo producto modificado.");
        });
    });
});

//ELIMINAR
app.post('/productos/eliminar', (request:any, response:any)=>{

    let obj = request.body;

    fs.readFile(path_archivo, "UTF-8", (err:any, archivo:any)=>{

        if(err) throw("Error al intentar leer el archivo.");

        let prod_array = archivo.split(",\r\n");
        let obj_array : Array<any> = [];

        prod_array.forEach( (prod_str:any) => {

            if(prod_str != "" && prod_str != undefined){

                obj_array.push(JSON.parse(prod_str));
            }
        });

        let obj_array_eli : Array<any> = [];

        obj_array.forEach( (prod:any) => {
            
            if(prod.codigo != obj.codigo){
                //se agregan todos los productos, menos el que se quiere eliminar
                obj_array_eli.push(prod);
            }           
        });

        let productos_string : string = "";

        obj_array_eli.forEach( (prod:any) => {

            productos_string += JSON.stringify(prod) + ",\r\n";
        });

        //escribe texto
        fs.writeFile(path_archivo, productos_string, (err:any)=>{

            if(err) throw("Error al intentar escribir en archivo.");

            console.log("Archivo eliminado.");

            response.send("Archivo producto eliminado.");
        });
    });
});


app.listen(app.get('puerto'), ()=>{
    console.log('Servidor corriendo sobre puerto:', app.get('puerto'));
});