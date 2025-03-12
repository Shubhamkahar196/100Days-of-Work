import mongoose from 'mongoose';
import { z } from 'zod';


//habit schema

const habitSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
    consistency: [{type: DataTransfer, default: Date.now}],
    progress: [{type: Number, default: 0}]  
});

const habitValidator = z.object({
    title: z.string().min(3).max(50),
    description: z.string.min(3).max(200),
    completed: z.boolean(),
    consistency: z.array(z.date()),
    progress: z.array(z.number())
});
