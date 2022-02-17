const {response} = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario');

/*FUNCION GET*/
const usuariosGet = (req, res = response) => {

    //Destructuracion de argumentos 
    const {q, nombre = 'No name', apikey, page=1 , limit=10} = req.query;

    res.json({
        msg: "get API - Controller",
        q,
        nombre,
        apikey,
        page,
        limit 
    });
};

/*FUNCION POST*/
const usuariosPost = async (req, res  = response ) => {

    const {name, email,password,rol} = req.body;

    //Creamos la instancia del modelo Usuario
    const usuario = new Usuario({name, email,password,rol});

    //Verificamos si el correo ya existe
 
    //Encriptar password
    var salt = bcrypt.genSaltSync(10); //Indicamos la cantidad de vueltas para hasshear
    usuario.password = bcrypt.hashSync(password, salt);

    //Almacenamos el usuario en la base de datos
    await usuario.save();

    //Mostramos informacion recibida por la request
    res.json({
        msg: "Post API - Controller",
        usuario
    })
};

/*FUNCION PUT*/
const usuariosPut =  (req, res = response ) => {

    const { id } = req.params;    

    res.status(201).json({
        msg: "Put API - Controller",
        id
    })
};


/*FUNCION DELETE*/
const usuariosDelete = (req, res  = response) => { 
    res.json({
        msg: "Delete API - Controller"
    })
};


/*FUNCION PATCH*/
const usuariosPatch = (req, res  = response) => {
    res.json({
        msg: "Patch API - Controller"
    })
};


  module.exports ={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
  };