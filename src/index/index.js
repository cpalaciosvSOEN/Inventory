const EXPRESS = require('express')
const createError = require('http-errors')

const { Response } = require('../common/response')

module.exports.IndexAPI = (app) => {
    const router = EXPRESS.Router();

    const menu = {
        products: {
            url: '/api/products',
            methods: {
                get: {
                    url: '/api/products',
                    description: 'Get all products'
                },
                getReport: {
                    url: '/api/products/report',
                    description: 'Get report of products'
                },
                getById: {
                    url: '/api/products/:id',
                    description: 'Get product by id'
                },
                post: {
                    url: '/api/products',
                    description: 'Create a new product'
                },
                put: {
                    url: '/api/products/:id',
                    description: 'Update a product'
                },
                delete: {
                    url: '/api/products/:id',
                    description: 'Delete a product'
                }
            },
        },
        users: {
            url: '/api/users',
            methods: {
                get: {
                    url: '/api/users',
                    description: 'Get all users'
                },
                getById: {
                    url: '/api/users/:id',
                    description: 'Get user by id'
                },
                post: {
                    url: '/api/users',
                    description: 'Create a new user'
                },
                put: {
                    url: '/api/users/:id',
                    description: 'Update a user'
                },
                delete: {
                    url: '/api/users/:id',
                    description: 'Delete a user'
                }
            },
        },
        sales: {
            url: '/api/sales',
            methods: {
                
            },
        },
    }

    router.get('/', (req, res) => {
        Response.success(res, 200, 'Welcome to the API', menu)
    })

    app.use('/', router)
}

module.exports.NotFoundAPI = (app) => {
    const router = EXPRESS.Router();

    router.all('*', (req, res) => {
        Response.error(res, new createError.NotFound())
    })

    app.use('/', router)
}