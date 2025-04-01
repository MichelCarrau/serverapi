const bd = require('../../BD/mysql')

const TABLA = 'clientes'

function todos (){
    return bd.todos(TABLA)

}

function uno (){

}

function agregar (data){
return bd.agregar(TABLA,data) //Agregar datos
}

function eliminar (){

}

module.exports={
    todos,uno,agregar,eliminar
}