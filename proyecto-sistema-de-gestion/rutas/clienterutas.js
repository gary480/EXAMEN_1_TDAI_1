const express = require('express')
const rutas = express.Router();
const clientemodel = require('../models/cliente');

//end point traer todo
rutas.get('/traercliente', async(req, res) => {
    try {

        const cliente = await clientemodel.find();
        res.json(cliente);

    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
});
//endpoint Crear
rutas.post('/agregar', async(req, res) => {
    const cliente = new clientemodel({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        edad: req.body.edad,
        producto: req.body.producto,
        ci: req.body.ci
    })
    try {
        const nuevocliente = await cliente.save();
        res.status(201).json(nuevocliente);
    } catch (error) {
        res.status(400).json({ mensaje: error.message })
    }
});
//endpoint Editar
rutas.put('/actualizar/:id', async(req, res) => {
        try {
            const clienteactualizado = await clientemodel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!clienteactualizado)
                return res.status(404).json({ mensaje: 'cliente no encontrado' });
            else
                return res.status(201).json(DatosActualizados);

        } catch (error) {
            res.status(400).json({ mensaje: error.message })
        }
    })
    //enponit  eliminar
rutas.delete('/eliminar/:id', async(req, res) => {
    try {
        const eliminarcliente = await clientemodel.findByIdAndDelete(req.params.id);
        if (!eliminarcliente)
            return res.status(404).json({ mensaje: 'Cliente no encontrado' });
        else
            return res.json({ mensaje: 'Cliente eliminado' });
    } catch (error) {
        res.status(500).json({ mensaje: error.message })
    }
});




module.exports = rutas;