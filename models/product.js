const { Schema, model } = require('mongoose'); 

const ProductSchema = Schema({
    name:{
        type: String,
        required:[true,'El nombre es obligatorio'],
        unique: true
    },
    precio:{
        type: Number,
        default: 0,

    },
    description:{
        type: String,
    },
    available:{
        type: Boolean,
        default: true
    },
    status : {
        type: Boolean,
        default: true,
        required: true,
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: 'category',
        required: true
    },
     user :{
        type: Schema.Types.ObjectId,
        ref: 'usuario',
        required: true
     }
});

//Quitamos el __v  para que retorne solo lo demas
CategorySchema.methods.toJSON = function (){
    const { __v,_id, ...category } = this.toObject();
    category.uid = _id;
    return category;
}


module.exports = model('product', ProductSchema);