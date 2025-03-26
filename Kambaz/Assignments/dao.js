import assignmentsData from "../Database/assignments.js";
import { v4 as uuidv4 } from "uuid";

let assignments = [...assignmentsData];

export const findAssignmentsForCourse = (courseId) => {
  return assignments.filter((a) => a.course === courseId);
};

export const createAssignment = (courseId, assignment) => {
  const newAssignment = {
    _id: uuidv4(),
    title: assignment.title || "Untitled",
    description: assignment.description || "",
    points: assignment.points || 100,
    dueDate: assignment.dueDate || null,
    availableFrom: assignment.availableFrom || null,
    availableUntil: assignment.availableUntil || null,
    course: courseId,
  };
  assignments = [newAssignment, ...assignments];
  return newAssignment;
};

export const updateAssignment = (assignmentId, updates) => {
  assignments = assignments.map((a) =>
    a._id === assignmentId ? { ...a, ...updates } : a
  );
  return assignments.find((a) => a._id === assignmentId);
};

export const deleteAssignment = (assignmentId) => {
  assignments = assignments.filter((a) => a._id !== assignmentId);
};
