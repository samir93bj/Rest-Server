const {response} = require('express');

const usuariosGet = (req, res = response) => {
    res.json({
        msg: "get API - Controller"
    });
};

const usuariosPost = (req, res  = response ) => {
    res.json({
        msg: "Post API - Controller"
    })
};

const usuariosPut =  (req, res = response ) => {
    res.status(201).json({
        msg: "Put API - Controller"
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