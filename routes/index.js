const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');

//Body Parser

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//Mongoose/MongoDB things
const mongoose = require('mongoose');

var database = require('../models/database') //Important for Posting
var feedBack = require('../models/feedbackDB') //Important for Posting

const datab= new mongoose.model('databaseEntries')//database collection name
const feedDB= new mongoose.model('feedBack')//database collection name



//About Page
router.get('/about', (req, res) => {
  res.render('about',{ title: 'About' });
});


//About Entries
router.get(['/','/entries'],(req, res) => {
    database.find({}, function (err, database) {
        if (err) {
            console.log(err);
        }else{
            res.render('entries', {databaseSent: database});
            
  }

        
    });
    
})

router.get('/entries/user/:id',(req, res) => {
console.log(req.params.id)
database.findById(req.params.id, function(err,entry){
  if (err){
    console.log(err);

  }else{
    
   res.render('edit', {databaseSent: entry})
  }
})
  
})
//router.post('/entries/user/:id', (req, res) => {
//  let entry={};
//  console.log(JSON.stringify(req.body.other))
//
//  
//  let query = {_id:req.params.id}
//  database.update(query,entry,function(err){
//    if(err){
//      console.log(err);
//      return;
//    }else{
//      res.redirect('entries')
//    }
//  })
//    .then(() => { res.render('edit.pug', {msg: "Added Succesfully"}); 
//    })
//    .catch((err) => {
//      console.log(err);
//      res.render('edit.pug', {msg: "Something went wrong! Make sure no field is empty."})
//}) 
//})

//Post Page
router.get('/secretTop', (req, res) => {

  res.render('secretTop')
})
router.post('/secretTop', (req, res) => {
  const data = new datab()

  
  console.log(req.body.chinese.name)
  data.save()
    .then(() => { res.render('secretTop.pug', {msg: "Added Succesfully"}); 
    })
    .catch((err) => {
      console.log(err);
      res.render('secretTop.pug', {msg: "Something went wrong! Make sure no field is empty."})
}) 
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