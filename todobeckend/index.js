const express = require('express')
const app = express()
const ListRouter = require('./router/todoItemRouter')
const mongoose = require('mongoose')
const { errorhandle } = require('./controller/error')
require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')

const mongoLink = process.env.MONGO_URL


app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use('/api/todo', ListRouter)
app.use(errorhandle)

mongoose.connect(mongoLink).then(() => {
    console.log('connecting to the database of the website')
    app.listen(4200, () => {
        console.log('Server side running on the http://localhost:4200 check it')
    })
}).catch(() => {
    console.log('sorry we couldn`t connect to the database of your application check it and try aging')
})