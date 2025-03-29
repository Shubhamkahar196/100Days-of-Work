// import { Router } from 'express'
// import {registerUser}  from '../controllers/user.controller.js'
// const router = Router();


// // router.route("/register").post(registerUser);
// router.post("/register", registerUser);

// export default router



import {Router} from 'express';
import {registerUser, loginUser, getCurrentUser} from '../controllers/user.controller.js'
import authMiddleware from '../middlewares/auth.middleware.js';

const router  = Router();

router.post("/register",registerUser);
router.post("/login", loginUser);
router.get("/me", authMiddleware,getCurrentUser);

// export default router;
export const userRoutes = router;