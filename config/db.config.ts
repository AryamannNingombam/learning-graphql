import mongoose from 'mongoose'

const ConnectToDB = async () => {
  if (!process.env.MONGO_DB_URI) {
    console.log('URI not provided!')
    return
  }
  
  const conn = await mongoose.connect(process.env.MONGO_DB_URI)
  console.log(`MongoDB connected: ${conn.connection.host}`)
}

export default ConnectToDB;