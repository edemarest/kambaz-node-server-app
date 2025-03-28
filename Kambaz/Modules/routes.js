import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
  app.get("/api/courses/:courseId/modules", async (req, res) => {
    const { courseId } = req.params;
    try {
      const result = await dao.findModulesForCourse(courseId);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/api/courses/:courseId/modules", async (req, res) => {
    const { courseId } = req.params;
    const module = req.body;
    try {
      const newModule = await dao.createModule(courseId, module);
      res.json(newModule);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.delete("/api/modules/:moduleId", async (req, res) => {
    const { moduleId } = req.params;
    try {
      await dao.deleteModule(moduleId);
      res.sendStatus(200);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.put("/api/modules/:moduleId", async (req, res) => {
    const { moduleId } = req.params;
    const updates = req.body;
    try {
      const updatedModule = await dao.updateModule(moduleId, updates);
      res.json(updatedModule);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}
