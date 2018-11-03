// Code for socket.io
var socket = io()

socket.on('Connected', function (msg) {
  console.log('Server has sent', msg)
})

socket.on('newGame', function (data) {
  console.log('New game has started', data)
})

function startNewGame () {
  socket.emit('newGame')
}

var IO = {
  // Connect client to server
  init: function () {
    IO.socket = io()
    IO.bindEvents()
  },
  // Socket.IO will listen to following events emitted by server and run appropriate function.
  bindEvents: function () {
    IO.socket.on('Connected', IO.onConnected)
    IO.socket.on('newGame', IO.onNewGame)
    IO.socket.on('hostRoomFull', IO.onHostRoomFull)
    IO.socket.on('newRound', IO.onNewRound)
  },
  onConnected: function () {
    console.log(IO.socket.socket.sessionId)
  },
  onNewGame: function () {
    // App.host.gameInit(data)
  }
}

var App = {// var name
  // Game trackers
  gameId: 0,
  myRole: '',
  mySocketId: '',
  currentLevel: 0,
  init: function () {
    App.bindEvents()
  },
  // Click handlers
  bindEvents: function () {

  },
  // Host trackers
  host: {
    players: [],
    numPlayersInRoom: 0,
    onCreateClick: function () {
      IO.socket.emit('newGame')
    },
    gameInit: function (data) {
      App.gameId = data.gameId
      App.mySocketId = data.mySocketId
      App.myRole = 'Host'
      App.host.numPlayersInRoom = 0

      App.host.displayNewGameScreen()
    },
    displayNewGameScreen: function () {
      // Show relevant HTML
      // Display URL on screen
      // Show roomID on screen
    }
  },
  // Player trackers
  player: {

  }
}

IO.init()
App.init()
