
import 'dotenv/config'






import express from "express";
import mongoose from 'mongoose';
import {userRouter} from './routes/user.route.js'
import {habitRouter} from './routes/habit.route.js'
const app = express();

app.use(express.json());
app.use("/api/v1/user",userRouter)
app.use("/api/v1/habit",habitRouter)

async function main(){
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(3000,()=>{
        console.log("server is running on port 3000");
    })
}

main()