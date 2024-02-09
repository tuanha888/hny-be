import express, { Request, Response } from "express"
const router = express.Router()
const Comment = require("../models/Comment")
import {v4 as uuid} from 'uuid'

router.post("/", async (req: Request, res: Response) => {
    const {imageId, content} = req.body;
    const newComment = new Comment({
        imageId,
        content,
        id: uuid()
    })
    await newComment.save()
    res.json(newComment)
})
router.get("/:imageId", async (req : Request, res: Response) => {
    const {imageId} = req.params
    const comments = await Comment.find({imageId: imageId})
    await res.json(comments)
})

export default router