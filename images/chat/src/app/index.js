const logger = require('morgan');
const express = require('express');
const http = require('http');
// ..
var config = require('./config');

/**
 * app stuff
 */
const app = express();

// ..sets
app.set('port', config.SERVER_PORT);

// ..uses
app.use(logger('combined'));

// ...server
const server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
})


/**
 * socket
 */
var io = require('socket.io')(server);
var onlineUsers = 0;
io.sockets.on('connection', function(socket) {

  // ..
  onlineUsers++;
  console.log('connect, on line '+onlineUsers);

  // ..
  io.sockets.emit('onlineUsers', { 
    onlineUsers: onlineUsers 
  });

  // ...
  socket.on('disconnect', function() {
    onlineUsers--;
    io.sockets.emit('onlineUsers', { 
      onlineUsers: onlineUsers 
    });
    console.log('disconnect, on line '+onlineUsers);
  });

  // ..
  socket.on('close_connection', function (){
    console.log('get close_connection message');    
    socket.disconnect(0);
  });
});