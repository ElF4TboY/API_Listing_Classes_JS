import { Schema, model } from "mongoose";

const noteBoardSchema = new Schema(
  {
    studentId: { type: String, required: true },
    frenchMarks: [Number],
    mathMarks: [Number],
    scienceMarks: [Number],
  },
  { timestamps: true }
);

export const NoteBoard = model("NoteBoard", noteBoardSchema);
