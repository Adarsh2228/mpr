// const express = require("express");
// const mongoose = require("mongoose"); // Import mongoose
// const app = express();
// const cors = require("cors");
// require("dotenv").config();
// const connectDB = require("./config/db");
// const PORT = process.env.PORT || 5000;

// // middlewares
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static("public"));
// app.use('/api/items', require("./routes/items"));
// app.use('/api/payment', cors(), require("./routes/payment"));

<<<<<<< HEAD
// // connect to the mongodb database
// connectDB();
=======
// connect to the mongodb database
connectDB() 
>>>>>>> 72a9267b7a3b1df6d6f359a4523912063f0d70e8

// app.listen(PORT, () => console.log("Server is running on port ", PORT));

<<<<<<< HEAD
// // Assuming your model is defined in a separate file
// const Item = require("./models/itemsModel");

// // Create a new item document
// const newItem = new Item({
//   name: "Sample Item",
//   category: "Sample Category",
//   color: "Sample Color",
//   type: "Sample Type",
//   description: "Sample Description",
//   price: 100,
//   size: ["Small", "Medium", "Large"],
//   highlights: ["Highlight 1", "Highlight 2"],
//   detail: "Sample Detail",
//   image: ["image1.jpg", "image2.jpg"],
// });

// // Save the new item document to MongoDB
// newItem.save()
//   .then((result) => {
//     console.log("Item added successfully:", result);
//     // Disconnect from MongoDB after insertion
//     mongoose.disconnect();
//   })
//   .catch((error) => {
//     console.error("Error adding item:", error);
//     // Disconnect from MongoDB if an error occurs
//     mongoose.disconnect();
//   });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/userModel');
const app = express();

mongoose.connect('mongodb+srv://root:toor@cluster0.uwtbgia.mongodb.net/ecom', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.use(express.json());
app.use(cors());

app.post('/api/register', async (req, res) => {
  const { firstName, lastName, username, password } = req.body;

  if (!firstName || !lastName || !username || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newUser = new UserModel({ firstName, lastName, username, password });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error saving user to database' });
  }
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.findOne({ username }).exec();

    if (user && user.comparePassword(password)) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    console.error('Error logging in:', error.message);
    res.status(500).json({ message: 'Error logging in' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
=======
app.listen(PORT, console.log("Server is running on port ", PORT))
>>>>>>> 72a9267b7a3b1df6d6f359a4523912063f0d70e8
