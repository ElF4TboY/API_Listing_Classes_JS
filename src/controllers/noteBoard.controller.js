import {
  queryCreateNoteBoard,
  queryDeleteOneNoteBoard,
  queryReadAllNoteBoard,
  queryReadOneNoteBoard,
  queryUpdateOneNoteBoard,
} from "../queries/noteBoard.queries.js";

export const createNoteBoard = async (req, res) => {
  try {
    const newNoteBoard = await queryCreateNoteBoard(req.body);
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
    const allNoteBoard = await queryReadAllNoteBoard();

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
    const noteBoard = await queryReadOneNoteBoard(noteBoardId);

    if (!noteBoard)
      return res.status(404).send("Le tableau de notes n'a pas été trouvé.");
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
    const noteBoard = await queryUpdateOneNoteBoard(noteBoardId, req.body);

    if (!noteBoard)
      return res.status(404).send("Le tableau de notes n'a pas été trouvé.");
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
    const noteBoard = await queryDeleteOneNoteBoard(noteBoardId);

    if (!noteBoard)
      return res.status(404).send("aucun tableau de n'a été trouvé");
    res
      .status(200)
      .send({ message: "Le tableau de note à bien été supprimé", noteBoard });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
