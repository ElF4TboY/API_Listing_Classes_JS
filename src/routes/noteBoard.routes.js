import express from "express";

import noteBoardService from "../services/noteBoard.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newNoteBoard = await noteBoardService.createOneNoteBoard(req.body);

    res.status(200).json(newNoteBoard);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const allNoteBoard = await noteBoardService.getAllNoteBoard();

    res.status(200).json(allNoteBoard);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const noteBoard = await noteBoardService.getOneNoteBoard(req.params.id);

    res.status(200).json(noteBoard);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    await noteBoardService.updateOneNoteBoard(req.params.id, req.body);

    res.status(200).send({ message: `${req.params.id} was updated` });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await noteBoardService.deleteOneNoteBoard(req.params.id);

    res.status(200).send({ message: `${req.params.id} was deleted` });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

export default router;
