import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import express from "express";

import { connectDB } from "./src/services/mongoose.js";

import classrooms from "./src/routes/classrooms.routes.js";
import noteBoard from "./src/routes/noteBoard.routes.js";
import students from "./src/routes/students.routes.js";

const app = express();
const port = 3000;
const dir = dirname(fileURLToPath(import.meta.url));
const file = join(dir, "./src/view/index.html");

connectDB().catch((err) => console.log(err));
app.use(express.json());

app.get("/", async (req, res) => {
  await res.sendFile(file);
});

app.use("/classrooms", classrooms);
app.use("/noteBoard", noteBoard);
app.use("/students", students);

app.listen(port, () => {
  console.log(`Server running on : http://localhost:${port}`);
});
