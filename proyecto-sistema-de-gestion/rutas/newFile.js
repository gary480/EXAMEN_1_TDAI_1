const clientemodel = require('../models/cliente');
const { rutas } = require('./clienterutas');

//enponit  eliminar
rutas.delete('/eliminar/:id', async(req, res) => {
    try {
        const eliminarcliente = await clientemodel.findByIdAndDelete(req.params.id);
        if (!eliminarcliente)
            return res.status(404).json({ mensaje: 'Cliente no encontrado' });

        else
            return res.json({ mensaje: 'Cliente eliminado' });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
});