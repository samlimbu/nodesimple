var express = require('express'); 
var router = express.Router();
var mongoose = require('mongoose');
var categoryModel = require('../models/category');
/* GET category listing. */

//fetching data from mongodb
router.get('/', function(request,response){ //link url in browser
  mongoose.model('category').find({}, function(err,data){ //db.categories.find()
  //response.json(data);
    if(err){
      throw err;
    }
    response.json(data);
  });

});

module.exports = router;