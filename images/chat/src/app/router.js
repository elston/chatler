import * as action from './actions'

// ...
export default (io) => (socket) => {
  // ..
  action.make_connection(io)
  socket.on('disconnect', action.disconnect(io))
  socket.on('close_connection', action.close_connection(socket))
  socket.on('new_message', action.new_message(io))
}