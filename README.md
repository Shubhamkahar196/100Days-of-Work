100 Days of Work Project


Installation
1. Clone the repository: 100 Days of Work Project

Overview
This project is a backend application designed to help individuals track their daily habits and stay motivated. The application allows users to create an account, log their daily habits, and view their progress over time.



Technologies Used
- Backend: Node.js, Express.js, MongoDB
- Authentication: JSON Web Tokens (JWT)
- validation : zod

Installation
1. Clone the repository: git clone https://github.com/your-username/100-days-of-work.git
2. Install dependencies: npm install
3. Start the server: npm start
4. Start the client: npm run client

API Documentation
Authentication
- POST /api/auth/register: Create a new user account
- POST /api/auth/login: Login to an existing user account
- GET /api/auth/user: Get the current user's profile information

Habits
- GET /api/habits: Get a list of all habits
- POST /api/habits: Create a new habit
- GET /api/habits/:id: Get a specific habit by ID
- PUT /api/habits/:id: Update a specific habit by ID
- DELETE /api/habits/:id: Delete a specific habit by ID

Progress
- GET /api/progress: Get a list of all progress entries
- POST /api/progress: Create a new progress entry
- GET /api/progress/:id: Get a specific progress entry by ID
- PUT /api/progress/:id: Update a specific progress entry by ID
- DELETE /api/progress/:id: Delete a specific progress entry by ID

Contributing
Contributions are welcome! Please submit a pull request with your changes.


