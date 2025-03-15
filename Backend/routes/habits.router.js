



// Import Express
const express = require('express');
const router = express.Router();

// Import the Habit model
const Habit = require('../models/Habit');

// Define a route to get all habits
router.get('/', async (req, res) => {
  try {
    const habits = await Habit.find();
    res.json(habits);
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

// Define a route to create a new habit
router.post('/', async (req, res) => {
  try {
    const habit = new Habit(req.body);
    await habit.save();
    res.json(habit);
  } catch (error) {
    res.status(400).send({ error: 'Invalid request data' });
  }
});

// Define a route to update a habit
router.put('/:id', async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);
    if (!habit) {
      res.status(404).send({ error: 'Habit not found' });
    } else {
      habit.set(req.body);
      await habit.save();
      res.json(habit);
    }
  } catch (error) {
    res.status(400).send({ error: 'Invalid request data' });
  }
});

// Define a route to delete a habit
router.delete('/:id', async (req, res) => {
  try {
    await Habit.findByIdAndRemove(req.params.id);
    res.json({ message: 'Habit deleted' });
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

// Export the router
module.exports = router;








