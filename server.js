import express from "express";

import { connectDB } from "./src/database/mongoose.js";

import routing from "./src/routes/index.routes.js";

const app = express();
const port = 3000;

connectDB().catch((err) => console.log(err));

app.use(express.json());

app.use(routing);

app.listen(port, () => {
  console.log(`Server running on : http://localhost:${port}`);
});
