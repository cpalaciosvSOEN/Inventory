const EXPRESS = require('express')
const ROUTER = EXPRESS.Router()
const { ProductsController } = require('./controller')

module.exports.ProductsAPI = (app) => {
    ROUTER
        .get('/', ProductsController.getProducts)
        .get('/report', ProductsController.generateReport)
        .get('/:id', ProductsController.getProduct)
        .post('/', ProductsController.createProduct)
        .put('/:id', ProductsController.updateProduct)
        .delete('/:id', ProductsController.deleteProduct)
    
    app.use('/api/products', ROUTER)
}