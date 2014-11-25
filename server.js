
//required  
var express 			= require('express'),
	app					= express(),
	bodyParser 			= require('body-parser'),
	mongoose 			= require('mongoose'),
	datasetsController 	= require('./server/controllers/datasets-controller');




// connect to database
mongoose.connect('mongodb://localhost:27017/fyp');






// allows body parse
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// when server request is made to domain the following view is shown
app.get('/', function (req, res){
	res.sendFile(__dirname + '/client/admin/views/index.html');
});






// handles route for files requested that are stored in /controllers folder
app.use('/admin', express.static(__dirname + '/client/admin'));











//REST API
app.get('/api/datasets', datasetsController.list);
app.post('/api/datasets', datasetsController.create);











//sets server to listen on port 3000 for server request outputs message to console
app.listen(3000, function(){
	console.log('I\'m Listening...');
})