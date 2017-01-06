var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var app = express();
var port = 3001;

var assRouter = require('./routes/assignmentRouter');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json() );
app.use(express.static('public'));
//router
app.use('/assignment', assRouter);

app.listen(port, function(){
  console.log('Server is listening on :', port );
});

mongoose.connect('mongodb://localhost:27017/assignmentDB');

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../public/views/index.html'));
});
