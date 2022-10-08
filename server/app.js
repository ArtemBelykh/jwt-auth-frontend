require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express()
const PORT = process.env.PORT || 3000

const errorMiddleware = require('./Middleware/error.middleware')
const router = require('./routes/index')

app.use(express.json())
app.use(cookieParser())
const corsOptions ={
  origin:'*',
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration
app.use('/api', router)
// app.use(errorMiddleware)

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()