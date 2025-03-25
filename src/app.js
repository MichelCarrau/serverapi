const express = require('express');
const config = require ('./config');
const clientes = require('./modulos/clientes/rutas');
const app = express();

//configuración
app.set('port', config.app.port);

//Rutas
app.use('/api/clientes',clientes);

app.use('/api/usuarios',usuarios);

app.use('')

const alumno ={"nombre":"Marce", "cal":"8.9", "nacionalidad":"MX"}

//app.get('/api/alumno',function(req,res){
//    res.json(alumno)

app.use('/api/clientes', function(req,res){
    res.send('Hola soy cliente')
})

app.use('/api/usuarios', function(req,res){
    res.send('Hola soy usuarios')
})

//app.use('/api/eliminar', function(req,res){
//    res.send('Hola eliminaste un alumno')

module.exports = app;