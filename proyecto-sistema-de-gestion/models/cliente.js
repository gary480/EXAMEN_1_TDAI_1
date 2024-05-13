const mongoose = require('mongoose');
//definir esquema
const clienteSchema = new mongoose.Schema({

    nombre: String,
    apellidos: String,
    edad: Number,
    producto: String,
    ci: Number
});
const clientemodel = mongoose.model('cliente', clienteSchema, 'clientes');
module.exports = clientemodel;