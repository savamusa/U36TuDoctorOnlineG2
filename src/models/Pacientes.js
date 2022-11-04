const mongo = require("mongoose");

const PacientesSchema = mongo.Schema(
    {
        documento: {
            type: String,
            required: true,
            unique: true
        },
        nombre: {
            type: String,
            required: true
        },
        apellido: {
            type: String,
            required: true
        },
        telefono: {
            type: String,
            required: true
        },
        ciudad: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Pacientes = new mongo.model("Paciente", PacientesSchema);
module.exports = Pacientes;