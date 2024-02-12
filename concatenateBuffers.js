const buffer1 = Buffer.from("Hello", "utf-8");
const buffer2 = Buffer.from(" World", "utf-8");

const concatenatedBuffer = Buffer.concat([buffer1, buffer2]);
console.log(concatenatedBuffer.toString("utf-8"));
