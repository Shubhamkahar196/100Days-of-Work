import mongoose, {mongo,Schema} from 'mongoose'
import JWT from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const habitSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    consistency: [
        {
            type: Date,
            default: Date.now
        }
    ],
    progress: [
        {
            type: Number,
            default: 0
        }
    ],
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{timeseries: true});

// how to calculate consistency 
habitSchema.methods.calculateConsistency = function (){
    const consistency = this.consistency;
    const totalDays = consistency.length;
    const completedDays =
    consistency.filter((day)=>
        day.completed).length;
    return (completedDays / totalDays) *100;
};

// define method for progress
habitSchema.methods.updateProgress = function(progress){
    this.progress.push(progress);
    return this.save();
};

// create habit model
export const  Habit = mongoose.model("Habit", habitSchema);