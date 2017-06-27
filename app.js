var express = require('express');

var app = express();

var port = 5555;

app.get('/', function(req, res){ 
    var options = {
        root: './'
    }
    res.sendFile('courses.json', options);
});

app.get('/students', function(req, res){
    var options = {
        root: './'
    }
    res.sendFile('students.json', options);
});

app.listen(5555, function(err){
    console.log('running server on port ' + port);
});