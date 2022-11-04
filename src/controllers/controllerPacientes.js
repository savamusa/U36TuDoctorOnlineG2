const Paciente = require("../models/Pacientes");


// Crear Paciente
const pacienteSave = async (req, res) => {
    try {
        const paciente = new Paciente(req.body);
        await paciente.save();
        res.send("Paciente creado correctamente.");
    } catch (error) {
        console.error(error);
    }
};


//Listar Paciente
const pacientesList = async (req, res) => {
    try {
        const listaPacientes = await Paciente.find();
        res.status(200).send(listaPacientes);
    } catch (error) {
        console.error(error);
    }
}

//Consultar por Id
const pacientesXid = async (req, res) =>{
    try {
        const id = req.params.documento;
        if (id) {
            const paciente = await Paciente.findById(id);
            res.status(200).send(paciente);
        } else {
            res.send("No existe el paciente.");
        }
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    pacienteSave,
    pacientesList,
    pacientesXid
}