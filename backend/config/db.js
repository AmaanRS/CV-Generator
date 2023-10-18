import mongoose from 'mongoose'
import  Colors from 'colors'
const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to Mongodb Database ${conn.connection.host}`.bgMagenta.white)

    } catch (error) {
        console.log(`Errors in MongoDb ${error}`.bgRed.white);
        
    }
}
export default connectDB