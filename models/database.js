const mongoose = require('mongoose');


var DataSchema = new mongoose.Schema({

  chinese: {
    name: {
      type: String, 
      required: true
      },
    
    company: {
      type: String,
      required:  true,
    },  
    
  },
  other: {
    name: {
      type: String, 
      required: true
      },
    
    company: {
      type: String,
      required:  true,
    },
    madeIn:{
      type:String,
      required: true,
    },
    country:{
      type:String,
      required: false,
    },
    
  }
  ,
  productCategory: {
    mainCategory:{
      type: String,
      required: true,
    },
    subCategory:{
      type:String,
      required:false,
    }
  },
  date: {
    type: Date,
    default: Date.now
  },
  rating:{
    
  }
 

})


module.exports = mongoose.model('databaseEntries', DataSchema);

