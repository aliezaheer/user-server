const express = require("express");
const dotenv = require("dotenv");

const dbConnection = require("./database/db");

const app = express();

dotenv.config();

const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

dbConnection(username, password);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
