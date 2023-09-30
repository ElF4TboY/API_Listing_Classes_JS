export const createOne = (Collection, reqBody) => {
  const newClassroom = new Collection(reqBody);
  return newClassroom.save();
};
