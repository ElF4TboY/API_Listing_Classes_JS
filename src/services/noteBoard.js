import { NoteBoard } from "../database/models/noteBoard.js";

const errorMessage = "Aucun tableau de notes n'a été trouvé.";

class noteBoardService {
  static createOneNoteBoard = async (noteBoard) => {
    try {
      const newNoteBoard = await new NoteBoard(noteBoard).save();

      return newNoteBoard;
    } catch (e) {
      res.status(404).send(e.message);
    }
  };

  static getAllNoteBoard = async () => {
    try {
      const allNoteBoard = await NoteBoard.find({}).exec();

      return allNoteBoard;
    } catch (e) {
      res.status(404).send(e.message);
    }
  };

  static getOneNoteBoard = async (noteBoardId) => {
    try {
      const noteBoard = await NoteBoard.findById(noteBoardId).exec();

      return noteBoard;
    } catch (e) {
      res.status(404).send(e.message);
    }
  };

  static updateOneNoteBoard = async (noteBoardId, body) => {
    try {
      const noteBoard = await NoteBoard.findByIdAndUpdate(noteBoardId, body, {
        new: true,
        runValidators: true,
      }).exec();

      await noteBoard;
    } catch (e) {
      res.status(404).send(e.message);
    }
  };

  static deleteOneNoteBoard = async (noteBoardId) => {
    try {
      const noteBoard = await NoteBoard.findByIdAndDelete(noteBoardId).exec();

      await noteBoard;
    } catch (e) {
      res.status(404).send(e.message);
    }
  };
}

export default noteBoardService;
