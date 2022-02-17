const {response} = require('express');
const Usuario = require('../models/usuario');

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

const usuariosPost = async (req, res  = response ) => {

    const body = req.body;
    //Creamos la instancia del modelo Usuario
    const usuario = new Usuario(body);

    await usuario.save();

    //Mostramos informacion recibida por la request
    res.json({
        msg: "Post API - Controller",
        usuario
    })
};

const usuariosPut =  (req, res = response ) => {

    const { id } = req.params;    

    res.status(201).json({
        msg: "Put API - Controller",
        id
    })
};
  
const usuariosDelete = (req, res  = response) => { 
    res.json({
        msg: "Delete API - Controller"
    })
};

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