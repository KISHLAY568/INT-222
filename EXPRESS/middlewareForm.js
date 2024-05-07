const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const readStream = fs.createReadStream("EXPRESS/form.html");
  readStream.pipe(res);
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.end("Done");
});

app.listen(4000, () => {
  console.log("server is running on port 4000");
});

