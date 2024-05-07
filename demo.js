const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();

app.get("/users", (req, res) => {
  res.send(users);
});
app.get("/user", (req, res) => {
  const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html);
});

app.get("/users/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  res.send(user.first_name);
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

//create a nodejs server?
