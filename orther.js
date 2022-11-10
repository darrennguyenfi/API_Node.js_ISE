const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("");
});

app.get("/", (req, res) => {
  res.send("HELLO");
});

const Port = process.env.Port || 3000;
app.listen(Port, () => console.log("Server running on port ${Port}"));
