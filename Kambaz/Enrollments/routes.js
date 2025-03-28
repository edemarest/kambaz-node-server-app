import * as dao from "./dao.js";
import model from "./model.js";
import userModel from "../Users/model.js";

export default function EnrollmentsRoutes(app) {
  app.post("/api/courses/:courseId/enroll", async (req, res) => {
    const currentUser = req.session.currentUser;
    if (!currentUser) {
      return res.status(403).json({ message: "Not logged in" });
    }
    const { courseId } = req.params;
    try {
      const existingEnrollment = await dao.findEnrollmentsByUser(currentUser._id);
      const alreadyEnrolled = existingEnrollment.some(
        (enroll) => enroll.course._id === courseId && enroll.status === 'ENROLLED'
      );

      if (alreadyEnrolled) {
        return res.status(400).json({ message: "Already enrolled in this course" });
      }

      const enrollment = await dao.enrollUserInCourse(currentUser._id, courseId);
      res.json(enrollment);
    } catch (err) {
      res.status(500).json({ error: "Failed to enroll in course" });
    }
  });

  app.delete("/api/courses/:courseId/unenroll", async (req, res) => {
    const currentUser = req.session.currentUser;
    if (!currentUser) {
      return res.status(403).json({ message: "Not logged in" });
    }
    const { courseId } = req.params;
    try {
      await dao.unenrollUserFromCourse(currentUser._id, courseId);
      res.sendStatus(200);
    } catch (err) {
      res.status(500).json({ error: "Failed to unenroll from course" });
    }
  });

  app.get("/api/enrollments", async (req, res) => {
    const currentUser = req.session.currentUser;
    if (!currentUser) {
      return res.status(403).json({ message: "Not logged in" });
    }
    try {
      const userEnrollments = await dao.findEnrollmentsByUser(currentUser._id);
      const activeEnrollments = userEnrollments.filter(enrollment => enrollment.status === 'ENROLLED');
      res.json(activeEnrollments);
    } catch (err) {
      res.status(500).json({ error: "Failed to load enrollments" });
    }
  });

  app.get("/api/courses/:courseId/users", async (req, res) => {
    const { courseId } = req.params;
    try {
      const enrollments = await model.find({ course: courseId, status: 'ENROLLED' });
      const userIds = enrollments.map((e) => e.user);
      const users = await userModel.find({ _id: { $in: userIds } });
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch users for course" });
    }
  });
}
