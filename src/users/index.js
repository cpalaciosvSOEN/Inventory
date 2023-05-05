const EXPRESS = require('express')
const ROUTER = EXPRESS.Router()
const { UsersController } = require('./controller')

module.exports.UsersAPI = (app) => {
    ROUTER
        .get('/', UsersController.getUsers)
        .get('/:id', UsersController.getUser)
        .post('/', UsersController.createUser)
        .put('/:id', UsersController.updateUser)
        .delete('/:id', UsersController.deleteUser)
    
    app.use('/api/users', ROUTER)
}