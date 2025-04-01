

import {Router} from 'express';
import { habitModel} from '../db.js';

const habitRouter = Router();

// Get all habits
habitRouter.get('/', async (req, res) => {
  try {
    const habits = await habitModel.find();
    res.json(habits);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching habits' });
  }
});

// Create a new habit
habitRouter.post('/create', async (req, res) => {
  try {
    const habit = new habitModel(req.body);
    await habit.save();
    res.json(habit);
  } catch (err) {
    res.status(500).json({ message: 'Error creating habit' });
  }
});

// Get a habit by ID
habitRouter.get('/:id', async (req, res) => {
  try {
    const habit = await habitModel.findById(req.params.id);
    if (!habit) {
      res.status(404).json({ message: 'Habit not found' });
    } else {
      res.json(habit);
    }
  } catch (err) {
    res.status(500).json({ message: 'Error fetching habit' });
  }
});

// Update a habit
habitRouter.put('/:id', async (req, res) => {
  try {
    const habit = await habitModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!habit) {
      res.status(404).json({ message: 'Habit not found' });
    } else {
      res.json(habit);
    }
  } catch (err) {
    res.status(500).json({ message: 'Error updating habit' });
  }
});

// Delete a habit
habitRouter.delete('/:id', async (req, res) => {
    try {
      const habit = await habitModel.findOneAndDelete(req.params.id);
      if (!habit) {
        res.status(404).json({ message: 'Habit not found' });
      } else {
        res.json({ message: 'Habit deleted successfully' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error deleting habit', error: err.message });
    }
  });
  
  

export  {
    habitRouter
};



