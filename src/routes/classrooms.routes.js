import express from "express";

import classroomService from "../services/classrooms.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newClassroom = await classroomService.createOneClassroom(req.body);

    res.status(200).json(newClassroom);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const allClassrooms = await classroomService.getAllClassroom();

    res.status(200).json(allClassrooms);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await classroomService.deletedClassroom(req.params.id);

    res.status(200).send({ message: `${req.params.id} was deleted` });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

export default router;
