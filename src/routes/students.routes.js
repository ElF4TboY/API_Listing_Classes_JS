import express from "express";
import { Student } from "../models/student.js";

const router = express.Router();

router.post("/", async (req, res) => {
  if (req.body) {
    const newStudent = new Student(req.body);
    try {
      const saveNewStudent = await newStudent.save();
      res.status(201).send({
        message: `L'élève ${newStudent.firstname} ${newStudent?.surname} a bien été créé`,
        saveNewStudent,
      });
    } catch (err) {
      res.status(400).send(err);
    }
  }
});

router.get("/", async (req, res, next) => {
  try {
    const allStudents = await Student.find({});
    res
      .status(200)
      .send({ message: "Voici la liste de tous les étudiants", allStudents });
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/:id", async (req, res, next) => {
  const studentId = req.params.id;
  try {
    const student = await Student.findById(studentId);
    if (!student) return res.status(404).send("Aucun élève n'a été trouvé.");
    res.status(200).send({
      message: `L'élève ${student.firstname} ${student?.surname} a bien été trouvé`,
      student,
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

router.patch("/:id", async (req, res, next) => {
  const stundentId = req.params.id;
  try {
    const student = await Student.findByIdAndUpdate(stundentId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!student) return res.status(404).send("Aucun élève n'a été trouvé.");
    res.send({
      message: `L'élève ${student.firstname} ${student.surname} a bien été modifié`,
      student,
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  const studentId = req.params.id;
  try {
    const student = await Student.findByIdAndDelete(studentId);
    if (!student) return res.status(404).send("Aucun élève n'a été trouvé.");
    res.status(200).send({
      message: `L'élève ${student.firstname} ${student.surname} a bien été supprimé`,
      student,
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
