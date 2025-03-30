import express from 'express';
import {Router} from 'express'

const userRouter = Router();

import jwt from 'jsonwebtoken';
// import config from '/config.js';
import bcrypt from 'bcrypt';
import z from 'zod';

userRouter.post("/signup", async function(req,res){
    res.status(200).json({
        message: "signup successfully shubham"
    })
})

export  {
    userRouter
};