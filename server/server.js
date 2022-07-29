import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/user.js'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
	res.send('hello world')
})

app.use('/user', userRouter)

app.listen(3500)
