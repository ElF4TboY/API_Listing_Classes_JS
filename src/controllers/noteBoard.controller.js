import { NoteBoard } from "../models/noteBoard.js";
import { createOne } from "../queries/createOne.js";
import { getAll } from "../queries/getAll.js";
import { getOne } from "../queries/getOne.js";
import { updateOne } from "../queries/updateOne.js";
import { deleteOne } from "../queries/deleteOne.js";

const errorMessage = "Aucun élève n'a été trouvé.";

export const createNoteBoard = async (req, res) => {
  try {
    const newNoteBoard = await createOne(NoteBoard, req.body);
    res.status(201).send({
      message: "La liste de notes à bien été ajouté",
      newNoteBoard,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const readAllNoteBoard = async (req, res) => {
  try {
    const allNoteBoard = await getAll(NoteBoard);

    res.status(200).send({
      message: "Voici la liste de tous les tableuax de notes",
      allNoteBoard,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const readOneNoteBoard = async (req, res) => {
  try {
    const noteBoardId = req.params.id;
    const noteBoard = await getOne(NoteBoard, noteBoardId);

    if (!noteBoard) return res.status(404).send(errorMessage);
    res
      .status(200)
      .send({ message: "Le tebleau de notes à bien été trouvé.", noteBoard });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const updateOneNoteBoard = async (req, res) => {
  try {
    const noteBoardId = req.params.id;
    const noteBoard = await updateOne(NoteBoard, noteBoardId, req.body);

    if (!noteBoard) return res.status(404).send(errorMessage);
    res
      .status(200)
      .send({ message: "le tableau de note a bien été modifié", noteBoard });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const deleteOneNoteBoard = async (req, res) => {
  try {
    const noteBoardId = req.params.id;
    const noteBoard = await deleteOne(NoteBoard, noteBoardId);

    if (!noteBoard) return res.status(404).send(errorMessage);
    res
      .status(200)
      .send({ message: "Le tableau de note à bien été supprimé", noteBoard });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
