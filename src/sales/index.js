const EXPRESS = require('express')
const ROUTER = EXPRESS.Router()
const { SalesController } = require('./controller')

module.exports.ProductsAPI = (app) => {
    ROUTER
        .get('/', SalesController.getUsers)
        .get('/:id', SalesController.getUser)
        .post('/', SalesController.createUser)
        .put('/:id', SalesController.updateUser)
        .delete('/:id', SalesController.deleteUser)
    
    app.use('/api/products', ROUTER)
}