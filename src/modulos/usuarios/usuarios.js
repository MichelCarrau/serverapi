const express = require('express');
const router = express.Router();
const controlador = require('../clientes/controlador');
const respuesta = require('../../red/respuestas2');
const controladorUsuarios = require('./controladorUsuarios');

// Ver todos los usuarios
router.get('/', async (req, res) => {
  const datos = await controlador.todos();
  res.send(datos); // más simple
});

// Ver un solo usuario
router.get('/:id', async (req, res) => {
  const dato = await controlador.uno(req.params.id);
  res.send(dato);
});

// Insertar usuario
router.post('/insertar', async (req, res) => {
  await controlador.agregar(req.body);
  res.send('Usuario insertado');
});

// Actualizar usuario
router.post('/actualizar', async (req, res) => {
  await controlador.actualizar(req.body);
  res.send('Usuario actualizado');
});

// Eliminar usuario
router.post('/eliminar', async (req, res) => {
  await controlador.eliminar(req.body);
  res.send('Usuario eliminado');
});


// Ruta para registrar un usuario
router.post('/registrar', async (req, res) => {
    try {
      const result = await controladorUsuarios.registrar(req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  // Ruta para login de usuario
  router.post('/login', async (req, res) => {
    try {
      const result = await controladorUsuarios.login(req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

module.exports = router;
