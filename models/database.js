const mongoose = require('mongoose');


var DataSchema = new mongoose.Schema({

  chinese: {
    name: {
      type: String, 
      
      },
    
    company: {
      type: String,
      
    },  
    
  },
  other: {
    name: {
      type: String, 
      
      },
    
    company: {
      type: String,
      
    },
    madeIn:{
      type:String,
      
    },
    country:{
      type:String,
      
    },
    
  }
  ,
  productCategory: {
    mainCategory:{
      type: String,
      
    },
    subCategory:{
      type:String,
      
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

