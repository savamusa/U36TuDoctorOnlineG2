const { Router } = require("express");
const routerPacientes = Router();
const controlPaciente = require("../controllers/controllerPacientes");

routerPacientes.get("/", (req, res) => {
    res.send("Funcionalidad Pacientes Corriendo!!");
});

routerPacientes.post("/new", controlPaciente.pacienteSave);

routerPacientes.get("/list", controlPaciente.pacientesList);

routerPacientes.get("/find/:id", controlPaciente.pacientesXid);

routerPacientes.put("/edit/:id", controlPaciente.pacienteEdit);

routerPacientes.delete("/delete/:id", controlPaciente.pacienteDelete);

module.exports = routerPacientes;