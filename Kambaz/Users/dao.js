import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import userSchema from "./schema.js";
import UserModel from "./model.js";

export const createUser = async (user) => {
  const newUser = { ...user, _id: uuidv4() };
  const created = await UserModel.create(newUser);
  return created;
};

export const findAll = async () => {
  return await UserModel.find();
};

export const findUserById = async (userId) => {
  return await UserModel.findById(userId);
};

export const findUserByUsername = async (username) => {
  return await UserModel.findOne({ username });
};

export const findUserByCredentials = async (username, password) => {
  return await UserModel.findOne({ username, password });
};

export const updateUser = async (userId, user) => {
  return await UserModel.updateOne({ _id: userId }, { $set: user });
};

export const deleteUser = async (userId) => {
  return await UserModel.deleteOne({ _id: userId });
};
