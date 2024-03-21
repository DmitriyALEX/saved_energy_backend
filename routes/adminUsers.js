const express = require('express')
const User = require('../models/userModel')

const router = express.Router()

router.get('/adm/users', async (req, res) => {
    try {
        const allUsers = await User.find()
        return res.status(200).json(allUsers)
    } catch(e) {
        console.log(e)
    }
})

module.exports = router