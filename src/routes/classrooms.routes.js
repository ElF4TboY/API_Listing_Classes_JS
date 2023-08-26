import express from "express";
import { Classroom } from "../models/classroom.js";

const router = express.Router();

router.post("/", async (req, res) => {
  if (req) {
    const newClassroom = new Classroom(req.body);
    try {
      const saveClassroom = await newClassroom.save();
      res.status(201).send({
        message: `La ${newClassroom.name} a bien été supprimé.`,
        saveClassroom,
      });
    } catch (err) {
      res.status(500).send(err);
    }
  }
});

router.get("/", async (req, res, next) => {
  try {
    const allClassrooms = await Classroom.find({});
    res
      .status(200)
      .send({ message: "Voici la liste de toutes les classes", allClassrooms });
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  const classroomId = req.params.id;

  try {
    const classroom = await Classroom.findByIdAndDelete(classroomId);
    if (!classroom)
      return res.status(404).send("Aucune classe n'a été trouvé.");
    res.status(200).send({
      message: `La ${classroom.name} a bien été supprimé.`,
      classroom,
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
