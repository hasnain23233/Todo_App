const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
    res.send('This is a first middleware of the application of the beckend application of the website')
})

app.listen(4200, () => {
    console.log('Server side running on the http://localhost:4200 check it')
})