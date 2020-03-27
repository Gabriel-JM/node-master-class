const express = require('express')
const dotenv = require('dotenv')
const PORT = process.env.PORT || 5000

// Routes files
const bootcampsRoutes = require('./routes/bootcamps')

// Load env config
dotenv.config({ path: './config/config.env' })

const app = express()

app.use('/api/v1/bootcamps', bootcampsRoutes)

app.listen(PORT, console.log(`Serve running in ${process.env.NODE_ENV} mode | port ${PORT}`))