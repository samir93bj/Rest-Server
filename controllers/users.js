const {response} = require('express');

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

const usuariosPost = (req, res  = response ) => {

    const { nombre, edad} = req.body;

    res.json({
        msg: "Post API - Controller",
        nombre,
        edad
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