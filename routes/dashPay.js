const express = require('express')
const Dash = require('../models/dashModel')

const router = express.Router()

//CHANGE > DATA
router.patch('/dash/pay/:postId', async (req, res) => {
    try {
        const { postId } = req.params
        const { pay } = req.body
        const updatedDash = await Dash.findByIdAndUpdate(postId, { pay }, { new: true })
        res.json(updatedDash)
    } catch (e) {
        console.error(e)
    }
})

module.exports = router