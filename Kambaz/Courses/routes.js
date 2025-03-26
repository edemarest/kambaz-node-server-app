import * as dao from "./dao.js";
import * as enrollmentsDao from "../Enrollments/dao.js";

export default function CourseRoutes(app) {
    app.get("/api/courses", (req, res) => {
        const courses = dao.findAllCourses();
        res.json(courses);
    });

    app.delete("/api/courses/:courseId", (req, res) => {
        const { courseId } = req.params;
        dao.deleteCourse(courseId);
        res.sendStatus(200);
    });

    app.put("/api/courses/:courseId", (req, res) => {
        const { courseId } = req.params;
        const updates = req.body;
        const updatedCourse = dao.updateCourse(courseId, updates);
        res.json(updatedCourse);
    });

    app.post("/api/users/current/courses", (req, res) => {
        const currentUser = req.session.currentUser;
        if (!currentUser) {
            res.status(403).json({ message: "Not logged in" });
            return;
        }

        const course = req.body;
        const newCourse = dao.createCourse(course);
        enrollmentsDao.enrollUserInCourse(currentUser._id, newCourse._id);
        res.json(newCourse);
    });
}
