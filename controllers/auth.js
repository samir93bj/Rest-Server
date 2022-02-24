const bcrypt = require('bcryptjs');
const { response } = require('express');
const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/generar-jwt');

const loginController = async(req, res = response) =>{

    const {email ='', password=''} = req.body;

    try {
        
        const usuario = await Usuario.findOne({email});

        //Verificar si el mail existe
        if (!usuario){
            return res.status(404).json({
                msg: 'Usuario / Password no son correctos'
            });
        }

        //Si el usuario esta activo
        if(!usuario.state){
            return res.status(404).json({
                msg: 'Usuario desactivado / Comuniquese con el Administrador'
            });
        }

        
        //Verificar la contraseña
        const validPassword = bcrypt.compareSync(password, usuario.password);

         //Si el usuario esta activo
         if(!validPassword){
            return res.status(404).json({
                msg: 'Usuario / Password no son correctos'
            });
        }

        //Generar el JWT
        const token = await generarJWT(usuario.id);

        
    res.status(200).json({
        msg: 'login ok',
        usuario,
        token
    });

    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }

}

module.exports = {
    loginController
}