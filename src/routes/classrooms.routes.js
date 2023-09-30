import express from "express";
import {
  createClassroom,
  deleteOneClassroom,
  readAllClassrooms,
} from "../controllers/classroom.controller.js";

const router = express.Router();

router.post("/", createClassroom);

router.get("/", readAllClassrooms);

router.delete("/:id", deleteOneClassroom);

export default router;
