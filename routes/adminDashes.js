const express = require('express')
const Dash = require('../models/dashModel')

const router = express.Router()

router.get('/adm/dashes', async (req, res) => {
    try {
        const AllDashes = await Dash.find()
        return res.status(200).json(AllDashes)
    } catch (e) {
        console.error(e)
    }
})

module.exports = router