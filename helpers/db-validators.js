const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRoleValido =   async ( rol = '') => {
        const existeRol = await Role.findOne({ rol });
        if (!existeRol){
        throw new Error(`El rol: ${rol} no es correcto. Seleccione un rol Correcto.`);
        }
  }

  const mailExistente = async (email = '') => {

    //Verificamos si el correo ya existe
    const existeEmail = await Usuario.findOne({email});

    if(existeEmail) {
      throw new Error(`Este email ya esta registrado`);
    }
}; 



  module.exports = {
    esRoleValido,
    mailExistente
  }