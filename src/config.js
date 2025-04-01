require('dotenv').config();

module.exports={
    app:{
        port:process.env.PORT
    },
    mysql : {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PW,
        database: process.env.MYSQL_BD

    //mysql:{
      //  host:process.env.MYSQL_HOST || 'localhost',
        //user:process.env.MYSQL_USER || 'root',
        //password:process.env.MYSQL_PW || '',
        //database:process.env.MYSQL_BD || 'actividad'
    }
}