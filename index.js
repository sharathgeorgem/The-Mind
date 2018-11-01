var express = require('express')()
var path = require('path')
var theMind = require('./theMind')

var app = express()

var server = require('http').Server(app)

server.listen(8080, () => {
  console.log('Server running at 8080')
})

var io = require('socket.io').listen(server)

app.use(express.static(path.join(__dirname, 'public')))

io.on('connection', function (socket) {
  console.log('Client connected')
  theMind.startGame(io, socket)
})
