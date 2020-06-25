import mongoose from 'mongoose'

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI as string, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  
  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold)
}

export default connectDB