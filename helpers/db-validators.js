const Role = require('../models/role');
const Usuario = require('../models/usuario');
const Category = require('../models/category');

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

  //Verificamos la existencia de la categoria
  const nameCategoryExist = async (name = '') => {
    const category = await Category.findOne({name});
    if (category){ 
      throw new Error(`La categoria: ${name} ya existe.`);
    }
  }

  //Verificamos si ID Categoria Existe
  const idCategoryExist = async (id = '') => {

    const category = await Category.findById(id);

    if (!category){
      throw new Error(`La categoria: ${id} no existe.`);
    }
  } 


  module.exports = {
    esRoleValido,
    mailExistente,
    idExistente,
    idCategoryExist,
    nameCategoryExist
  }
