import { Schema, model } from "mongoose";
import { NoteBoardApi } from "../interface";

const noteBoardSchema = new Schema<NoteBoardApi>({
  studentId: { type: String, required: true },
  frenchMarks: [Number],
  mathMarks: [Number],
  scienceMarks: [Number],
});

export const NoteBoard = model<NoteBoardApi>("NoteBoard", noteBoardSchema);
