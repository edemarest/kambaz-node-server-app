import modulesData from "../Database/modules.js";
import { v4 as uuidv4 } from "uuid";

let modules = [...modulesData.modules];

export const findModulesForCourse = (courseId) => {
  return modules.filter((m) => m.course === courseId);
};

export const createModule = (courseId, module) => {
  const newModule = {
    ...module,
    _id: uuidv4(),
    course: courseId,
    lessons: [],
  };
  modules = [newModule, ...modules];
  return newModule;
};

export const deleteModule = (moduleId) => {
  modules = modules.filter((m) => m._id !== moduleId);
};

export const updateModule = (moduleId, updates) => {
  modules = modules.map((m) => (m._id === moduleId ? { ...m, ...updates } : m));
  return modules.find((m) => m._id === moduleId);
};
