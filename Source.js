const express = require("express");
const app = express();
app.use(express.json());
/*
API GET
*/
const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "GOLang" },
  { id: 3, name: "ReactJS" },
];
// API GET "HELLO"
app.get("/", (req, res) => {
  res.send("HELLO");
});

// API GET ALL COURSE
app.get("/api/courses", (req, res) => {
  res.send(courses);
});
// API GET INFOR OF EACH COURSE AND CHECK IT
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find(
    (courses) => courses.id === parseInt(req.params.id)
  );
  if (!course) res.status(404).send(" ID DOES NOT EXISTS");
  res.send(course);
});

/*
API POST
*/

// API POST ( ADD NEW COURSE)
app.post("/api/courses/add", (req, res) => {
  const course = {
    id: req.body.id,
    name: req.body.name,
  };
  courses.push(course);
  res.send(
    JSON.stringify({
      success: true,
      notice: " ADD SUCCESSFULLY",
      data: courses,
    })
  );
});

/*
API PUT
*/

// API PuT ( change name by id)
app.put("/api/courses/edit/:id", (req, res) => {
  const course = courses.find(
    (courses) => courses.id === parseInt(req.params.id)
  );
  course.name = req.body.name;
  res.send(
    JSON.stringify({
      success: true,
      notice: "Update SUCCESSFULLY",
      data: courses,
    })
  );
});

/*
API DELETE
*/

// API DELETE ( delete name by id)

app.delete("/api/courses/delete/:id", (req, res) => {
  const course = courses.find(
    (courses) => courses.id === parseInt(req.params.id)
  );
  let index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(
    JSON.stringify({
      success: true,
      notice: "DELETE SUCCESSFULLY",
      data: courses,
    })
  );
});

const Port = process.env.Port || 3000;
app.listen(Port, () => console.log("Server running on port ${Port}"));
