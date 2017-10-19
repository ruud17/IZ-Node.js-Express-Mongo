import express from "express";

var app = express();
var port = 3000;

app.use(express.static('public'));
app.use(express.static('src/views'));

// app.set('port', process.env.PORT || 3000);
app.get('/users', (req, res) => {
    res.send('test');
});


app.listen(port, function (error) {
    console.log('Running app on port:', port);
});
//
// var express = require('express');
// var app = express();
// var port = 8966;
//
// // start the server
// app.listen(port, function() {
//     console.log('app started');
// });
//
// // route our app
// app.get('/', function(req, res) {
//     res.send('hello world!');
// });