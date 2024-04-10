const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.post('/', async (req, res) => {
  const { firstName, lastName, username, password } = req.body;

  // Check if any field is empty
  if (!firstName || !lastName || !username || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Create a new user
  const newUser = new User({ firstName, lastName, username, password });

  // Save the user to the database
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error saving user to database' });
  }
});

module.exports = router;