const fs = require("fs");
const writeableStream = fs.createWriteStream("output.txt");
const data = ["hello, World!\n", "This is a test.\n"];
data.forEach((chunk) => {
  writeableStream.write(chunk);
});
writeableStream.end();

writeableStream.on("finish", () => {
  console.log("Finished writing  data to the file.");
});

writeableStream.on("error", (err) => {
  console.error("Error Writing data:", err);
});
