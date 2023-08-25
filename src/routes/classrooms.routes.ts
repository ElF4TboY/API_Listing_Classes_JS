import express, { NextFunction, Request, Response, Router } from "express";
import { Classroom } from "../models/classroom";
import { ClassroomsApi } from "../interface";

const router: Router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  if (req) {
    const newClassroom = new Classroom<ClassroomsApi>(req.body);
    try {
      const saveClassroom = await newClassroom.save();
      res.status(201).send({
        message: `La ${newClassroom?.name} a bien été supprimé.`,
        saveClassroom,
      });
    } catch (err) {
      res.status(500).send(err);
    }
  }
});

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allClassrooms = await Classroom.find({});
    res
      .status(200)
      .send({ message: "Voici la liste de toutes les classes", allClassrooms });
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const classroomId: string = req.params.id;

    try {
      const classroom = await Classroom.findByIdAndDelete(classroomId);
      if (!classroom)
        return res.status(404).send("Aucune classe n'a été trouvé.");
      res.status(200).send({
        message: `La ${classroom?.name} a bien été supprimé.`,
        classroom,
      });
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

export default router;
