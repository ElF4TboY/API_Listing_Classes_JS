export const getAll = (Collection) => {
  return Collection.find({}).exec();
};
