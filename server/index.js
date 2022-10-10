const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "crudgames",  
});

app.get("/", (req, res) => {
  
  
});


app.listen(3001, () => {
  console.log("rodando servidor");
});
