import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import colors from 'colors'
import errorHandler from './middleware/error'
import connectDB from './config/db'

// Routes files
import bootcampsRoutes from './routes/bootcamps'

const PORT = process.env.PORT || 5000

// Load env config
dotenv.config({ path: './config/config.env' })

// Connect to database
connectDB()


const app = express()

app.use(express.json())

// Dev logging middleware
if(process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'))
}

app.use('/api/v1/bootcamps', bootcampsRoutes)

app.use(errorHandler)

const server = app.listen(
  PORT,
  () => console.log(
    `Serve running in ${process.env.NODE_ENV} mode | port ${PORT}`.yellow.bold
  )
)

// Handle unhandled rejections
process.on('unhandledRejection', (err: Error, promise) => {
  console.log(`Error: ${err.message}`.red)
  //Close server & exit process
  server.close(() => process.exit(1))
})