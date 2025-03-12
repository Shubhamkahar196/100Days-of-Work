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

