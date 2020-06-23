const express = require('express');
const app = express();
const path = require('path');
const bodyParser=require('body-parser')
const routes = require('./routes/index');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())
 



//app.use(express.json())
//const bodyParser = require('body-parser');
//Body Parser

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

app.use('/', routes)

//Static Directory
app.use(express.static(__dirname + '/static')); 
//Template Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');



module.exports = app;

