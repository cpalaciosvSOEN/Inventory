const { ObjectId } = require('mongodb')
const { Database } = require('../database')

const COLLECTION = 'sales'

const getAll = async () => {
    const collection = await Database(COLLECTION)
    return collection.find({}).toArray()
}

const getById = async (id) => {
    const collection = await Database(COLLECTION)
    return collection.findOne({ _id: new ObjectId(id) })
}

const create = async (product) => {
    const collection = await Database(COLLECTION)
    await collection.insertOne(product)
    return product
}

const update = async (id, user) => {
    const collection = await Database(COLLECTION)
    await collection.updateOne({ _id: new ObjectId(id) }, { $set: user })
    return id
}

const remove = async (id) => {
    const collection = await Database(COLLECTION)
    await collection.deleteOne({ _id: new ObjectId(id) })
    return id
}


module.exports.UsersService = {
    getAll,
    getById,
    create,
    update,
    remove,
}