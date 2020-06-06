const mongoose = require('mongoose');


var feedBackSchema = new mongoose.Schema({
  
    name:{
        type:String,
    },
    email:{
        type:String,
        required:true,
    },
    feedback:{
        type:String,
        required:true,
    },
    date: {
        type: Date,
        default: Date.now
    },
 

})


module.exports = mongoose.model('feedBack', feedBackSchema);

