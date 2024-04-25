const express = require('express');
const path = require('path');
require('dotenv').config()

const PORT = process.env.PORT || 4001

const app = express()

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/img', (req, res, next)=> res.sendFile(path.join(__dirname,'public/batismo.jpg')))

const articleRouter = require('./articleRouter');

app.use('/articles', articleRouter)

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
