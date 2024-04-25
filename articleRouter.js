const express =  require('express')
const articleRouter = express.Router()
const {getAllArticles} = require('./utils')

articleRouter.get('/', (req, res, next)=> res.send(getAllArticles()))

module.exports = articleRouter