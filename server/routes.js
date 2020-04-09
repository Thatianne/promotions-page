const { Router } = require('express')
const StoreController = require('./controllers/StoreController')

const routes = Router()

routes.post('/stores', StoreController.store)

module.exports = routes
