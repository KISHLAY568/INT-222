const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.urlencoded({ extended: true }));
const users = [
  { username: "kishlay", password: "password1" },
  { username: "user2", password: "password2" },
];
app.use("/profile", (req, res, next) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    req.user = user;
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to the public route");
});

app.get("/login", (req, res) => {
  fs.readFile("EXPRESS/login.html", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      res.send("Error Displaying Form");
    } else {
      res.send(data);
    }
  });
});

app.post("/profile", (req, res) => {
  res.send(`Welcome ${req.user.username}!`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
