import { Schema, model } from "mongoose";
import { StudentsApi } from "../interface";

const studentSchema = new Schema<StudentsApi>({
  classId: { type: String, required: true },
  studentId: { type: String, required: true },
  firstname: { type: String, required: true },
  surname: { type: String, required: true },
});

export const Student = model<StudentsApi>("Student", studentSchema);
