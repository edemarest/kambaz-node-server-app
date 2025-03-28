import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export const findAssignmentsForCourse = async (courseId) => {
  try {
    const assignments = await model.find({ course: courseId });
    return assignments;
  } catch (error) {
    throw error;
  }
};

export const createAssignment = async (courseId, assignment) => {
  const newAssignment = {
    ...assignment,
    _id: uuidv4(),
    course: courseId,
  };
  try {
    const createdAssignment = await model.create(newAssignment);
    return createdAssignment;
  } catch (error) {
    throw error;
  }
};

export const updateAssignment = async (assignmentId, updates) => {
  try {
    const updatedAssignment = await model.findByIdAndUpdate(
      assignmentId,
      updates,
      { new: true },
    );
    return updatedAssignment;
  } catch (error) {
    throw error;
  }
};

export const deleteAssignment = async (assignmentId) => {
  try {
    const deletedAssignment = await model.findByIdAndDelete(assignmentId);
    return deletedAssignment;
  } catch (error) {
    throw error;
  }
};
