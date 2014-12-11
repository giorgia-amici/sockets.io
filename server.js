var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var socket = require('./src/socketController.js')(io);
var bodyParser = require('body-parser')
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.set('view engine', 'ejs');


app.get('/sockets', function(request, response){
  response.render('sockets');
});

server.listen(3000, function(){
	console.log('on port 3000');
});
