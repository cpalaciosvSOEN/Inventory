const EXPRESS = require('express')
const createError = require('http-errors')

const { Response } = require('../common/response')

module.exports.IndexAPI = (app, url) => {
    const router = EXPRESS.Router();

    const menu = {
        products: {
            url: `${url}api/products`,
            methods: {
                get: {
                    url: `${url}api/products`,
                    description: `Get all products`
                },
                getReport: {
                    url: `${url}api/products/report`,
                    description: `Get report of products`
                },
                getById: {
                    url: `${url}api/products/:id`,
                    description: `Get product by id`
                },
                post: {
                    url: `${url}api/products`,
                    description: `Create a new product`
                },
                put: {
                    url: `${url}api/products/:id`,
                    description: `Update a product`
                },
                delete: {
                    url: `${url}api/products/:id`,
                    description: `Delete a product`
                }
            },
        },
        users: {
            url: `${url}api/users`,
            methods: {
                get: {
                    url: `${url}api/users`,
                    description: `Get all users`
                },
                getById: {
                    url: `${url}api/users/:id`,
                    description: `Get user by id`
                },
                post: {
                    url: `${url}api/users`,
                    description: `Create a new user`
                },
                put: {
                    url: `${url}api/users/:id`,
                    description: `Update a user`
                },
                delete: {
                    url: `${url}api/users/:id`,
                    description: `Delete a user`
                }
            },
        },
        sales: {
            url: `${url}api/sales`,
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