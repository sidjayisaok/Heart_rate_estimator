//variables used
var express = require('express');
var app = express();
var favIcon = require('serve-favicon');
var Port = process.env.PORT || 8080;

//middleware
app.use(express.static(__dirname));

//get function 
app.get('/', function(request, response){
    response.sendFile(__dirname + '/heartApp.html');
});

//start the server
app.listen(Port, function(){
    console.log('Jet Set Radio broadcasting on localhost:' + Port);
});