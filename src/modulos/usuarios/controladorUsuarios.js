const db = require('../../BD/mysqlUsuario');
const bcrypt = require('bcryptjs');
const TABLA = 'usuarios'; // Nombre de la tabla de usuarios en tu base de datos

// Encriptar contraseña
async function encryptPassword(password) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

// Comparar contraseñas
async function comparePassword(password, hash) {
  return await bcrypt.compare(password, hash);
}

// Registrar un usuario
async function registrar(data) {
    if (!data.password || !data.email) {
        throw new Error('Campos incompletos');
      }
      
      const encryptedPassword = await encryptPassword(data.password);
      const userData = {
        email: data.email,
        password: encryptedPassword
      };
      

  const result = await db.insertar(TABLA, userData);
  return result;
}

// Login de usuario
async function login(data) {
    if (!data.email || !data.password) {
        throw new Error('Correo electrónico y contraseña son requeridos');
      }
      
      const user = await db.unoByEmail(TABLA, data.email);
      if (!user) {
        throw new Error('Usuario no encontrado');
      }
      
      const isMatch = await comparePassword(data.password, user.password);
      if (!isMatch) {
        throw new Error('Contraseña incorrecta');
      }
      
      return user;
      
}

module.exports = { registrar, login };

//Se encarga que las operaciones de la base de datos sobre usuarios