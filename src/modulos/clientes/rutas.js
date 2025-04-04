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

module.exports = router