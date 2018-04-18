'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
	var mongoose = require('mongoose');
	mongoose.connect('mongodb://ec2-34-230-59-155.compute-1.amazonaws.com:27017/CrimeData');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);

