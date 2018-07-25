var http = require('http');
var mongo=require('mongodb');
  var express = require('express');
  var app = express();
  var bodyParser = require('body-parser');
 
  
var db, uri = "mongodb://" + process.env.IP + "/test";
   
  mongo.MongoClient.connect(uri,{userNewUrlParser:true},function(err,client){
    if(err){console.log("Could not connect to MongoDB")
    }
    else {
      db = client.db('simple-node');
    }
  });
   
  var save = function(form_data){
    db.createCollection('users',function(err,collection){ if (err) throw err;});
    var collection = db.collection('users');
    collection.save(form_data);
  }
  
 var server = http.Server(app);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));
  
  app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
  })
  
  app.get('/about', function(req, res){
    res.sendFile(__dirname+'/about.html');
  });
  
   app.get('/ABCD', function(req, res){
    res.sendFile(__dirname+'/ABCD.html');
  });
  
  app.post('/signup', function(req, res) {
    var username = req.body.username;
    var email = req.body.email;
    console.log("post received: %s %s", username, email);
});

app.post('/submit_user',function(req, res){
  console.log(req.body);
   save(req.body);
  res.status('200');
});

  server.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server running');
});