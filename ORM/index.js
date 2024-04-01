const express = require("express");
const sequelize = require("./sequelize");
const Todo = require("./models/Todo");

const app = express();
const port = 3000;

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully");
    return sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log("All models were synchronized successfully.");
  })
  .catch((error) => {
    console.error("unable to connect to the database:", error);
  });

app.use(express.json());

app.post("/todos", (req, res) => {
  const { title, completed } = req.body;
  Todo.create({ title, completed })
    .then((todo) => {
      res.status(201).json(todo);
    })
    .catch((error) => {
      res.status(400).json({ error: "Bad request" });
    });
});

app.put("/todos/:id", (req, res) => {
  const todoId = req.params.id;
  const { title, completed } = req.body;
  Todo.findByPk(todoId)
    .then((todo) => {
      if (!todo) {
        return res.status(404).json({ error: "Todo not found" });
      }
      todo.title = title;
      todo.completed = completed;
      return todo.save();
    })
    .then((updatedTodo) => {
      res.json(500).json({ error: "Internal server error" });
    });
});

app.get("/todos", (req, res) => {
  Todo.findAll()
    .then((todos) => {
      res.json(todos);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal server error" });
    });
});

app.listen(port, () => {
  console.log("server is live on port 3000");
});
