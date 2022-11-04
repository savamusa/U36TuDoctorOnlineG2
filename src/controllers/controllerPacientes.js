const Paciente = require("../models/Pacientes");


// Insertar Paciente
const pacienteSave = async (req, res) => {
    try {
        const paciente = new Paciente(req.body);
        await paciente.save();
        res.send("Paciente creado correctamente.");
    } catch (error) {
        console.error(error);
    }
};


// Listar Paciente
const pacientesList = async (req, res) => {
    try {
        const listaPacientes = await Paciente.find();
        res.status(200).send(listaPacientes);
    } catch (error) {
        console.error(error);
    }
}

// Consultar por Id
const pacientesXid = async (req, res) => {
    try {
        const id = req.params.id;
        if(id){
            const paciente = await Paciente.findById(id);
            if(paciente){
                res.status(200).send(paciente);
            }else{
                res.send("No existe el paciente.");
            }
        }
        else{
            res.send("No se puede tramitar la petición.");
        }
        } 
    catch (error) {
        console.error(error);
    }
}

// Actualizar Paciente
const pacienteEdit = async (req, res) =>{
    try {
        const id = req.params.id;
        const paciente = req.body;
        await Paciente.findByIdAndUpdate(id, paciente);
        res.send("Paciente actualizado.")
    } catch (error) {
        console.log(error);
    }
}

// Eliminar Paciente
const pacienteDelete = async (req, res) => {
    try {
        const id = req.params.id;
        await Paciente.findByIdAndDelete(id);
        res.send("Paciente fue eliminado correctamente.")
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    pacienteSave,
    pacientesList,
    pacientesXid,
    pacienteEdit,
    pacienteDelete
}