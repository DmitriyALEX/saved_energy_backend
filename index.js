const express = require('express')
//-------------------------
const bodyParser = require('body-parser')
const cors =  require('cors')
//--------------------------
require('dotenv').config()
//--------------------------
const app = express()
//--------------------------
app.use(bodyParser.json())
app.use(cors())
//--------------------------

//start MONGO DB
const startDb = require('./db')
startDb()

// ROUTES
//auth
const log = require('./routes/log')
const sign = require('./routes/sign')
//remind password
const remind = require('./routes/remind')

//post
const postCreate = require('./routes/postCreate')
const postGet = require('./routes/postGet')
const postDelete = require('./routes/postDelete')

//dashboard
const dashSet = require('./routes/dashSet')
const dashGet = require('./routes/dashGet')
const dashPay = require('./routes/dashPay')

//admin
const adminUsers = require('./routes/adminUsers')
const adminDashes = require('./routes/adminDashes')
const adminSaved = require('./routes/adminSaved')

//auth
app.use(log)
app.use(sign)
//remind password
app.use(remind)

//post
app.use(postCreate)
app.use(postGet)
app.use(postDelete)

//dashboard
app.use(dashSet)
app.use(dashGet)
app.use(dashPay)

//admin
app.use(adminUsers)
app.use(adminDashes)
app.use(adminSaved)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('listen port 3000')
})