import model from "./model.js";
import { v4 as uuidv4 } from "uuid";
export const findModulesForCourse = async (courseId) => {
  return await model.find({ course: courseId });
};

export const createModule = async (courseId, module) => {
  const newModule = {
    ...module,
    _id: uuidv4(),
    course: courseId,
    lessons: [],
  };
  const createdModule = await model.create(newModule);
  return createdModule;
};

export const deleteModule = async (moduleId) => {
  await model.deleteOne({ _id: moduleId });
};

export const updateModule = async (moduleId, updates) => {
  await model.updateOne({ _id: moduleId }, updates);
  return await model.findById(moduleId);
};

