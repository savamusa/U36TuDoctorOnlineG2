const { Router } = require("express");
const routerPacientes = Router();
const controlPaciente = require("../controllers/controllerPacientes");

routerPacientes.get("/", (req, res) => {
    res.send("Funcionalidad de Pacientes Activa");
});

routerPacientes.post("/new", controlPaciente.pacienteSave);

routerPacientes.get("/list", controlPaciente.pacientesList);

routerPacientes.get("/find/:documento", controlPaciente.pacientesXid);

module.exports = routerPacientes;