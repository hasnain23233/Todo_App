const express = require('express')
const app = express()
const ListRouter = require('./router/listRouter')


app.use(ListRouter)

app.listen(4200, () => {
    console.log('Server side running on the http://localhost:4200 check it')
})