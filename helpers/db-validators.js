const Role = require('../models/role');
const usuario = require('../models/usuario');
const Usuario = require('../models/usuario');

//Verificamos si el ROL existe
const esRoleValido =   async ( rol = '') => {
        const existeRol = await Role.findOne({ rol });
        if (!existeRol){
        throw new Error(`El rol: ${rol} no es correcto. Seleccione un rol Correcto.`);
        }
  }

  //Verificamos si el mail existe
  const mailExistente = async (email = '') => {

    //Verificamos si el correo ya existe
    const existeEmail = await Usuario.findOne({email});

    if(existeEmail) {
      throw new Error(`Este email ya esta registrado`);
    }
}; 


  //Verificamos si el id existe
  const idExistente = async (id = '') => {
    const usuariosExiste = await Usuario.findById(id);
      if (!usuariosExiste){
        throw new Error(`El id: ${id} no existe.`);
      }
  }
  

  module.exports = {
    esRoleValido,
    mailExistente,
    idExistente
  }