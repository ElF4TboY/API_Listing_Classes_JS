import { Student } from "../database/models/student.js";

const errorMessage = "Aucun élève n'a été trouvé.";

class studentService {
  static createOneStudent = async (student) => {
    try {
      const newStudent = await new Student(student).save();

      return newStudent;
    } catch (e) {
      res.status(500).send(e.message);
    }
  };

  static getAllStudent = async () => {
    try {
      const allStudents = await Student.find({}).exec();

      return allStudents;
    } catch (e) {
      res.status(500).send(e.message);
    }
  };

  static getOneStudent = async (studentId) => {
    try {
      const student = await Student.findById(studentId).exec();

      return student;
    } catch (e) {
      res.status(404).send(e.message);
    }
  };

  static updateOneStudent = async (studentId, body) => {
    try {
      const student = await Student.findByIdAndUpdate(studentId, body, {
        new: true,
        runValidators: true,
      }).exec();

      await student;
    } catch (e) {
      res.status(500).send(e.message);
    }
  };

  static deleteOneStudent = async (studentId) => {
    try {
      const student = await Student.findByIdAndDelete(studentId).exec();

      await student;
    } catch (e) {
      res.status(500).send(e.message);
    }
  };
}

export default studentService;
