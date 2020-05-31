import express from 'express'
import routes from './routes'
import cors from 'cors'
import dotenv from 'dotenv'
import { errors } from 'celebrate'
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

export default app
