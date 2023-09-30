import { Student } from "../models/student.js";

export const queryCreateStudent = (student) => {
  const newStudent = new Student(student);
  return newStudent.save();
};

export const queryAllStudents = () => {
  return Student.find({}).exec();
};

export const queryOneStudent = (studentId) => {
  return Student.findById(studentId).exec();
};

export const queryUpdateOneStudent = (studentId, reqBody) => {
  return Student.findByIdAndUpdate(studentId, reqBody, {
    new: true,
    runValidators: true,
  }).exec();
};

export const queryDeleteOneStudent = (studentId) => {
  return Student.findByIdAndDelete(studentId).exec();
};
