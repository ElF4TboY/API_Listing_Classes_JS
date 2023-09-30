import { Classroom } from "../models/classroom.js";

export const queryCreateClassroom = (classroom) => {
  const newClassroom = new Classroom(classroom);
  return newClassroom.save();
};

export const queryReadAllClassrooms = () => {
  return Classroom.find({}).exec();
};

export const queryDeleteOneClassroom = (classroomId) => {
  return Classroom.findOneAndDelete({ _id: classroomId }).exec();
};
