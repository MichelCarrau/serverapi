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

router.post('/agregar',function(req,res){
  const agregar = controlador.agregar(req.body) //Recolectamos lo que tenemos de id, nombre, apellido, se almacena y se agrega
  
  respuesta.success(req,res,200,agregar) //Que regrese lo del controlador con funcion agregar

})

module.exports = router