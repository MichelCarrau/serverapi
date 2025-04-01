const mysql = require('mysql');
const config = require('../config');

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}
console.log(dbconfig) //concolelog y nuestro objeto


function conMysql() {
    conexion = mysql.createConnection(dbconfig);

    conexion.connect((err) => {
        if (err) {
            console.log('[bd err]', err);
            setTimeout(conMysql, 200)
        } else {
            console.log('BD conectado')
        }
    })
    conexion.on('error',err =>{
        console.log('[bd err]', err);
        if(err.code ==='PROTOCOL_CONNECTION_LOST' ){
            conMysql()
        }else{
            throw err;
        }
    })

}

//conMysql()

function todos(tabla) {
    const resp = 'Estás consultando la tabla de: ' + tabla
    return(resp)
}