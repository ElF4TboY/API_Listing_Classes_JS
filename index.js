import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";

import { connectDB } from "./src/services/mongoose.js";

import classrooms from "./src/routes/classrooms.routes.js";
import noteBoard from "./src/routes/noteBoard.routes.js";
import students from "./src/routes/students.routes.js";

const app = express();
const port = 3000;

connectDB().catch((err) => console.log(err));
app.use(express.json());

// Views engine
const dirName = dirname(fileURLToPath(import.meta.url));
console.log(dirName);
app.set("views", join(dirName, "/src/views")); // set path to folder views
app.set("view engine", "pug"); // set the view engine extension

// return HTML
app.get("/", (req, res) => {
  res.render("index");
});

// Routes of API
app.use("/classrooms", classrooms);
app.use("/noteBoard", noteBoard);
app.use("/students", students);

app.listen(port, () => {
  console.log(`Server running on : http://localhost:${port}`);
});
