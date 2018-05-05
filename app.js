const express = require('express');
const cors = require('cors');
const Data = require('./models/data')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/database');
const genreRouter = require('./routes/genre');
//const paramRouter = require('./routes/param');
var categoryRouter = require('./routes/category');

mongoose.connect(config.database);
mongoose.connection.on('connected', function(){
     console.log('connected to ' + config.database);
});

const port = process.env.PORT || 3000;
const app = express();



app.use(cors());
app.use(bodyParser.json());

app.post('/', (request, response) => {
	console.log(request.body);
	response.json(request.body);

});
app.get('/', (request, response, next) => {
	
	response.json({"message":"Hellow world"});

});

app.listen(port, () => {
	console.log('Server Up and running on PORT', port);
});