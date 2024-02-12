const fs = require("fs");
const readableStream = fs.createReadStream("example.txt", {
  encoding: "utf-8",
  highWaterMark: 50,
});
readableStream.on("data", (chunk) => {
  console.log("Received chunk of data: ");
  console.log(chunk);
});

readableStream.on("end", () => {
  console.log("Finished reading data from the file.");
});

readableStream.on("error", (err) => {
  console.error("Error reading data:", err);
});
