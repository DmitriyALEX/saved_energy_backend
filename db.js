const mongoose = require('mongoose')
require('dotenv').config()

async function start() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log('Connected'))
    } catch (e) {
        console.error(e)
    }
}

module.exports = start