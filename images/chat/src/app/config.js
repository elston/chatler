/*
* main
*/
export const NODE_ENV = process.env.NODE_ENV


/*
* server
*/
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
