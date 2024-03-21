const mongoose = require('mongoose')

const dashSchema = new mongoose.Schema({
  date: String,
  actuallyValue: Number,
  gap: Number,
  amount: Number,
  pay: Boolean,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Dash', dashSchema)