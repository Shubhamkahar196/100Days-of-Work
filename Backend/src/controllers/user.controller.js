//this is for error handling and avoid writing ttry catch every time
import { asyncHandler } from "../utils/asyncHandler";
// importing user model
import User from '../models/user.models'

// define a function to register a new 
const registerUser = asyncHandler( async (req,res) =>{
    // res.status(200).json({
    //     message: "ok"
    // })

    // get the user details from the request body
    const { name, email, password} =req.body;

    // check if the user already exists 
    const existingUser = await User.findOne({email});
    if(existingUser){
        res.status(400).json({message: "User already exists"});
        return;
    }

    //create a new user
    const user = await User.create({name,email,password});

    //send a response with the new user details
    res.status(201).json({
        message: "User created successfully", user});
})

// define a function to login an existing user

export {registerUser}