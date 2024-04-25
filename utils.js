const articles = require('./data.js')
const path = require('path')

const getAllArticles = () => {
    return articles
}

const getImage = (req, res, next) => {
    const name = req.params.name
    alert(process.env.PATH)
    res.sendFile(`${process.env.PAT || 'http://localhost:4001'}/public/img/${name}`)
}

module.exports = {
    getAllArticles,
    getImage
}

console.log(process.env.PORT)