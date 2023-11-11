import express from "express";

import studentService from "../services/students.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newStudent = await studentService.createOneStudent(req.body);

    res.status(200).json(newStudent);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const allStudents = await studentService.getAllStudent();

    res.status(200).json(allStudents);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const student = await studentService.getOneStudent(req.params.id);

    res.status(200).json(student);
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    await studentService.updateOneStudent(req.params.id, req.body);

    res.status(200).send({ message: `${req.params.id} was updated` });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await studentService.deleteOneStudent(req.params.id);

    res.status(200).send({ message: `${req.params.id} was deleted` });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

export default router;
