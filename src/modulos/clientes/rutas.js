const express = require('express');
const router = express.Router();

router.get('/',function(req,res){
    res.send('Cliente api todo ok')
})

router.get('/update',function(req,res){
    res.send('Cliente actualizado')
})

module.exports = router