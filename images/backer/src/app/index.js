import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import mongoose from 'mongoose'
import cors from 'cors'
import compression from 'compression'

// ...
import * as config from './config'
import routes from './routes'

// ..
const app = express()

// ..db
const { uri:db_uri, option:db_opt } = config.dbConfig
mongoose.Promise = global.Promise
mongoose.connect(db_uri,db_opt)
mongoose.set('debug', true)


// ..main
app.use(compression())
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json({ type: '*/*' }))

// ..routes
app.use('/api', routes)

// ..server
const port = config.SERVER_PORT
const server = http.createServer(app)
server.listen(port)
console.log('server listening on:', port)
