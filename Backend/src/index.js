// import dotenv 
import express from 'express'
import dotenv from 'dotenv';
// import {app} from './app.js'
// import connectDB form db folder index.js
import connectDB from './db/index.js';
// import { routes }from './routes';
import {userRoutes} from './routes/user.routes.js'
import { habitRoutes} from './routes/habit.routes.js'

const app = express();

app.use(express.json());
app.use("/api/users", userRoutes)
app.use("/api/habits", habitRoutes);

dotenv.config({
    path: './env'
})

connectDB()
.then( ()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) =>{
    console.log("Mongodb connection fail", err);
})