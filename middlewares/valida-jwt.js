const { response } = require('express');
const jwt = require('jsonwebtoken');

//El middleware se dispara con 3 argumentos req, res, next
const validarJWT = (req, res = response, next) => {

    const token = req.header('x-token');

    //Verificamos que el token llegue por el header
    if (!token){
        return res.status(401).json({
            msg: 'Invalid token'
        })
    }

    //Verificamos la autenticidad del token
    try {
        jwt.verify(token,process.env.SECRETORPRIVATEKEY);

        next();
    }catch (err) {
        return res.status(401).json({
            msg: 'Invalid token'
        })
    }

    console.log(token);

    next();
}

module.exports = {
    validarJWT
};