const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const mogoURL = process.env.MONGO_URL;

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

mongoose
  .connect("mongodb://127.0.0.1:27017/user_management_db")
  .then(() => console.log("connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

app.get("/users", (req, res) => {
  User.find({})
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json({ message: err.message }));
});

app.post("/users", (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  user
    .save()
    .then((newUser) => res.status(201).json(newUser))
    .catch((err) => res.status(400).json({ message: err.message }));
});

app.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  const updateData = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  User.findByIdAndUpdate(userId, updateData, { new: true })
    .then((updatedUser) => {
      if (!updatedUser) {
        return res.status(404).json({ message: "user not found" });
      }
      res.json(updatedUser);
    })
    .catch((err) => res.status(400).json({ message: err.message }));
});

app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  User.findByIdAndDelete(userId)
    .then((deletedUser) => {
      if (!deletedUser) {
        return res.status(404).json({ message: "user not found" });
      }
      res.json({ message: "user deleted successfully" });
    })
    .catch((err) => res.status(400).json({ message: err.message }));
});

app.listen(port, () => {
  console.log("server is live on port 3000");
});
