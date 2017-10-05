// ...
let onlineUsers = 0
// ..
export const make_connection = (io) => {
  // ..
  onlineUsers++
  // ...
  console.log(`connect, on line ${onlineUsers}`)
  // ..
  io.sockets.emit('onlineUsers', { 
    onlineUsers: onlineUsers 
  })
}

// ..
export const disconnect = (io) => () => {
  // ..
  onlineUsers--
  // ...
  io.sockets.emit('onlineUsers', { 
      onlineUsers: onlineUsers 
  })
  // ...
  console.log(`disconnect, on line ${onlineUsers}`)
}


// ..
export const close_connection = (socket) => () => {
    socket.disconnect(0)
}

// ..
export const new_message = (io) => (msg) => {
    io.sockets.emit('new_bc_message', msg)
}