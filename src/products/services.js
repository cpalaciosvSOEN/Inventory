const { ObjectId } = require('mongodb')
const { Database } = require('../database')
const { ProductsUtils } = require('./utils')

const COLLECTION = 'products'

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

const update = async (id, product) => {
    const collection = await Database(COLLECTION)
    await collection.updateOne({ _id: new ObjectId(id) }, { $set: product })
    return id
}

const remove = async (id) => {
    const collection = await Database(COLLECTION)
    await collection.deleteOne({ _id: new ObjectId(id) })
    return id
}

const generateReport = async (name, res) => {
    let products = await getAll()
    ProductsUtils.excelGenerator(products, name, res)
}

module.exports.ProductsService = {
    getAll,
    getById,
    create,
    update,
    remove,
    generateReport
}