// Design a Node.js server using the HTTP and FS modules to efficiently read the contents of a file ('example.txt') and stream it to
//  another file('example2.txt') when a client accesses the server's root URL('/')?
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     const readStream = fs.createReadStream('example.txt');
//     const writeStream = fs.createWriteStream('example2.txt');

//     readStream.on('data', (chunk) => {
//       writeStream.write(chunk);
//     });

//     readStream.on('end', () => {
//       writeStream.end();
//       res.end('File streaming completed!');
//     });

//     readStream.on('error', (err) => {
//       console.error(err);
//       res.statusCode = 500;
//       res.end('Internal Server Error');
//     });
//   } else {
//     res.statusCode = 404;
//     res.end('Page not found');
//   }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(Server running at http://localhost:${PORT});
// });

const fs = require("fs");

const readableStream = fs.createReadStream("example.txt", "utf-8");
const writeableStream = fs.createWriteStream("destination.txt");
readableStream.pipe(writeableStream);
writeableStream.on("finish", () => {
  console.log("Data piped successfully from source to destination");
});

readableStream.on("error", (err) => {
  console.error("Error reading data:", err);
});
writeableStream.on("error", (err) => {
  console.error("Error reading data:", err);
});
