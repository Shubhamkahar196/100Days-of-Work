// Import Express
const express = require('express');
const router = express.Router();

// Import the authenticate middleware
const authenticate = require('../middleware/authenticate');

// Define a route to authenticate a user
router.get('/authenticate', authenticate, async (req, res) => {
  try {
    res.json({ message: 'User authenticated' });
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

// Export the router
module.exports = router;