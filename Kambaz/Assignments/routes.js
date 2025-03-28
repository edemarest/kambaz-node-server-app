import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.get("/api/courses/:courseId/assignments", async (req, res) => {
    const { courseId } = req.params;
    try {
      const assignments = await dao.findAssignmentsForCourse(courseId);
      res.json(assignments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/api/courses/:courseId/assignments", async (req, res) => {
    const { courseId } = req.params;
    try {
      const newAssignment = await dao.createAssignment(courseId, req.body);
      res.json(newAssignment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.put("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    try {
      const updated = await dao.updateAssignment(assignmentId, req.body);
      res.json(updated);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.delete("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    try {
      await dao.deleteAssignment(assignmentId);
      res.sendStatus(200);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}
