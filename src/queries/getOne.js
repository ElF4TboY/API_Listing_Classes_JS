export const getOne = (Collection, id) => {
  return Collection.findById(id).exec();
};
