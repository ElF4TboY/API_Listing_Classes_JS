import { Classroom } from "../database/models/classroom.js";

class classroomService {
  static createOneClassroom = async (userRequest) => {
    try {
      const newClassroom = await new Classroom(userRequest).save();

      return newClassroom;
    } catch (e) {
      res.status(500).send(e.message);
    }
  };

  static getAllClassroom = async () => {
    try {
      const allClassroom = await Classroom.find({}).exec();

      return allClassroom;
    } catch (e) {
      res.status(500).send(e.message);
    }
  };

  static deletedClassroom = async (classroomId) => {
    try {
      const deletedClassroom = Classroom.findByIdAndDelete(classroomId).exec();

      if (!deletedClassroom) return res.status(404).send("Not found");

      await deletedClassroom;
    } catch (e) {
      res.status(500).send(e.message);
    }
  };
}

export default classroomService;
