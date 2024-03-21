const express = require('express')
const Post = require('../models/postModel')

const router = express.Router()

//GET > DATA
router.delete('/post/del/:postId', async (req, res) => {
    try {
        const {postId} = req.params
        const deletePost = await Post.findByIdAndDelete({ _id: postId })
        if(!deletePost) {
            return res.status(404).json({message: 'post not deleted'})
        }
        res.status(200).json(deletePost)
    } catch (e) {
        console.error(e)
    }
})

module.exports = router