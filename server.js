var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Yeah!')
});

app.get('/hello', function(req, res, next){
    var name = req.query.name;
    res.write("Bonjour " + name + " ... Vous etes bien matinal ..."); 
    res.send();   
} )

app.listen(5500, function(){
    console.log("http://localhost:5500");
})