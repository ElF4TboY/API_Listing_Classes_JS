import express from "express";

import classrooms from "./classrooms.routes.js";
import noteBoard from "./noteBoard.routes.js";
import students from "./students.routes.js";

const router = express.Router();

router.use("/classrooms", classrooms);
router.use("/noteBoard", noteBoard);
router.use("/students", students);

export default router;
