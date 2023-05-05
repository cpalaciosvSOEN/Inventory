const { ProductsService } = require('./services');
const DEBUG = require('debug')('app:products:controller')
const { Response } = require('../common/response')
const createError = require('http-errors');


module.exports.ProductsController = {
    getProducts: async (req, res) => {
        try {
            let products = await ProductsService.getAll()
            Response.success(res, 200, 'Lista de Productos', products)
        }catch(error){
            DEBUG(error)
            Response.error(res, error)
        }
    },

    getProduct: async (req, res) => {
        try {
            const id = req.params.id
            let product = await ProductsService.getById(id)
            if(!product){
                Response.error(res, new createError.NotFound())
            }else{
                Response.success(res, 200, `Product ${id}`, product)
            }
        } catch (error) {
            DEBUG(error)
            Response.error(res, error)
        }

    },

    createProduct: async (req, res) => {
        try {
            const { body } = req
            if(!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest())
            }else{
                const insertedId = await ProductsService.create(body)
                Response.success(res, 201, 'Producto Agregado', insertedId)
            }
        } catch (error) {
            DEBUG(error)
            Response.error(res, error)
        }
    },

    updateProduct: async (req, res) => {
        try {
            const { body } = req
            const id = req.params.id
            if(!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest())
            }else{
                const updatedId = await ProductsService.update(id, body)
                Response.success(res, 200, 'Producto Actualizado', updatedId)
            }
        } catch (error) {
            DEBUG(error)
            Response.error(res, error)
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const id = req.params.id
            const deletedId = await ProductsService.remove(id)
            Response.success(res, 200, 'Producto Eliminado', deletedId)
        } catch (error) {
            DEBUG(error)
            Response.error(res, error)
        }
    },

    generateReport: async (req, res) => {
        try{
            await ProductsService.generateReport('Inventory', res)
        }catch(error){
            DEBUG(error)
            Response.error(res, error)
        }
    }
}