export const updateOne = (Collection, id, reqBody) => {
  return Collection.findByIdAndUpdate(id, reqBody, {
    new: true,
    runValidators: true,
  }).exec();
};
