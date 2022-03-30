const {response} = require('express'); 
const {ObjectId} = require('mongoose').Types;

const  usuario  = require('../models/usuario');

const coleccionesPermitidas = [
    'users',
    'roles',
    'categories',
    'products'
];

//GET USER
const getUser = async (termino = '' , res = response) => {

    const isMongoId = ObjectId.isValid(termino); // TRUE, FALSE
    
    if(isMongoId){
        const user = await usuario.findById(termino);

        return res.status(200).json({
            results:  (user) ? [ user ] : []
        });
    }

    const regex = new RegExp(termino, 'i'); //Utilizamos una expresion regular para insensivilar la busqueda

    //BUSCAMOS USUARIOS
    const users = await usuario.find({
        $or: [{ name: regex}, {email: regex}],
        $and: [{status: true}]
    });

    return res.status(200).json({
        results:  (users) ? [ users ] : []
    });

}   

const search = async (req, res = response) => {

    const {collection, termino} = req.params;

    if(!coleccionesPermitidas.includes(collection)){
        return res.status(400).json({ 
            msg : `Las colecciones permitidas son: ${coleccionesPermitidas}`
        });
    }

    switch(collection){
        case 'users':
            getUser( termino, res);
        break;

        case 'categories':

        break;

        case 'products':

        break;

        default:
            res.status(500).json({
                msg: 'Se le olvido hacer esta busqueda'
            })

    }

};

module.exports = {
    search
};