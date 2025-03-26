import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.get("/api/courses/:courseId/assignments", (req, res) => {
    const { courseId } = req.params;
    const assignments = dao.findAssignmentsForCourse(courseId);
    res.json(assignments);
  });

  app.post("/api/courses/:courseId/assignments", (req, res) => {
    const { courseId } = req.params;
    const assignment = req.body;
    const newAssignment = dao.createAssignment(courseId, assignment);
    res.json(newAssignment);
  });

  app.put("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const updates = req.body;
    const updated = dao.updateAssignment(assignmentId, updates);
    res.json(updated);
  });

  app.delete("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    dao.deleteAssignment(assignmentId);
    res.sendStatus(200);
  });
}
