// import mongoose
import mongoose from 'mongoose'

//import DB_Name from constrants
import { DB_NAME } from '../constrants'

const connectDB = async() =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\MongoDB connected !! DB HOST :${connectionInstance.connection.host}`)
    }catch(error){
        console.log("MONGODB connection error",error);
        process.exit(1)
    }
}

export default connectDB;