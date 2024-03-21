const express = require('express')
const User = require('../models/userModel')

const router = express.Router();

//SAVE > DATA
router.post('/sign', async (req, res) => {
    try {
        //userData 
        const { username, email, password } = req.body

        //if User already exists in DB
        const findUser = await User.findOne({ $or: [{ username }, { email }] })
        if(findUser) {
            return res.status(401).json('User already exists')
        }

        // create NEW user
        const newUser = new User({ username, email, password })

        // save in DB
        await newUser.save()
        //-----------------------------------
        //send to client created user
        const createdUser = await User.findOne({ username, email });
        res.status(201).json({_id: createdUser._id, username: createdUser.username, email: createdUser.email})
    } catch (e) {
        console.error(e)
    }
})

module.exports = router