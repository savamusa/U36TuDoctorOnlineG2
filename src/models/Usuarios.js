const mongo = require("mongoose");

const UsuarioSchema = mongo.Schema(
    {
        documento: {
            type: String,
            required: true,
        },
        nombre: {
            type: String,
            required: true
        },
        apellido: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        telefono: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Usuario = new mongo.model("Usuario", UsuarioSchema);
module.exports = Usuario;