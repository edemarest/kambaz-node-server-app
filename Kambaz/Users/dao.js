import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export const createUser = (user) => {
  const newUser = { ...user, _id: uuidv4() };
  return model.create(newUser);
}

export const findAll = () => model.find();

export const findUserById = (userId) => {
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    throw new Error("Invalid ObjectId format");
  }
  return model.findById(userId).then((result) => {
    return result;
  }).catch((error) => {
    throw error;
  });
};

export const findUserByUsername = (username) =>
  model.findOne({ username: username });

export const findUserByCredentials = (username, password) =>
  model.findOne({ username, password });

export const updateUser = (userId, user) => model.updateOne({ _id: userId }, { $set: user });

export const findUsersByRole = (role) => model.find({ role: role }); 

export const deleteUser = (userId) => {
  return model.deleteOne({ _id: userId })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      throw error;
    });
};

export const findUsersByPartialName = (partialName) => {
  const regex = new RegExp(partialName, "i");
  return model.find({
    $or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }],
  });
};

