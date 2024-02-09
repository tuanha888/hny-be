import mongoose from "mongoose"
const Schema = mongoose.Schema

const CommentSchema = new Schema({
	imageId: {
        type: String,
        required: true
    },
	content: {
		type: String,
		required: true
	},
    id: {
        type: String,
		required: true
    },
	createdAt: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('comments', CommentSchema)