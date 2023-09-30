import { Student } from "../models/student.js";
import { createOne } from "../queries/createOne.js";
import { getAll } from "../queries/getAll.js";
import { getOne } from "../queries/getOne.js";
import { updateOne } from "../queries/updateOne.js";
import { deleteOne } from "../queries/deleteOne.js";

const errorMessage = "Aucun élève n'a été trouvé.";

export const createStudent = async (req, res) => {
  try {
    const newStudent = await createOne(Student, req.body);
    res.status(201).send({
      message: `L'élève ${newStudent.firstname} ${newStudent.surname} a bien été créé`,
      newStudent,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const readAllStudents = async (req, res) => {
  try {
    const allStudents = await getAll(Student);
    res
      .status(200)
      .send({ message: "Voici la liste de tous les étudiants", allStudents });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const readOneStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    const student = await getOne(Student, studentId);

    if (!student) return res.status(404).send(errorMessage);
    res.status(200).send({
      message: `L'élève ${student.firstname} ${student.surname} a bien été trouvé`,
      student,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const updateOneStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    const student = await updateOne(Student, studentId, req.body);

    if (!student) return res.status(404).send(errorMessage);
    res.status(200).send({
      message: `L'élève ${student.firstname} ${student.surname} a bien été modifié`,
      student,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const deleteOneStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    const student = await deleteOne(Student, studentId);

    if (!student) return res.status(404).send(errorMessage);
    res.status(200).send({
      message: `L'élève ${student.firstname} ${student.surname} a bien été supprimé`,
      student,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
