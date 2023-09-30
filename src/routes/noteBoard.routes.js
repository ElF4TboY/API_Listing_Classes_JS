import express from "express";

import {
  createNoteBoard,
  deleteOneNoteBoard,
  readAllNoteBoard,
  readOneNoteBoard,
  updateOneNoteBoard,
} from "../controllers/noteBoard.controller.js";

const router = express.Router();

router.post("/", createNoteBoard);

router.get("/", readAllNoteBoard);

router.get("/:id", readOneNoteBoard);

router.patch("/:id", updateOneNoteBoard);

router.delete("/:id", deleteOneNoteBoard);

export default router;
