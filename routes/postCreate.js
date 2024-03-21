const express = require('express')
const Post = require('../models/postModel')

const router = express.Router()

//GET -- FIND > DATA
router.post('/post/create', async (req, res) => {
    try {
        const { id, date, title, content, author } = req.body
        //if User already exists in DB
        const newPost = new Post({ date, title, content, author })
        await newPost.save()
        res.json(newPost)
    } catch (e) {
        console.error(e)
    }
})

module.exports = router