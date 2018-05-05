var express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/database');
var exp = express();
var categoryRouter = require('./routes/category');
var paramRouter = require('./routes/param');
//CORS on ExpressJs
mongoose.connect(config.database);
mongoose.connection.on('connected', function(){
     console.log('connected to ' + config.database);
});

const port = process.env.PORT || 3000;
exp.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*"); //view server
  res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
});


exp.use(bodyParser.json()); //middleware function
exp.use(bodyParser.urlencoded(({extended: true})));

exp.use('/api/category', categoryRouter); //middleware funciton
exp.use('/getParam', paramRouter); //middleware funciton

exp.listen(port, function(err){
  if(err){
    throw err;
  }
  console.log("running server at port 3000");
});
