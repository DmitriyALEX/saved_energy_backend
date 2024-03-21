const express = require('express')
const User = require('../models/userModel')

const resend = require('../controllers/resend')

const router = express.Router()

//GET -- FIND > DATA
router.post('/remind', async (req, res) => {
    try {
            const { email } = req.body
            const findUser = await User.findOne({ email })
            //User not found
            if(!findUser) {
                res.status(400).send('User not found')
            } if(findUser) {
                //user found
                const { username, password } = findUser
                const message = {
                    from: '<delivered@resend.dev>',
                    to: email,
                    subject: 'remind your data',
                    html:   `   <b>Username: </b>${username}
                                <b>Password: </b>${password}
                            `
                }
                await resend(message);
                res.status(201).send('User found');
            }         
    } catch (e) {
        console.error(e)
    }
})

module.exports = router