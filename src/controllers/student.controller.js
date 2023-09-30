import {
  queryAllStudents,
  queryCreateStudent,
  queryDeleteOneStudent,
  queryOneStudent,
  queryUpdateOneStudent,
} from "../queries/student.queries.js";

export const createStudent = async (req, res) => {
  try {
    const newStudent = await queryCreateStudent(req.body);
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
    const allStudents = await queryAllStudents();
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
    const student = await queryOneStudent(studentId);
    if (!student) return res.status(404).send("Aucun élève n'a été trouvé.");
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
    const student = await queryUpdateOneStudent(studentId, req.body);

    if (!student) return res.status(404).send("Aucun élève n'a été trouvé.");
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
    const student = await queryDeleteOneStudent(studentId);

    if (!student) return res.status(404).send("Aucun élève n'a été trouvé.");
    res.status(200).send({
      message: `L'élève ${student.firstname} ${student.surname} a bien été supprimé`,
      student,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
