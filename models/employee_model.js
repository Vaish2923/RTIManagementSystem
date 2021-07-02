const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({

        rtino : {
            type :String,
            required : 'This field is required'
        },

        rticat :{
            type : String,
            required : 'This field is required'
        },

        fullname : {
            type :String,
            required : 'This field is required'
        },

        gender : {
             type :String,
        },

        address : {
            type :String,
       },
        datereq : {
                type :String,
                required : 'This field is required'
            },

        summary : {
             type :String,
            required : 'This field is required'
        },

    extrainformation : {
        type : String,
        required : 'This field is required'
    }
});

module.exports=mongoose.model('Employee', employeeSchema);