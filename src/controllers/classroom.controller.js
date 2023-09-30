import {
  queryCreateClassroom,
  queryReadAllClassrooms,
  queryDeleteOneClassroom,
} from "../queries/classroom.queries.js";

export const createClassroom = async (req, res) => {
  try {
    const newClassroom = await queryCreateClassroom(req.body);
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
    const allClassrooms = await queryReadAllClassrooms();
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
    const classroom = await queryDeleteOneClassroom(classroomId);

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
