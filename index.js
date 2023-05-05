const EXPRESS = require('express')
const DEBUG = require('debug')('app:main')

const { Config } = require('./src/config/index')
const { ProductsAPI } = require('./src/products')
const { UsersAPI } = require('./src/users')
const { IndexAPI, NotFoundAPI } = require('./src/index')

const APP = EXPRESS()
const PORT = Config.port

APP.use(EXPRESS.json())

IndexAPI(APP)
ProductsAPI(APP)
UsersAPI(APP)
NotFoundAPI(APP)

APP.listen(PORT, () => {
    DEBUG(`Server is running on port ${PORT}`)
})