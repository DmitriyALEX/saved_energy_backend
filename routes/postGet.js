const express = require('express')
const Post = require('../models/postModel')

const router = express.Router()

//GET > DATA
router.get('/post/:userId', async (req, res) => {
    try {
        const {userId} = req.params
        // userPosts ---all info
        const userPosts = await Post.find({ author: userId })
        res.json(userPosts)
    } catch (e) {
        console.error(e)
    }
})

module.exports = router