// Code for socket.io

var IO = {
  // Connect client to server
  init: function () {
    IO.socket = io.connect()
    IO.bindevents()
  }
}

var socket = io()