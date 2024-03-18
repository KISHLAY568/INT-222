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

  socket.on("join", (username) => {
    socket.username = username;
    io.emit("chat message", {
      type: "notification",
      message: `${username} has joined the chat`,
    });
  });

  socket.on("chat message", (msg) => {
    io.emit("chat message", {
      type: "message",
      username: socket.username,
      message: msg,
    });
  });
  socket.on("disconnect", () => {
    console.log("A user disconnected");
    if (socket.username) {
      io.emit("chat message", {
        type: "notification",
        message: `${socket.username} has left the chat`,
      });
    }
  });
});
