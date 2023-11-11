import { Schema, model } from "mongoose";

const classroomsSchema = new Schema({
  classId: { type: String, required: true },
  name: { type: String, required: true },
});

export const Classroom = model("Classroom", classroomsSchema);
