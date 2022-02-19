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

    //Creamos la instancia del modelo Usuario   
    const {name, email ,password ,rol} = req.body;
    const usuario = new Usuario({name, email, password, rol});

    //Encriptar password
    const salt = bcrypt.genSaltSync(10); //Indicamos la cantidad de vueltas para hasshear
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
const usuariosPut = async (req, res = response ) => {

    const { id } = req.params;
    const {_id, password, google, email, ... resto} = req.body;  
    
    //TODO validar contra base de datos
    if(resto.password){
        //Encriptar password
        const salt = bcrypt.genSaltSync(10); //Indicamos la cantidad de vueltas para hasshear
        resto.password = bcrypt.hashSync(resto.password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id,resto); //findByIdAndUpdate le dice busca ese id, encuentralo y actualizalo

    res.status(201).json({
        msg: "Put API - Controller",
        usuario
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