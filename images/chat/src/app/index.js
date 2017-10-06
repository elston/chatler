import  express from 'express'
import  http from 'http'
import SocketIo from 'socket.io'
// ..
import * as config from './config'
import router from './router'

// ...app
const app = express()
app.set('port', config.SERVER_PORT)

// ...server
const server = http.createServer(app)
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
})

// ..socket
// const io = new SocketIo(server)
const io = new SocketIo(server,{path: '/chat'})
io.sockets.on('connection', router(io))