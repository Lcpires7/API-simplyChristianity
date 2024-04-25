const express =  require('express')
const imagesRouter = express.Router()
const {getImage} = require('./utils')

imagesRouter.get('/:name', getImage())

module.exports = imagesRouter