const mongoose = require('mongoose');

var loginSchema = new mongoose.Schema({

    fname : {
        type :String,
        required : true,
    },

    password :{
        type : String,
        required : true,
        unique: true,
    },

});
module.exports  =  mongoose.model('Login',loginSchema);
