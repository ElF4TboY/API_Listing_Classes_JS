import { Classroom } from "../models/classroom.js";
import { createOne } from "../queries/createOne.js";
import { getAll } from "../queries/getAll.js";
import { deleteOne } from "../queries/deleteOne.js";

export const createClassroom = async (req, res) => {
  console.log(req.body);
  try {
    const newClassroom = await createOne(Classroom, req.body);
    res.status(201).send({
      message: `La ${newClassroom.name} a bien été créé.`,
      newClassroom,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const readAllClassrooms = async (req, res) => {
  try {
    const allClassrooms = await getAll(Classroom);
    res
      .status(200)
      .send({ message: "Voici la liste de toutes les classes", allClassrooms });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const deleteOneClassroom = async (req, res) => {
  try {
    const classroomId = req.params.id;
    const classroom = await deleteOne(Classroom, classroomId);

    if (!classroom)
      return res.status(404).send("Aucune classe n'a été trouvé.");

    res.status(200).send({
      message: `La ${classroom.name} a bien été supprimé.`,
      classroom,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
