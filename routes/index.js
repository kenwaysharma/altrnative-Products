const express = require('express');

const router = express.Router();





//Mongoose/MongoDB things
const mongoose = require('mongoose');

var database = require('../models/database') //Important for Posting
var feedBack = require('../models/feedbackDB') //Important for Posting

const datab= new mongoose.model('databaseEntries')//database collection name
const feedDB= new mongoose.model('feedBack')//database collection name


//Home Page
router.get(['/','/home'], (req, res) => {
  res.render('home',{ title: 'Home' });
});

//About Page
router.get('/about', (req, res) => {
  res.render('about',{ title: 'About' });
});

router.get('/makeinindia', (req, res) => {
  res.render('makeinindia',{ title: 'Make In India' });
});


//About Entries
router.get('/entries',(req, res) => {
    database.find({},null,{sort:{
      date: -1 //Sort by Date Added DESC
  }}, function (err, database) {
        if (err) {
            console.log(err);
        }else{
            res.render('entries', {databaseSent: database});
            
  }

        
    });
    
})



//Post Page
router.get('/post', (req, res) => {

  res.render('post')
})
router.post('/post', (req, res) => {
  const data = new datab()
  data.chinese.name=                  req.body.chinese_name
  data.chinese.company=               req.body.chinese_company
  data.other.name=                    req.body.other_name
  data.other.company=                 req.body.other_company
  data.other.country=                 req.body.other_country
  data.other.madeIn=                  req.body.other_madeIn
  data.productCategory.mainCategory=  req.body.productCategory_mainCategory
  data.productCategory.subCategory=   req.body.productCategory_subCategory
  console.log(data)
  
  data.save()
    .then(() => { res.render('post.pug', {msg: "Added Succesfully"}); 
    })
    .catch((err) => {
      console.log(err);
      res.render('post.pug', {msg: "Something went wrong! Make sure no field is empty."})
}) 
})


//Edit Routes

//get Edit
router.get('/entries/edit/:id', (req,res)=>{
  let query={_id: req.params.id};
  console.log(query)
  database.findById(query, function(err,entry){
      
    if (err){
      
      console.log(err);
  
    }else{  
     res.render('edit', { entrySent: entry})
    }
  })
})

//post Edit
router.post('/entries/edit/:id',(req, res) => {
let entryUp={
  "chinese.name":req.body.chinese_name,
  "chinese.company":req.body.chinese_company,
  "other.name": req.body.other_name,
  "other.company": req.body.other_company,
  "other.madeIn": req.body.other_madeIn,
  "other.country": req.body.other_company,
  "productCategory.mainCategory": req.body.productCategory_mainCategory,
  "productCategory.subCategory": req.body.productCategory_subCategory
}
  let query={_id:req.params.id}
  database.findOneAndUpdate(query, entryUp, (err, doc) => {
      if (err) {
          console.log("Something wrong when updating data!");
      }
  
      res.redirect('/entries');
  });
})

//Feedback Page
router.get('/feedback', (req, res) => {
    res.render('feedback')
})
router.post('/feedback', async (req, res) => {
    
    dataTemp=req.body;
    const feedData = new feedDB(dataTemp);
    
    await feedData.save()
      .then(() => { res.render('feedback.pug', {msg: "Submitted Succesfully"});   
      })
      .catch((err) => {
        console.log(err);
        res.render('feedback.pug', {msg: "Something went wrong! Make sure email and feedback field is not empty."})
})
})
  


module.exports = router;