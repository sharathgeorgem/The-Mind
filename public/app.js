// Code for socket.io
var socket = io()

var IO = {
  // Connect client to server
  init: function () {
    IO.socket = io()
    IO.bindevents()
  }
}

socket.on('Connected', function (msg) {
  console.log('Server has sent', msg)
})

socket.on('newGame', function (data) {
  console.log('New game has started', data)
})

function startNewGame () {
  socket.emit('newGame')
}
