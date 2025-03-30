// require('dotenv').config()
import { config } from "dotenv";
import express from "express";
import mongoose from 'mongoose';
import {userRouter} from './routes/user.route.js'
config();
const app = express();

app.use(express.json());
app.use("/api/v1/user",userRouter)

async function main(){
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(3000,()=>{
        console.log("server is running on port 3000");
    })
}

main()