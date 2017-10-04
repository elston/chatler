// var onlineUsers = 0
// module.exports = function(socket){
//   // ...
//   onlineUsers++;
//   console.log('connect, on line '+onlineUsers);

//   // ..
//   socket.broadcast.emit('onlineUsers', { 
//     onlineUsers: onlineUsers 
//   });

//   // ...
//   socket.on('disconnect', function() {
//     onlineUsers--;
//     socket.broadcast.emit('onlineUsers', { 
//       onlineUsers: onlineUsers 
//     });
//     console.log('disconnect, on line '+onlineUsers);
//   });

//   // ..
//   socket.on('close_connection', function (){
//     console.log('get close_connection message');    
//     socket.disconnect(0);
//   });    

// }