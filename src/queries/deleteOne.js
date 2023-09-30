export const deleteOne = (Collection, id) => {
  return Collection.findByIdAndDelete(id).exec();
};
