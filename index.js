var express = require('express')
var path = require('path')
var theMind = require('./theMind')

var app = express()

var server = require('http').createServer(app)

server.listen(8080)

var io = require('socket.io').listen(server)

app.use(express.logger('dev'))
app.use(express.static(path.join(__dirname, 'public')))

io.sockets.on('connection', function (socket) {
  console.log('Client connected')
  theMind.startGame(io, socket)
})
