const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express(); // Serve HTML form
app.get("/form", (req, res) => {
  // Read the HTML form file asynchronously
  fs.readFile("form.html", "utf8", (err, data) => {
    if (err) {
      console.log(err); // If there's an error reading the file, send an error response
      return res.status(500).send("Error reading the file");
    } // If successful, send the HTML form content as the response
    res.send(data);
  });
});
// Handle form submission
app.get("/submit", (req, res) => {
  // Access data sent through query parameters
  const filePath = path.join(__dirname, "data.txt");
  const name = req.query.name;
  const email = req.query.email; // Do something with the data (e.g., save it to a file)
  fs.writeFile(filePath, `Name: ${name}, Email: ${email}\n`, (err) => {
    if (err) {
      console.error("Error saving data to file:", err);
      return res.status(500).send("Error saving data");
    } // Respond with a success message
    res.send("Data saved successfully");
  });
}); // Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
