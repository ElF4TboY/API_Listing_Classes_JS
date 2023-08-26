import { Schema, model } from "mongoose";

const studentSchema = new Schema({
  classId: { type: String, required: true },
  studentId: { type: String, required: true },
  firstname: { type: String, required: true },
  surname: { type: String, required: true },
});

export const Student = model("Student", studentSchema);
