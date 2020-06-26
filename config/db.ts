import mongoose from 'mongoose'
import { cyan, underline } from 'colors/safe'

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI as string, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  
  console.log(
    cyan(
      underline(
        `MongoDB Connected: ${conn.connection.host}`
      )
    )
  )
}

export default connectDB