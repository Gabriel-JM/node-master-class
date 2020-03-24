const express = require('express')
const dotenv = require('dotenv')
const PORT = process.env.PORT || 5000

dotenv.config({ path: './config/config.env' })

const app = express()

app.listen(PORT, console.log(`Serve running in ${process.env.NODE_ENV} mode | port ${PORT}`))