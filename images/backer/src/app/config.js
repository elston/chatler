/*
* main
*/
export const NODE_ENV = process.env.NODE_ENV


/*
* server
*/
export const ROOT_URL = 'http://localhost:8080'
export const SERVER_PORT = process.env.SERVER_PORT
export const SERVER_HOST = process.env.SERVER_HOST

/*
* db
*/
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
// ..
export const dbConfig = {
  secret: 'SomeRandomSecretString',
  uri: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:27017/${DB_NAME}`,
  option:{
    useMongoClient: true        
  }
}


/*
* email
*/
const EMAIL_USER = process.env.EMAIL_USER
const EMAIL_PASS = process.env.EMAIL_PASS

/**********************
*   kubcenter.ru
***********************/
// export const emailConfig = {
//   host: '####.kubcenter.ru',
//   port: 465,
//   secure: true,
//   requireTLS:true,
//   auth: {
//     user: '#####@kubcenter.ru',
//     pass: '#####',
//   },
// }

/**********************
*   mail.ru
***********************/
// export const emailConfig = {
//   host: 'smtp.mail.ru',
//   port: 465,
//   secure: true,
//   requireTLS:true,
//   auth: {
//     user: '#####@mail.ru',
//     pass: '#####',
//   },
// }


// export const emailConfig = {
//   host: 'smtp.mail.ru',
//   port: 2525,
//   // secure: true,
//   requireTLS:true,
//   auth: {
//     user: '#####@mail.ru',
//     pass: '#####',
//   },
// }


/**********************
*   rambler.ru
***********************/
// export const emailConfig = {
//   host: 'smtp.rambler.ru',
//   port: 465,
//   secure: true,
//   requireTLS:true,
//   auth: {
//     user: EMAIL_USER,
//     pass: EMAIL_PASS,
//   },
// }


/**********************
*   gmail.com
***********************/
export const emailConfig = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  requireTLS:true,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
}
