const mysql = require('mysql2/promise');
const config = require('../config');

const dbconfig = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database
};

let conexion;

async function conMysql() {
  try {
    conexion = await mysql.createConnection(dbconfig);
    console.log('BD conectada');
  } catch (error) {
    console.error('BD Error:', error);
  }
}

// Funciones para interactuar con la base de datos
async function insertar(tabla, data) {
  const [result] = await conexion.query(`INSERT INTO ${tabla} SET ?`, [data]);
  return result;
}

async function unoByEmail(tabla, email) {
    const [result] = await conexion.query(`SELECT * FROM ${tabla} WHERE email = ?`, [email]);
    return result[0];
  }
  


module.exports = { conMysql, insertar, unoByEmail };
