require('dotenv').config()

const { Resend } = require('resend')

const resend = new Resend(process.env.RESEND_API)
  
async function send(message) {
    const { data, error } = await resend.emails.send(message)
    if (error) {
        return console.error({ error })
    }
}

module.exports = send


