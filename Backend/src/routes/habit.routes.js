import {Router} from 'express';
import { createHabit, getHabit, updateHabit, deleteHabit } from '../controllers/habit.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = Router();

router.post("/",authMiddleware,createHabit);
router.get("/",authMiddleware,getHabit);
router.put("/:id",authMiddleware,updateHabit);
router.delete("/:id",authMiddleware,deleteHabit);

export const habitRoutes = router; 
