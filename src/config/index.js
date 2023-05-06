require('dotenv').config()

module.exports.Config = {
    url: process.env.URL,
    port: process.env.PORT,
    mongoUri: process.env.MONGO_URI,
    mongoDBName: process.env.MONGO_DB_NAME
}