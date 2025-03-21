// Import the asyncHandler function
import { asyncHandler } from "../utils/asyncHandler";

// Import the User model
import User from "../models/User";

// Define a function to register a new user
const registerUser = asyncHandler(async (req, res) => {
  // Get the user's details from the request body
  const { name, email, password } = req.body;

  // Check if the user already exists
  const existingUser = await User.findOne({ email: req.body.email });
  if (existingUser) {
    res.status(400).json({ message: "User already exists" });
    return;
  }

  // Create a new user
  const user = await User.create({ name, email, password });

  // Send a response with the new user's details
  res.status(201).json({ message: "User created successfully", user });
});

// Define a function to login an existing user
const loginUser = asyncHandler(async (req, res) => {
  // Get the user's email and password from the request body
  const { email, password } = req.body;

  // Find the user by email
  const user = await User.findOne({ email });
  if (!user) {
    res.status(401).json({ message: "Invalid email or password" });
    return;
  }

  // Check if the password is correct
  const isPasswordCorrect = await user.isPasswordCorrect(password);
  if (!isPasswordCorrect) {
    res.status(401).json({ message: "Invalid email or password" });
    return;
  }

  // Send a response with the user's details and a token
  res.status(200).json({ message: "User logged in successfully", user, token: user.generateAccessToken() });
});

// Define a function to get the current user's details
const getCurrentUser = asyncHandler(async (req, res) => {
  // Send a response with the current user's details
  res.status(200).json({ message: "User details retrieved successfully", user: req.user });
});

// Export the functions
export { registerUser, loginUser, getCurrentUser };
