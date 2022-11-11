const express = require("express");
const app = express();

const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "GOLang" },
  { id: 3, name: "ReactJS" },
];

app.get("/", (req, res) => {
  res.send("HELLO");
});

app.get("/api/course", (req, res) => {
  res.send(courses);
});

// app.get("/api/course/:id", (req, res) => {
//   const course = courses.find(
//     (courses) => courses.id === parseInt(req.params.id)
//   );
// });

const Port = process.env.Port || 3000;
app.listen(Port, () => console.log("Server running on port ${Port}"));
