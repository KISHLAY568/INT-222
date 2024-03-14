const express = require("express");
const socketIO = require("socket.io");
const path = require("path");
const app = express();

const server = app.listen(3000, () => {
  console.log("Server started on port 3000");
});

const io = socketIO(server);

app.use(express.static(path.join(__dirname)));

io.on("connection", (socket) => {
  console.log("A user connected to the server");

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});
