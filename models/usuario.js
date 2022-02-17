const {Schema, model} = require('mongoose'); 

const usuarioSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'El password es obligatorio'],
        unique: true
    },
    image: {
        type: String
    },
    rol: {
        type: String,
        required: true,
        emun:['ADMIN_ROLE','USER_ROLE']
    },
    state:{
        type: bool,
        default: false
    },
    google:{
        type: bool,
        default: false
    }
});

module.exports = model('Usuario', usuarioSchema );