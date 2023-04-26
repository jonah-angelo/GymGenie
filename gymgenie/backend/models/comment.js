const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        content: { type: String, required: true },
        exerciseId: { type: String, require: true }
    }
)

module.exports = mongoose.model('Comment', CommentSchema)