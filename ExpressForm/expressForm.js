const express = require("express");
const fs = require("fs");
const app = express();
app.get("/form", (req, res) => {
  fs.readFile("form.html", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error reading the file");
    }
    res.send(data);
  });
});

app.get("/submit", (req, res) => {
  const name = req.query.name;
  const email = req.query.email;
  fs.writeFile("data.txt", `Name: ${name}, Email: ${email}\n`, (err) => {
    if (err) {
      console.error("Error saving data to file:", err);
      return res.status(500).send("Error saving data");
    }
    res.send("Data saved successfully");
  });
});

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
