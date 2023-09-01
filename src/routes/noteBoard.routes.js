import express from "express";

import { NoteBoard } from "../models/noteBoard.js";

const router = express.Router();

router.post("/", async (req, res) => {
  if (req.body) {
    const newNoteBoard = new NoteBoard(req.body);
    try {
      const saveNewNoteBoard = await newNoteBoard.save();
      res.status(201).send({
        message: "La liste de notes à bien été ajouté",
        saveNewNoteBoard,
      });
    } catch (err) {
      res.status(500).send(err);
    }
  }
});

router.get("/", async (req, res, next) => {
  try {
    const allNoteBoard = await NoteBoard.find({});
    res.status(200).send({
      message: "Voici la liste de tous les tableuax de notes",
      allNoteBoard,
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/:id", async (req, res, next) => {
  const noteBoardId = req.params.id;
  try {
    const noteBoard = await NoteBoard.findById(noteBoardId);
    if (!noteBoard)
      return res.status(404).send("Le tableau de notes n'a pas été trouvé.");
    res
      .status(200)
      .send({ message: "Le tebleau de notes à bien été trouvé.", noteBoard });
  } catch (err) {
    res.status(500).send(err);
  }
});

router.patch("/:id", async (req, res, next) => {
  const noteBoardId = req.params.id;
  try {
    const noteboard = await NoteBoard.findByIdAndUpdate(noteBoardId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!noteboard)
      return res.status(404).send("aucun tableau de n'a été trouvé");
    res
      .status(200)
      .send({ message: "le tableau de note a bien été modifié", noteboard });
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  const noteBoardId = req.params.id;
  try {
    const noteBoard = await NoteBoard.findByIdAndDelete(noteBoardId);
    if (!noteBoard)
      return res.status(404).send("aucun tableau de n'a été trouvé");
    res
      .status(200)
      .send({ message: "Le tableau de note à bien été supprimé", noteBoard });
  } catch (err) {
    res.status(404).send(err);
  }
});

export default router;
