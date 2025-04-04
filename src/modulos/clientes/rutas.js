const express = require('express');
const router = express.Router();
const respuesta = require('../../red/respuestas2');
const controlador = require('./controlador');

//router.get('/', async function(req,res){
  //  res.send('Cliente API todo OK.')
   // try {
     //   const items = await controlador.todos();
       // respuesta.success(req, res, 200, items);
  //  } catch (error) {
   //     respuesta.error(req, res, 500, 'Error al obtener datos.', error);
//    }
//})

router.get('/', async function (req,res){
  try {
    const item = await controlador.todos()
    respuesta.success(req,res,200,item)
  } catch (error){
    respuesta.error(req,res,500,error)
  } 
  //const consult =controlador.todos()
    //respuesta.success(req,res,200,consult)
})

router.get('/:id', async function (req,res){
  try {
    const item = await controlador.uno(req.params.id)
    respuesta.success(req,res,200,item)
  } catch (error){
    respuesta.error(req,res,500,error)
  } 
  //Se copió y pegó y se pueso /:id
})



router.post('/agregar', async function (req, res) {
  try {
    const items = await controlador.agregar(req.body);
    if (req.body.id == 0) {
      mensaje = 'Datos insertados'
    } else {
      mensaje = 'Datos actualizados'
    }
    respuesta.success(req, res, 200, mensaje);

  } catch (error) {
    respuesta.error(req, res, 500, 'Error al obtener datos', error);
  }
})

router.post('/eliminar', async function (req, res) {
  try {
    const items = await controlador.eliminar(req.body);
    respuesta.success(req, res, 200, 'dato eliminado');
  } catch (error) {
    respuesta.error(req, res, 500, 'Error al obtener datos', error);
  }
})

router.post('/actualizar', async (req, res) => {
  try {
    if (!req.body.id) {
      return respuesta.error(req, res, 400, 'El id es requerido para actualizar');
    }
    await controlador.actualizar(req.body);
    respuesta.success(req, res, 200, 'Cliente actualizado');
  } catch (error) {
    respuesta.error(req, res, 500, error.message);
  }
});


router.post('/insertar', async function (req, res) {
  try {
    if (req.body.id != 0) {
      return respuesta.error(req, res, 400, 'Para insertar, el id debe ser 0');
    }
    const resultado = await controlador.agregar(req.body);
    respuesta.success(req, res, 200, 'Datos insertados correctamente');
  } catch (error) {
    respuesta.error(req, res, 500, 'Error al insertar datos', error);
  }
});


router.post('/login_user', async (req, res) => {
  const { email, password } = req.body;  // El servidor espera 'email' y 'password'

  // Verifica si ambos campos están presentes
  if (!email || !password) {
    return res.status(400).json({ message: "Correo electrónico y contraseña son requeridos" });
  }

  // Aquí va tu lógica para verificar el email y la contraseña
  // Ejemplo:
  const usuario = await controlador.obtenerUsuarioPorEmail(email);
  if (!usuario || usuario.password !== password) {
    return res.status(401).json({ message: "Correo electrónico o contraseña incorrectos" });
  }

  // Si todo es correcto, envía una respuesta exitosa
  res.status(200).json({ message: "Login exitoso", usuario });
});



module.exports = router