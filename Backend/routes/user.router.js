// Import Express
const express = require('express');
const router = express.Router();

// Import the User model
const User = require('../models/User');

// Define a route to create a new user
router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({ message: 'User created' });
  } catch (error) {
    res.status(400).send({ error: 'Invalid request data' });
  }
});

// Define a route to login a user
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(404).send({ error: 'User not found' });
    } else {
      const isValidPassword = await user.comparePassword(req.body.password);
      if (!isValidPassword) {
        res.status(401).send({ error: 'Invalid password' });
      } else {
        const token = await user.generateToken();
        res.json({ token });
      }
    }
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

// Export the router
module.exports = router;
