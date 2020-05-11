const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')
const connectDB = require('./config/db')

const PORT = process.env.PORT || 5000

// Load env config
dotenv.config({ path: './config/config.env' })

// Connect to database
connectDB()

// Routes files
const bootcampsRoutes = require('./routes/bootcamps')

const app = express()

app.use(express.json())

// Dev logging middleware
if(process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'))
}

app.use('/api/v1/bootcamps', bootcampsRoutes)

const server = app.listen(
  PORT,
  console.log(`Serve running in ${process.env.NODE_ENV} mode | port ${PORT}`.yellow.bold)
)

// Handle unhandled rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red)
  //Close server & exit process
  server.close(() => process.exit(1))
})