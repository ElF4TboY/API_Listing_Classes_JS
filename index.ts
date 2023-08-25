import express, { Express } from "express";

import { connectDB } from "./src/services/mongoose";

import classrooms from "./src/routes/classrooms.routes";
import noteBoard from "./src/routes/noteBoard.routes";
import students from "./src/routes/students.routes";

const app: Express = express();
const port: number = 3000;

connectDB().catch((err) => console.log(err));
app.use(express.json());

app.use("/classrooms", classrooms);
app.use("/noteBoard", noteBoard);
app.use("/students", students);

app.listen(port, () => {
  console.log(`Server running on : http://localhost:${port}`);
});
