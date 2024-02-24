const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
app.get("/readfile", (req, res) => {
  const filePath = "example.txt";
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
        console.log(err);
      return res.status(500).send("Error reading the file");
    }

    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

