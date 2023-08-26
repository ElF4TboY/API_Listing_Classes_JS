import express from "express";

import { connectDB } from "./src/services/mongoose.js";

import classrooms from "./src/routes/classrooms.routes.js";
import noteBoard from "./src/routes/noteBoard.routes.js";
import students from "./src/routes/students.routes.js";

const app = express();
const port = 3000;

connectDB().catch((err) => console.log(err));
app.use(express.json());

app.use("/classrooms", classrooms);
app.use("/noteBoard", noteBoard);
app.use("/students", students);

app.listen(port, () => {
  console.log(`Server running on : http://localhost:${port}`);
});
