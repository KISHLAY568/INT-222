const express = require("express");
const { Pool } = require("pg"); //object dextructuring
const app = express();
const port = 3000;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "todos",
  password: "root",
  port: 5432,
});

app.use(express.json());

app.get("/todos", (req, res) => {
  pool.query("SELECT * FROM todos", (err, result) => {
    if (err) {
      console.error("Error fetching todos", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(result.rows);
    }
  });
});

app.listen(port, () => {
  console.log("server is running on port 3000");
});
