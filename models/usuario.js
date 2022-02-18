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
    },
    image: {
        type: String
    },
    rol: {
        type: String,
        required: true,
        enum:['ADMIN_ROLE','USER_ROLE']
    },
    state:{
        type: Boolean,
        default: false
    },
    google:{
        type: Boolean,
        default: false
    }
});

module.exports = model('usuario', usuarioSchema );