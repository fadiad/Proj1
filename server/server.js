const express = require('express')
const path = require('path')
const api = require('./Routs/api')
const app = express()
const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/Kindergarten")
 

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));


app.use(express.json())
app.use(express.static('upload'))
app.use(express.urlencoded({ extended: false }))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})


app.use('/', api)

const port = 4000
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})








