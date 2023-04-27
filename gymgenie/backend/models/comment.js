const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        content: { type: String, required: true },
        exerciseId: { type: String, require: true },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
    }
)

module.exports = mongoose.model('Comment', CommentSchema)