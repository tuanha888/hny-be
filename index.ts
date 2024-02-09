const express = require('express')
import mongoose from "mongoose"
const cors = require('cors')
import commentRouter from "./routes/comment-router"
import { Request, Response } from "express"
const connectDB = async () => {
	try {
		await mongoose.connect(
			'mongodb+srv://tuanha888:hoangtuan2608@hny.25zjzhg.mongodb.net/'
		)

		console.log('MongoDB connected')
	} catch (error) {
        console.log(error)
		process.exit(1)
	}
}

connectDB()

const app = express()
app.use(express.json())
app.use(cors())
app.use("/api/comments", commentRouter)
app.get("/", (req : Request, res : Response) => {
    res.json("dcm")
})

app.listen(5000, () => console.log(`Server started on port ${5000}`))