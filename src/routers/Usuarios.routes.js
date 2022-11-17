const Router = require("express");
const routerUsuario = Router();
const controlUsuario = require("../controllers/controllerUsuarios");

routerUsuario.get("/", (req, res) => {
    res.send("API Usuario Activa!!");
});

routerUsuario.post("/new", controlUsuario.usuarioSave);

module.exports = routerUsuario;