import mongoose from "mongoose";
import { z } from 'zod';

//schema
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
});

//validate by zod
const userValidator = z.object({
    name:z.string().min(3).max(50),
    email:z.string().email(),
    password:z.string().min(8)
});

const User = mongoose.model('User',userSchema);

export {User, userValidator};