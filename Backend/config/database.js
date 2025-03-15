// Import Mongoose
const mongoose = require('mongoose');

// Define the database connection string
const dbConnectionString = 'mongodb://localhost:27017/100-days-of-work';

// Connect to the database
mongoose.connect(dbConnectionString, { useNewUrlParser: true, useUnifiedTopology: true });

// Define the database connection
const db = mongoose.connection;

// Handle database connection errors
db.on('error', (err) => {
  console.error('Database connection error:', err);
});

// Handle database connection success
db.once('open', () => {
  console.log('Database connection established');
});

// Export the Mongoose instance
module.exports = mongoose;
