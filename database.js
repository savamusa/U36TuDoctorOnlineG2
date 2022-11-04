//Importar connect de modulo mongoose
const mongo = require('mongoose');
//Configurar Conexion
(async () => { //Crear funcion ASYNC y ejecutarla
    try {
        //Cadena de Conexion
        const bd = await mongo.connect("mongodb://localhost:27017/dbServer1");
        //Comprobar Conexion
        console.log("Conexión establecida en: " + bd.connection.name);
    } catch (error) {
        //Capturar Error
        console.error(error);
    }
})();