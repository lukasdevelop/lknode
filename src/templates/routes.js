import express from 'express'
import { celebrate, Segments, Joi } from 'celebrate'
const routes = express.Router()

import HomeController from './controllers/HomeController'

routes.get('/', HomeController.index)

export default routes
