import model from "./model.js";
import mongoose from "mongoose";

export async function findUsersForCourse(courseId) {
  console.debug(`findUsersForCourse: Fetching users for courseId=${courseId}`);
  try {
    const enrollments = await model.find({
      course: courseId,
      status: "ENROLLED",
    });

    const userIds = enrollments.map((enrollment) => enrollment.user);

    const users = await userModel.find({ _id: { $in: userIds } });

    console.debug("findUsersForCourse: Valid users =", users);
    return users;
  } catch (error) {
    console.error(
      `findUsersForCourse: Error fetching users for courseId=${courseId}`,
      error,
    );
    throw new Error("Failed to fetch users for course.");
  }
}

export async function enrollUserInCourse(userId, courseId) {
  const _id = `${userId}-${courseId}`;
  try {
    const existing = await model.findById(_id);
    if (existing) {
      if (existing.status === "ENROLLED") {
        return existing;
      }
      existing.status = "ENROLLED";
      await existing.save();
      return existing;
    }

    const newEnrollment = await model.create({
      _id,
      user: userId,
      course: courseId,
      status: "ENROLLED",
    });
    return newEnrollment;
  } catch (error) {
    throw new Error("Failed to enroll user in course.");
  }
}

export function unenrollUserFromCourse(userId, courseId) {
  return model
    .findOne({ user: userId, course: courseId })
    .then((enrollment) => {
      if (enrollment) {
        enrollment.status = "DROPPED";
        return enrollment.save();
      } else {
        throw new Error("Enrollment not found.");
      }
    })
    .catch((error) => {
      throw new Error("Failed to unenroll user from course.");
    });
}

export const findEnrollmentsByUser = async (userId) => {
  try {
    const enrollments = await model
      .find({ user: userId, status: "ENROLLED" })
      .populate("course");
    return enrollments;
  } catch (error) {
    throw new Error("Failed to fetch enrollments for user.");
  }
};

export async function getEnrollments() {
  try {
    const enrollments = await model.find().populate("user").populate("course");
    return enrollments;
  } catch (error) {
    throw new Error("Failed to fetch enrollments.");
  }
}

export async function findCoursesForUser(userId) {
  try {
    const enrollments = await model
      .find({ user: userId, status: "ENROLLED" })
      .populate("course");
    return enrollments.map((enrollment) => enrollment.course);
  } catch (error) {
    throw new Error("Failed to fetch courses for user.");
  }
}

export const findEnrollmentsByCourse = async (courseId) => {
  try {
    const enrollments = await model
      .find({ course: courseId, status: "ENROLLED" })
      .populate("user");
    return enrollments;
  } catch (error) {
    throw new Error(`Failed to fetch enrollments for course ${courseId}.`);
  }
};
