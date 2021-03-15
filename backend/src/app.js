const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

//Settings
const app = express()
app.set('port', 3500)


//Middleware
app.use(cors())

//Routes
app.use('/', (req, res)=>{
    res.send('Hello')
})

app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'))
})