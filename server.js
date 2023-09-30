import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";

import { connectDB } from "./src/services/mongoose.js";

import routing from "./src/routes/index.routes.js";

const app = express();
const port = 3000;

connectDB().catch((err) => console.log(err));

app.use(routing);

app.listen(port, () => {
  console.log(`Server running on : http://localhost:${port}`);
});
