const app = require("./app");
var port = 4000;
const mongo = require("./database");
const rutasPacientes = require("./src/routers/Pacientes.routes");
const rutasUsuario = require("./src/routers/Usuarios.routes");
const cors = require("cors");

app.use(cors());

app.listen(port, ()=>{
    console.log("Servidor activo en el puerto: " +port);
});

app.get('/', (req, res)=>{
    res.send('Bienvenido a tu Doctor Online!');
});

//CONFIGURACION DE RUTAS
app.use("/pacientes", rutasPacientes);
app.use("/usuarios", rutasUsuario);