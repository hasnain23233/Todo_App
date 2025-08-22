const express = require('express')
const app = express()
const ListRouter = require('./router/todoItemRouter')
const mongoose = require('mongoose')
const { errorhandle } = require('./controller/error')
require('dotenv').config()
const cors = require('cors')

const mongoLink = process.env.MONGO_URL

// Middleware
app.use(express.json())
app.use(cors({ origin: "http://localhost:5173" }))

// Routes
app.use('/api/todo', ListRouter)
app.use(errorhandle)

// DB connect
mongoose.connect(mongoLink, { dbName: 'ToDoApp' })
    .then(() => {
        console.log('✅ Connected to MongoDB')
        app.listen(4200, () => {
            console.log('🚀 Server running on http://localhost:4200')
        })
    })
    .catch(() => {
        console.log('❌ Could not connect to MongoDB, check your config')
    })
