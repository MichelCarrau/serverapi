const express = require('express');
const config = require('./config');
const clientes = require('./modulos/clientes/rutas');
const usuarios = require('./modulos/usuarios/usuarios');
const app = express();
const cors = require('cors');
const mysqlUsuario = require('./BD/mysqlUsuario');
mysqlUsuario.conMysql(); // 🔧 Llamar para inicializar la conexión


app.use(cors());
app.use(express.json());


// configuración
app.set('port', config.app.port);

// rutas
app.use('/api/clientes', clientes);
app.use('/api/usuarios', usuarios);



// exportar el app
module.exports = app;