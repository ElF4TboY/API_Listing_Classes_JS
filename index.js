import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";

import { connectDB } from "./src/services/mongoose.js";

import classrooms from "./src/routes/classrooms.routes.js";
import noteBoard from "./src/routes/noteBoard.routes.js";
import students from "./src/routes/students.routes.js";
import home from "./src/routes/home.routes.js";

const app = express();
const port = 3000;

connectDB().catch((err) => console.log(err));
app.use(express.json());

// Views engine
const dirName = dirname(fileURLToPath(import.meta.url));

app.set("view engine", "ejs"); // set the view engine extension
app.set("views", join(dirName, "/src/views")); // set path to folder views
app.set("/public", join(dirName, "/src/public"));

// Routes
// API
app.use("/classrooms", classrooms);
app.use("/noteBoard", noteBoard);
app.use("/students", students);
// render HTML
app.use(home);

app.listen(port, () => {
  console.log(`Server running on : http://localhost:${port}`);
});
