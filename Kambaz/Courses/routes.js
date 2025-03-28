import * as dao from "./dao.js";
import * as enrollmentsDao from "../Enrollments/dao.js";
import model from "./model.js";
import mongoose from "mongoose";

export default function CourseRoutes(app) {
  // Get all courses
  app.get("/api/courses", async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  });

  // Delete a course
  app.delete("/api/courses/:courseId", async (req, res) => {
    const { courseId } = req.params;
    try {
      await dao.deleteCourse(courseId);
      res.sendStatus(200);
    } catch (err) {
      res.status(500).json({ error: "Failed to delete course" });
    }
  });

  // Update a course
  app.put("/api/courses/:courseId", async (req, res) => {
    const { courseId } = req.params;
    const updates = req.body;
    try {
      const updatedCourse = await dao.updateCourse(courseId, updates);
      res.json(updatedCourse);
    } catch (err) {
      res.status(500).json({ error: "Failed to update course" });
    }
  });

  // Create a course and enroll the current user in the course
  app.post("/api/users/current/courses", async (req, res) => {
    const currentUser = req.session.currentUser;
    if (!currentUser) {
      return res.status(403).json({ message: "Not logged in" });
    }

    const course = req.body;
    try {
      const newCourse = await dao.createCourse(course);
      await enrollmentsDao.enrollUserInCourse(currentUser._id, newCourse._id);
      res.json(newCourse);
    } catch (err) {
      res.status(500).json({ error: "Failed to create course or enroll user" });
    }
  });

  const getUsersForCourse = async (req, res) => {
    const { courseId } = req.params;
    try {
      const enrollments =
        await enrollmentsDao.findEnrollmentsByCourse(courseId);
      const userIds = enrollments.map((e) =>
        typeof e.user === "object" ? e.user._id : e.user,
      );
      const users = await usersDao.findUsersByIds(userIds);

      if (!users.length) {
        return res.status(404).json({ message: "No users found for course" });
      }

      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch users for course." });
    }
  };
}
