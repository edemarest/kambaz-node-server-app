import * as dao from "./dao.js";

export default function EnrollmentsRoutes(app) {
  app.post("/api/courses/:courseId/enroll", (req, res) => {
    const currentUser = req.session.currentUser;
    if (!currentUser) {
      return res.status(403).json({ message: "Not logged in" });
    }
    const { courseId } = req.params;
    const enrollment = dao.enrollUserInCourse(currentUser._id, courseId);
    res.json(enrollment);
  });

  app.delete("/api/courses/:courseId/unenroll", (req, res) => {
    const currentUser = req.session.currentUser;
    if (!currentUser) {
      return res.status(403).json({ message: "Not logged in" });
    }
    const { courseId } = req.params;
    dao.unenrollUserFromCourse(currentUser._id, courseId);
    res.sendStatus(200);
  });

  app.get("/api/enrollments", (req, res) => {
    const currentUser = req.session.currentUser;
    if (!currentUser) {
      return res.status(403).json({ message: "Not logged in" });
    }
    const userEnrollments = dao.findEnrollmentsByUser(currentUser._id);
    res.json(userEnrollments);
  });
}
