import { getEnrollments, setEnrollments } from "../Courses/dao.js";

export const findEnrollmentsForCourse = (courseId) => {
  return getEnrollments().filter((e) => e.course === courseId);
};

export const findEnrollmentsByUser = (userId) => {
  return getEnrollments().filter((e) => e.user === userId);
};

export const enrollUserInCourse = (userId, courseId) => {
  const allEnrollments = getEnrollments();
  const existing = allEnrollments.find(
    (e) => e.user === userId && e.course === courseId,
  );

  if (!existing) {
    const newEnrollment = { user: userId, course: courseId };
    const updated = [...allEnrollments, newEnrollment];
    setEnrollments(updated);
    return newEnrollment;
  }

  return existing;
};

export const unenrollUserFromCourse = (userId, courseId) => {
  const allEnrollments = getEnrollments();
  const updated = allEnrollments.filter(
    (e) => !(e.user === userId && e.course === courseId),
  );
  setEnrollments(updated);
  return updated;
};
