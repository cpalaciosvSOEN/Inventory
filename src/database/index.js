const { MongoClient } = require('mongodb')
const DEBUG = require('debug')('app:database')

const { Config } = require('../config/index')

let connection = null

module.exports.Database = (collection) => new Promise( async (resolve, reject) => {
    try{
        if(!connection){
            const client = new MongoClient(Config.mongoUri)
            connection = await client.connect()
            DEBUG('Database connected with MongoDB Atlas') 
        }
        DEBUG('Database already connected')
        const db = connection.db(Config.mongoDBName)
        resolve(db.collection(collection))
    }catch(error){
        reject(error)
    }
})
