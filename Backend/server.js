import express from 'express';
import cors from 'cors';
import { z } from 'zod';

// create an instance of the express app
const app = express();

//enable cors
app.use(cors());

//Parse Json Bodies
app.use(express.json());




app.listen(3000,()=>{
    console.log("Server listening on port 3000");
});