import { Schema, model } from "mongoose";

const noteBoardSchema = new Schema({
  studentId: { type: String, required: true },
  frenchMarks: [Number],
  mathMarks: [Number],
  scienceMarks: [Number],
});

export const NoteBoard = model("NoteBoard", noteBoardSchema);
