import express from "express";
import {
  createStudent,
  deleteOneStudent,
  readAllStudents,
  readOneStudent,
  updateOneStudent,
} from "../controllers/student.controller.js";

const router = express.Router();

router.post("/", createStudent);

router.get("/", readAllStudents);

router.get("/:id", readOneStudent);

router.patch("/:id", updateOneStudent);

router.delete("/:id", deleteOneStudent);

export default router;
