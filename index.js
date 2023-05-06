const EXPRESS = require('express')
const DEBUG = require('debug')('app:main')

const { Config } = require('./src/config/index')
const { ProductsAPI } = require('./src/products')
const { UsersAPI } = require('./src/users')
const { IndexAPI, NotFoundAPI } = require('./src/index')

const APP = EXPRESS()
const APIURL = Config.url
const PORT = Config.port

APP.use(EXPRESS.json())

IndexAPI(APP, APIURL)
ProductsAPI(APP, APIURL)
UsersAPI(APP, APIURL)
NotFoundAPI(APP, APIURL)

APP.listen(PORT, () => {
    DEBUG(`Server is running on ${APIURL}:${PORT}`)
})