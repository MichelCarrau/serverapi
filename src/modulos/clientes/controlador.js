const bd = require('../../BD/mysql')

const TABLA = 'clientes'

function todos (){
    return bd.todos(TABLA)

}

function uno (id){
return bd.uno(TABLA,id )
}

function agregar (data){
return bd.agregar(TABLA,data) //Agregar datos
}

function agregar (body){
    return bd.agregar(TABLA, body)
}

function eliminar (body){
    return bd.eliminar(TABLA,body)
}

module.exports={
    todos,uno,agregar,eliminar
}