const express = require('express')
const User = require('../models/userModel')

const router = express.Router()

//GET -- FIND > DATA
router.post('/log', async (req, res) => {
    try {
        const { username, password } = req.body
        //if User already exists in DB
        const findUser = await User.findOne({ username, password })
        if(!findUser) {
             res.status(401).json('user not found') 
        }
        if(findUser) {
            res.status(201).json({_id: findUser._id, username: findUser.username,  email: findUser.email })
        } 
    } catch (e) {
        console.error(e)
    }
})

module.exports = router