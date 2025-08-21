const express = require('express')
const app = express()
const ListRouter = require('./router/listRouter')
const mongoose = require('mongoose')
const { errorhandle } = require('./controller/listController')
require('dotenv').config()

const mongoLink = process.env.MONGO_URL


app.use(ListRouter)
app.use(errorhandle)

mongoose.connect(mongoLink).then(() => {
    console.log('connecting to the database of the website')
    app.listen(4200, () => {
        console.log('Server side running on the http://localhost:4200 check it')
    })
}).catch(() => {
    console.log('sorry we couldn`t connect to the database of your application check it and try aging')
})