import { Schema, model } from "mongoose";
import { ClassroomsApi } from "../interface";

const classroomsSchema = new Schema<ClassroomsApi>({
  classId: { type: String, required: true },
  name: { type: String, required: true },
});

export const Classroom = model<ClassroomsApi>("Classroom", classroomsSchema);
