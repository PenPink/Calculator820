var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('num', 1);
var num = app.get('num');
console.log(num); //1

app.use(function (req, res, next) {
    console.log('Record timestamp');
    next();
});
app.use(bodyParser.json());

app.post('/calculator/rest/plus', function (req, res, next) {
    var body = req.body;
    var x = body.x;
    var y = body.y;
    var result = 0;
    var obj = {
        "x": x,
        "y": y,
        "result x plus y": x + y 
    }
    res.json(obj);
});

app.post('/calculator/rest/minus', function (req, res, next) {
    var body = req.body;
    var x = body.x;
    var y = body.y;
    var result = 0;
    var obj = {
        "x" : x,
        "y" : y,
        "result x minus y" : x-y 
    }
    res.json(obj);
});

app.post('/calculator/rest/multiply', function (req, res, next) {
    var body = req.body;
    var x = body.x;
    var y = body.y;
    var result = 0;
    var obj = {
        "x" : x,
        "y" : y,
        "result x multiply y" : x*y 
    }
    res.json(obj);
});

app.listen(3000);