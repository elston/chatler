import express from 'express'
import * as ctrl from './controllers'

const routes = express.Router()
routes.post('/signin', ctrl.requireSignin, ctrl.signin)
routes.post('/signup', ctrl.signup)
routes.post('/resendcode', ctrl.resendcode)
routes.post('/verifycode', ctrl.verifycode)

export default routes
