var express = require('express');
var bodyParser = require('body-parser');

var exp = express();
var categoryRouter = require('./routes/category');
//CORS on ExpressJs

exp.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*"); //view server
  res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
});


exp.use(bodyParser.json()); //middleware function
exp.use(bodyParser.urlencoded(({extended: true})));

exp.use('/api/category', categoryRouter); //middleware funciton

exp.listen('3000', function(err){
  if(err){
    throw err;
  }
  console.log("running server at port 3000");
});
