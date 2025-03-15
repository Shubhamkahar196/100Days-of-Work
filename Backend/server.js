


// Import Express
import  express from 'express';

// Import the routes
import { habitRoutes } from './routes/habits';
import {userRoutes}  from './routes/users';
import {authRoutes} from './routes/auth';

// Import the middleware
const authenticate = require('./utils/middleware/authenticate');
const errorHandler = require('./utils/middleware/error');

// Create a new Express app
const app = express();

// Use middleware to parse JSON requests
app.use(express.json());

// Use middleware to authenticate requests
app.use(authenticate);

// Use routes
app.use('/api/habits', habitRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// Use error handling middleware
app.use(errorHandler);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});




app.listen(3000,()=>{
    console.log("Server listening on port 3000");
});