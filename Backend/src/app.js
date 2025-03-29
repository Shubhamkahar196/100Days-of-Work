// import express from 'express';
// import cors from 'cors';
// import cookieParser from 'cookie-parser';

// const app = express();

// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// }))

// app.use(express.json({limit: "16kb"}))
// app.use(express.urlencoded({extended: true, limit: "16kb"}))
// app.use(express.static("public"))
// app.use(cookieParser()) // for cookie

// //routes import

// import userRouter from './routes/user.routes.js'

// //router declaration
// app.use("/api/v1/users",userRouter);

// export { app }


import { Router } from 'express';
import {userRoutes } from './routes/user.routes.js'
import { habitRoutes } from './routes/habit.routes.js'

const router = Router();

router.use("/users", userRoutes);
router.use("/habits", habitRoutes);

export default router;