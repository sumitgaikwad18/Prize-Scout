// server.js (Backend)

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// User Model
const User = mongoose.model("User", new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}));

// Signup Route
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  // Check if the email already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ success: false, message: "Email already in use and Exit" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  const newUser = new User({ email, password: hashedPassword });
  
  try {
    await newUser.save();
    res.status(201).json({ success: true, message: "Account created successfully!" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error creating account" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ success: false, message: "First Create a Account" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ success: false, message: "Invalid email or password" });
  }

  
  const token = jwt.sign({ userId: user._id }, "secretkey", { expiresIn: "1h" });
  res.status(200).json({ success: true, message: "Login successful", token });
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
