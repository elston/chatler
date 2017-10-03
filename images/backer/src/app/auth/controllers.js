import passport from 'passport'
import LocalStrategy from 'passport-local'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
// ..
import { dbConfig } from '../config'
// ..
import User from './models'
import { tokenForUser, transporter, optForSignup } from './utils'
import { ResendCodeError, VerifyCodeError } from './errors'
/**
 * pasport
 */


// ..
const localOptions = { 
    usernameField: 'email' 
}

// ..
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
    // ..
    User.findOne({ email }, (err, user) => {
        // ..
        if (err) { 
            return done(err)}
        // ..
        if (!user) { 
            return done(null, false)}
        // ..
        user.comparePassword(password, (err, isMatch) => {
            // ..
            if (err) { 
                return done(err)}
            // ..
            if (!isMatch) { 
                return done(null, false)}
            // ...
            if (user.role < 1) { 
                return done(null, false)}
            // ..
            return done(null, user)
        })
    })
})
// ..
passport.use(localLogin)


// ..
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: dbConfig.secret,
}

// ...
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
    // ..
    User.findById(payload.sub, (err, user) => {
        // ..
        if (err) { 
            return done(err, false)}
        // ..
        if (!user) {
            return done(null, false)}
        // ..
        return done(null, user)        
    })
})
// ..
passport.use(jwtLogin)



// ..
export const requireSignin = passport.authenticate('local', { session: false })
export const requireAuth = passport.authenticate('jwt', { session: false })

/**
 * Sign in
 */
export const signin = (req, res) => {
    // ..
    const { firstname, lastname, email } = req.user
    const token = tokenForUser(req.user)
    // ..
    res.json({ token: token, firstname, lastname, email })
}


/**
 * Sign up
 */
export const signup = async (req, res, next) => {
    // ..
    const { firstname, lastname, email, password } = req.body
    if (!firstname || !lastname || !email || !password) {
        return res.status(422).send({ error: "all fields are required" })}

    // ..
    const existingUser = User.findOne({ email })
    try {
        if (await existingUser) {
            return res.status(422).send({ error: "Email is in use" })}        
    }catch(err){
        return next(err)
    }

    // ..
    const user = new User({ firstname, lastname, email, password })
    try {
        await user.save()
    }catch(err){
        return next(err)
    }

    // ..
    try {
        const opt = optForSignup(email, firstname, user.auth.token)
        await transporter.sendMail(opt)
    }catch(err){
        console.log(err)
        user.remove()                
        return res.status(422).send({ error: "Email was not sended" })        
    }

    // ..
    res.json({ firstname, lastname, email })    
}


/**
 * Resend verification code
 */
export const resendcode = async (req, res, next) => {
    // ...
    try {

        // 1..test
        const { email } = req.body
        const user = await User.findOne({ email })        
        if (!user) {
            throw new ResendCodeError('User not find') }

        // 2..update
        const tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        await User.findByIdAndUpdate(user.id, { 
            auth: { 
                token: user.auth.token, 
                used: false, 
                expires: tomorrow 
            }
        })        

        // 3..send email
        const opt = optForSignup(email, user.firstname, user.auth.token)
        try {
            await transporter.sendMail(opt) 
        } catch(err) {
            throw new ResendCodeError('Email was not sended')
        }

        // 4..return
        res.json({ success: true })

    } catch(err) {
        if (err instanceof ResendCodeError){
            return res.status(err.code).send(err.message)}
        return next(err) 
    }    
}

/**
 * Verify verification code
 */
export const verifycode = async (req, res, next) => {
    try {

        // 1..test
        const { email, token } = req.body;
        const user = await User.findOne({ email })        
        // ..
        if (!user) {
            throw new VerifyCodeError('User not find') }

        if (user.auth.used) {
            throw new VerifyCodeError('Account already activated') }

        if (new Date() > user.auth.expires) {
            throw new VerifyCodeError('link already expired', true) }

        if (token !== user.auth.token) {
            throw new VerifyCodeError('Token has gone wrong, please sign up again') }

        // 2..update
        await User.findByIdAndUpdate(user.id, { 
            role: 1, 
            auth: { used: true } 
        })  

        // ..3 return 
        res.json({ success: true })

    } catch(err) {
        if (err instanceof VerifyCodeError){
            res.status(err.code).send({
                message:err.message, allowresend:err.allowresend })
        }else{
            next(err)
        }
    }
}