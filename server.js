// Import required packages
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; // Import the cors package
import User from './model/User.js';
import bcrypt from 'bcryptjs';

// Create an instance of Express
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS
app.use(cors()); // Use CORS middleware

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/eventRegistration')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define a basic route
app.get('/', (req, res) => {
    console.log('Route accessed: /'); // Log to console when the route is accessed
    res.send('Welcome to the Event Registration API!');
});

app.post('/signup', async (req, res) => {
    const { firstName, lastName, email, phoneNumber, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists with this email.' });
        }

        // Create a new user
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ firstName, lastName, email, phoneNumber, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully!' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Error creating user', error });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare the password with the hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Successful login
        res.status(200).json({ message: 'Login successful', user: { email: user.email, firstName: user.firstName } });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Error during login', error });
    }
});




// Set the server to listen on a specific port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});