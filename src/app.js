const express = require('express');
const config = require('./config');
const clientes = require('./modulos/clientes/rutas');
const usuarios = require('./modulos/usuarios/usuarios');
const app = express();

app.use(express.json());


// configuración
app.set('port', config.app.port);

// rutas
app.use('/api/clientes', clientes);
app.use('/api/usuarios', usuarios);


app.use('/api/clientes', function(req, res) {
    res.send('Hola desde clientes')
});


// exportar el app
module.exports = app;