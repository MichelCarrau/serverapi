const bd = require('../../BD/mysql')

const TABLA = 'clientes'

function todos (){
    return bd.todos(TABLA)

}

function uno (id){
return bd.uno(TABLA,id )
}

function agregar (data){
return bd.agregar(TABLA,data)
}

function insertar(data) {
    return bd.insertar(TABLA, data);
}

function actualizar(data) {
    return bd.actualizar(TABLA, data);
}


function eliminar (body){
    return bd.eliminar(TABLA,body)
}

module.exports={
    todos,uno,agregar,eliminar,actualizar,insertar
}