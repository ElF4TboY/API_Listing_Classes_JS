import { Schema, model } from "mongoose";

const classroomsSchema = new Schema(
  {
    classId: { type: String, required: true },
    name: {
      type: String,
      required: [true, "Un nom de classe est obligatoire"],
    },
  },
  { timestamps: true }
);

export const Classroom = model("Classroom", classroomsSchema);
