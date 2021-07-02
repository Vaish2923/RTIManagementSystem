const mongoose = require('mongoose');

var responseSchema = new mongoose.Schema({

        textarea : {
            type :String
            // required : 'This field is required'
        }

        
});



module.exports=mongoose.model('Employee', responseSchema);