require('dotenv').config()

const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true }))

app.use('/app', express.static (path.join (__dirname, '/public')))

// API router
const apiRouter = require('./routes/apiRouter')

app.use('/api', apiRouter)

let port = process.env.PORT || 3000
app.listen(port)