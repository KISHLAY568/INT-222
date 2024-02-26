//Write a middleware function in express.js that logs the timestamp, HTTP method, and URL of every incoming request to a file named 'request.log'. Ensure that the log file is created if it doesn't exist and that new log entries are appended to it.

const express = require("express");
const fs = require("fs");
const app = express();

app.use((req, res, next) => {
  fs.appendFile(
    "req.log",
    `${new Date().toISOString()} , ${req.method} , ${req.url}\n`,
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );
  next();
});

app.get("/", (req, res) => {
  res.end("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
