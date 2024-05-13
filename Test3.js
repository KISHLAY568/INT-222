// How can you create a Node.js server that serves a specific text file,compress it with gzip encoding, and dynamically responds to HTTP requests? Provide a detailed code solution.
const http = require("http");
const fs = require("fs");
const zlib = require("zlib");

const server = http.createServer((req, res) => {
  const filePath = "example.txt";
  const readStream = fs.createReadStream(filePath);

  res.writeHead(200, {
    "Content-Type": "text/plain",
    "content-encoding": "gzip", //Setting the content encoding to gzip
  });
  // Compressing the file and piping it to the response stream
  readStream.pipe(zlib.createGzip()).pipe(res);

  readStream.on("error", (err) => {
    console.error("Error reading file:", err);
    res.statusCode = 500;
    res.end("Internal Server Error");
  });
});

server.listen(3000);
