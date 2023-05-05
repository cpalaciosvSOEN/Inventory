require('dotenv').config()

module.exports.Config = {
    port: process.env.PORT,
    mongoUri: process.env.MONGO_URI,
    mongoDBName: process.env.MONGO_DB_NAME
}