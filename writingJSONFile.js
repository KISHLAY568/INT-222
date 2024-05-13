const http = require("http");
const fs = require("fs");
const path = require("path");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    // Serve HTML form
    // const formPath = path.join(__dirname, "public", "form.html");
    fs.readFile("JSONform.html", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else if (req.method === "POST" && req.url === "/save-json") {
    // Handle POST request to save JSON data
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const jsonData = querystring.parse(body).jsonData;
      // Convert JSON data to a string
      const jsonString = JSON.stringify(JSON.parse(jsonData));

      // Write JSON data to a file
      fs.writeFile("output.json", jsonString, "utf8", (err) => {
        if (err) {
          console.error(err);
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal Server Error");
          return;
        }

        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("JSON data successfully saved to output.json");
      });
    });
  } else {
    // Handle other routes (if an res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end("Not Found");
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
