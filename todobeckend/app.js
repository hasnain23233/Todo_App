const express = require('express')
const app = express()
const ListRouter = require('./router/listRouter')
const { errorhandle } = require('./controller/listController')


app.use(ListRouter)
app.use(errorhandle)

app.listen(4200, () => {
    console.log('Server side running on the http://localhost:4200 check it')
})