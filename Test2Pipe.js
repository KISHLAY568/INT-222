// Design a Node.js server using the HTTP and FS modules to efficiently read the contents of a file ('example.txt') and stream it to
//  another file('example2.txt') when a client accesses the server's root URL('/')? using PIPE method
const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    if (req.url == "/") {
      readStream = fs.createReadStream("example.txt", { highWaterMark: 8 });
      writeStream = fs.createWriteStream("destination.txt");
      readStream.pipe(writeStream);
      res.end("Doneeeee");
    }
  })
  .listen(5000);
