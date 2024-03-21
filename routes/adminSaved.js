const express = require('express')
const Post = require('../models/postModel')

const router = express.Router()

router.get('/adm/saved', async (req, res) => {
    try {
        const AllSaved = await Post.find()
        return res.status(200).json(AllSaved)
    } catch (e) {
        console.error(e)
    }
})

module.exports = router