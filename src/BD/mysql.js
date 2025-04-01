

function todos (tabla){
    const mensaje = 'Soy consulta todos y esta es la tabla a consultar:'+tabla
return mensaje
}

function uno (tabla,id){

}

function agregar (tabla,data){
    const datos = {
        tabla:tabla,
        data:data,
    }
    return (datos)

}

function eliminar (tabla,id){

}

module.exports={
    todos,uno,agregar,eliminar
}