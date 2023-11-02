import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { config } from 'dotenv'
import productRouter from './routes/product.js'
import userRouter from './routes/users.js'

config()
const app = express()

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('CONNECTED TO DB'))
  .catch((err) => console.log(err))

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))
app.use('/products', productRouter)
app.use('/users', userRouter)

app.listen(process.env.PORT, () => {
  console.log('server started')
})
