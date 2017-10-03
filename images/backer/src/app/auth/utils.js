import nodemailer from 'nodemailer'
import jwt from 'jwt-simple'
import { dbConfig, emailConfig, ROOT_URL  } from '../config'


// ..
export const tokenForUser = (user) => {
    // ..
    const timestamp = new Date().getTime()
    const item = {
        sub: user.id, 
        iat: timestamp         
    }
    // ...
    return jwt.encode(item, dbConfig.secret)
}


// ..
export const transporter = nodemailer.createTransport(emailConfig)


// ..
export const optForSignup = (email, firstName, token) => {
    // ..
    const from = 'Todoer Team'
    const href = `${ROOT_URL}/auth/signup/verifyconfirm?email=${email}&token=${token}`
    const html = `\
    <div style='\
        margin: 0; \
        padding: 0; \
        width: 100%; \
        font-family: Trebuchet MS, sans-serif;'>\
        <div style='\
            background-color: #f2f2f2; \
            padding: 45px;'>\
            <div style='\
                background-color: #ffffff; \
                padding: 40px; \
                text-align: center;'>\
                <h1 style='\
                    color: #5f5f5f; \
                    margin-bottom: 30px;'>\
                        Hi, ${firstName}\
                </h1>\
                <p style='color: #5f5f5f;'>\
                    Click the big button below to activate your account.\
                </p>\
                <a href='${href}' \
                    style='\
                    background-color: #288feb; \
                    color: #fff; \
                    padding: 14px; \
                    text-decoration: none; \
                    border-radius: 5px; \
                    margin-top: 20px; \
                    display: inline-block;'>\
                        Activate Account\
                </a>\
            </div> \
            <h3 style='\
                color: #5f5f5f; \
                text-align: center; \
                margin-top: 30px;'>\
                    ${from}\
            </h3>\
        </div>\
    </div>`
    // ..
    return { 
        from, 
        to: email, 
        subject: 'Verify Email', 
        html 
    }    
}