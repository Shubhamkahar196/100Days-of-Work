import { asyncHandler } from "../utils/asyncHandler.js";
import { Habit } from '../models/habit.models.js'

// create habit
const createHabit = asyncHandler(async (req,res)=>{
    const habit = await Habit.create(req.body);
    res.status(201).json({
        message: "Habit created successfully",Habit
    });
});

// get habit

const getHabit = asyncHandler(async (req,res)=>{
    const habit = await Habit.find().populate("user");
    res.status(200).json({
        message: "Habits retrieved Successfully",habit
    })
})

//update habit
const updateHabit = asyncHandler(async(req,res)=>{
    const habit = await Habit.findByIdAndUpdate(req.params.id,req,body,{new: true});
    res.status(200).json({
        message: "Habit updated successfully", habit
    });
})

// delete habit
const deleteHabit = asyncHandler(async(req,res)=>{
    await Habit.findByIdAndDelete(req.params.id);
    res.status(200).json({
        message: "Habit deleted successfully"
    });
})

//exporting
export {createHabit, getHabit, updateHabit, deleteHabit};