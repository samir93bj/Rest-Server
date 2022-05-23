const { response } = require('express');

const path = require('path');
const fs = require('fs');

const { subirArchivo }= require('../helpers/upload-file');

const Product = require('../models/product');
const User = require('../models/usuario');

//POST FILES
const uploadFile = async (req, res = response) => {  

    try {

      //ENVIAMOS A LA FUNCION SUBIRARCHIVO LO QUE RECIBIMOS POR REQUEST Y LAS EXTENSIONES VALIDAS
      //const name = await subirArchivo(req.files,['txt','md','pdf'],'textos'); //textos es el nombre de la carpeta donde se guardaran los archivos
      const name = await subirArchivo(req.files, undefined ,'imgs');

      res.status(200).json({
        nameFile: name
      })

    } catch(msg){
      res.status(400).json({msg});
    } 
  
};

//PUT FILES
const uploadFilePut = async (req, res = response) => {

  const {id , collection} = req.params;
  let modelo;

  switch(collection){

    //COLLECTION USER 
    case 'users':
      modelo = await User.findById(id);

      if (!modelo){
        return res.status(404).json({
          msg: `Usuario con id ${id} no encontrado`
        })
      }

    break;

    //COLLECTION PRODUCT 
    case 'products':
      modelo = await Product.findById(id);

      if (!modelo){
        return res.status(404).json({
          msg: `Usuario con id ${id} no encontrado`
        })
      }
    break;

    //MSG DEFAULT ERRORS
    default:
        return res.status(500).json({
          msg: 'Se nos olvido de validar esto'
        });
  }
 
  //Limpiar imagenes previas
  if( modelo.img ){
    //Hay q boorar la imagen del server
    const pathImagen = path.join(__dirname,'../uploads', collection, modelo.img);

    //Si la imagen existe la va a borrar
    if( fs.existsSync(pathImagen)){
      fs.unlinkSync(pathImagen);
    }
  }

  //CREACION DE LA CARPETA DONDE SE ALMACENARA EL ARCHIVO ENVIADO
  const name = await subirArchivo(req.files, undefined ,collection);
  modelo.img = name;

  //SALVAMOS EL MODELO CON EL NOMBRE DE LA IMAGEN
  await modelo.save(); 

  res.status(200).json({
    id,
    collection,
    modelo
  });
}

module.exports = {
    uploadFile,
    uploadFilePut
}