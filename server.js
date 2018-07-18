var http = require('http');
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
var server = http.Server(app);


app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
});
app.get('/about',function(req,res){
  res.sendFile(__dirname+'/about.html');
});
app.get('/ABCD',function(req,res){
  res.sendFile(__dirname+'/ABCD.html');
});
app.post('/submit_user',function(req,res)
{
    console.log(req.body);
});
  server.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server running');
  });