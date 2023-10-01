import { Schema, model } from "mongoose";

const studentSchema = new Schema(
  {
    classId: { type: String, required: true },
    studentId: { type: String, required: true },
    firstname: {
      type: String,
      required: [true, "L'élève doit avoir un prenom"],
    },
    surname: {
      type: String,
      required: [true, "l'élève doit avoir un nom de famille"],
    },
  },
  { timestamps: true }
);

export const Student = model("Student", studentSchema);
