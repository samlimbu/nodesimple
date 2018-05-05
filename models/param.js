var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var paramSchema = new Schema({
	"info":String
})
mongoose.model('param', paramSchema); //schema name