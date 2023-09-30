import { NoteBoard } from "../models/noteBoard.js";

export const queryCreateNoteBoard = (noteBoard) => {
  const newNoteBoard = new NoteBoard(noteBoard);
  return newNoteBoard.save();
};

export const queryReadAllNoteBoard = () => {
  return NoteBoard.find({}).exec();
};

export const queryReadOneNoteBoard = (id) => {
  return NoteBoard.findById(id).exec();
};

export const queryUpdateOneNoteBoard = (id, reqBoby) => {
  return NoteBoard.findByIdAndUpdate(id, reqBoby, {
    new: true,
    runValidators: true,
  }).exec();
};

export const queryDeleteOneNoteBoard = (id) => {
  return NoteBoard.findByIdAndDelete(id).exec();
};
