//const { Router } = require('express');
var express = require('express');
var app = express();
//const router = express.Router();

app.get('/', function(req, res) {
res.redirect('/index.html')
});

app.post('/valider', function(req, res, next){
    console.log("on y arrive ? valider");
    var nom = req.query.name;
    res.write("test nom : " + nom); 
    res.send();   
} )

app.listen(5500, function(){
    console.log("http://localhost:5500");
})