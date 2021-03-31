const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/cruddb'

const app = express()
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected.....')
})
app.use(express.json())
  
const crudrouter = require('./routes/crud')
app.use('/crud', crudrouter)



app.listen(9000, () =>{
    console.log('server started')
})

