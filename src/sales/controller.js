const { UsersService } = require('./services');
const DEBUG = require('debug')('app:users:controller')
const { Response } = require('../common/response')
const createError = require('http-errors');


module.exports.UsersController = {
    getUsers: async (req, res) => {
        try {
            let users = await UsersService.getAll()
            Response.success(res, 200, 'Lista de Usuarios', users)
        }catch(error){
            DEBUG(error)
            Response.error(res, error)
        }
    },

    getUser: async (req, res) => {
        try {
            const id = req.params.id
            let user = await UsersService.getById(id)
            if(!user){
                Response.error(res, new createError.NotFound())
            }else{
                Response.success(res, 200, `Usuario ${id}`, user)
            }
        } catch (error) {
            DEBUG(error)
            Response.error(res, error)
        }

    },

    createUser: async (req, res) => {
        try {
            const { body } = req
            if(!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest())
            }else{
                const insertedId = await UsersService.create(body)
                Response.success(res, 201, 'Usuario Agregado', insertedId)
            }
        } catch (error) {
            DEBUG(error)
            Response.error(res, error)
        }
    },

    updateUser: async (req, res) => {
        try {
            const { body } = req
            const id = req.params.id
            if(!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest())
            }else{
                const updatedId = await UsersService.update(id, body)
                Response.success(res, 200, 'Usuario Actualizado', updatedId)
            }
        } catch (error) {
            DEBUG(error)
            Response.error(res, error)
        }
    },

    deleteUser: async (req, res) => {
        try {
            const id = req.params.id
            const deletedId = await UsersService.remove(id)
            Response.success(res, 200, 'Usuario Eliminado', deletedId)
        } catch (error) {
            DEBUG(error)
            Response.error(res, error)
        }
    },

}