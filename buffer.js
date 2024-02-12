const buffer = Buffer.alloc(4);
console.log(buffer);
buffer.write("Hello", "utf-8");
const data = buffer.toString("utf-8");
console.log(data);
