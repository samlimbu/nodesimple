var express = require('express'); 
var router = express.Router();
var mongoose = require('mongoose');
var paramModel = require('../models/param');
/* GET param listing. */

//fetching data from mongodb
router.get('/', function(request,response){ //link url in browser
  mongoose.model('param').find({}, function(err,data){ //db.categories.find()
  //response.json(data);
    if(err){
      throw err;
    }
    response.json(data);
  });

});

module.exports = router;