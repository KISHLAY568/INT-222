const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("todos", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
