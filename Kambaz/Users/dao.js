import usersData from "../Database/users.js";
import { v4 as uuidv4 } from "uuid";

let users = [...usersData];

export const createUser = (user) => {
  const newUser = { ...user, _id: uuidv4() };
  users = [...users, newUser];
  return newUser;
};

export const findAllUsers = () => users;

export const findUserById = (userId) =>
  users.find((user) => user._id === userId);

export const findUserByUsername = (username) =>
  users.find((user) => user.username === username);

export const findUserByCredentials = (username, password) =>
  users.find(
    (user) => user.username === username && user.password === password,
  );

export const updateUser = (userId, updates) => {
  users = users.map((u) => (u._id === userId ? { ...u, ...updates } : u));
  return findUserById(userId);
};

export const deleteUser = (userId) => {
  users = users.filter((u) => u._id !== userId);
};
