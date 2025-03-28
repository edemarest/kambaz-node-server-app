import model from "./model.js";
import * as enrollmentsDao from "../Enrollments/dao.js";
import { v4 as uuidv4 } from "uuid";

export function findAllCourses() {
  return model.find();
}

export const findCoursesForEnrolledUser = async (userId) => {
  const enrollments = await enrollmentsDao.findEnrollmentsByUser(userId);
  const courseIds = enrollments.map((e) => e.course);
  return model.find({ _id: { $in: courseIds } });
};

export function createCourse(course) {
  const newCourse = { ...course, _id: uuidv4() };
  return model.create(newCourse);
}

export function deleteCourse(courseId) {
  return model.deleteOne({ _id: courseId });
}

export const updateCourse = async (courseId, updates) => {
  await model.updateOne({ _id: courseId }, updates);
  return model.findOne({ _id: courseId });
};

export const getCourses = () => model.find();
export const getEnrollments = () => model.findEnrollments();
export const setEnrollments = async (updated) => {
  await model.updateEnrollments(updated);
};

export const findUsersByIds = async (userIds) => {
  try {
    const ids = userIds.map((u) => (typeof u === "object" ? u._id : u));
    const users = await model.find({ _id: { $in: ids } });
    return users;
  } catch (err) {
    throw new Error("Failed to fetch users by IDs.");
  }
};
