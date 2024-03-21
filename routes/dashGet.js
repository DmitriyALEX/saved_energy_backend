const express = require('express')
const Dash = require('../models/dashModel')

const router = express.Router()

//GET > DATA
router.get('/dash/:userId', async (req, res) => {
    try {
        const {userId} = req.params
        // userDash ---all info
        const userDash = await Dash.find({ author: userId })
        res.json(userDash)
    } catch (e) {
        console.error(e)
    }
})

module.exports = router