const express = require('express')
const Dash = require('../models/dashModel')

const router = express.Router()

//GET -- FIND > DATA
router.post('/dash', async (req, res) => {
    try {
        const { date, actuallyValue, gap, amount, pay, author } = req.body
        const newDash = new Dash({ date, actuallyValue, gap, amount, pay, author })
        await newDash.save()
        res.json(newDash)
    } catch (e) {
        console.error(e)
    }
})

module.exports = router