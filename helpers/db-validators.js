const Role = require('../models/role'); 

const esRoleValido =   async ( rol = '') => {
        const existeRol = await Role.findOne({ rol });
        if (!existeRol){
        throw new Error(`El rol: ${rol} no es correcto. Seleccione un rol Correcto.`);
        }
  }

  module.exports = {
    esRoleValido
  }