import coursesData from "../Database/courses.js";
import enrollmentsData from "../Database/enrollments.js";
import { v4 as uuidv4 } from "uuid";

let courses = [...coursesData];
let enrollments = [...enrollmentsData];

export const findAllCourses = () => courses;

export const findCoursesForEnrolledUser = (userId) => {
  const courseIds = enrollments
    .filter((e) => e.user === userId)
    .map((e) => e.course);
  return courses.filter((c) => courseIds.includes(c._id));
};

export const createCourse = (course) => {
  const newCourse = { ...course, _id: uuidv4() };
  courses = [...courses, newCourse];
  return newCourse;
};

export const deleteCourse = (courseId) => {
  courses = courses.filter((c) => c._id !== courseId);
};

export const updateCourse = (courseId, updates) => {
  courses = courses.map((c) => (c._id === courseId ? { ...c, ...updates } : c));
  return courses.find((c) => c._id === courseId);
};

export const getCourses = () => courses;
export const getEnrollments = () => enrollments;
export const setEnrollments = (updated) => {
  enrollments = updated;
};
