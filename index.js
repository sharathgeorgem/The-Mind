var app = require('express')
var server = require('http').createServer(app)

server.listen(8080)

var io = require('socket.io').listen(server)

