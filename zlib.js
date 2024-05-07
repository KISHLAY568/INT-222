
const zlib = require("zlib");
const input = "Hello, world!";

zlib.gzip(input, (err, compressedData) => {
  if (err) {
    console.error("Error compressing data:", err);
    return;
  }
  zlib.gunzip(compressedData, (err, decompressdData) => {
    if (err) {
      console.error("Error decompressing data: ", err);
      return;
    }
    console.log("Decompressed data:", decompressdData.toString());
  });
});

