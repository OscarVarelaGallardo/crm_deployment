const mongoose = require('mongoose');
const Schema = mongoose.Schema;

    const usuarioSchema = new Schema ({
        email:{
            type:String,
            unique:true,
            lowercase:true,
            trim: true
        },
        nombre:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true
        }

    })

    module.exports = mongoose.model('Usuarios',usuarioSchema);