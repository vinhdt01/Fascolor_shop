const express = require('express')
const cors  = require('cors')
const router = require('./src/router/index.router')
const app = express()
const connectDB = require('./src/config/connectDB')
const port = 3000
app.use(cors())
connectDB()
router(app)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})