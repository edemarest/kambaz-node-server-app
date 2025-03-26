import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
  app.get("/api/courses/:courseId/modules", (req, res) => {
    const { courseId } = req.params;
    const result = dao.findModulesForCourse(courseId);
    res.json(result);
  });

  app.post("/api/courses/:courseId/modules", (req, res) => {
    const { courseId } = req.params;
    const module = req.body;
    const newModule = dao.createModule(courseId, module);
    res.json(newModule);
  });

  app.delete("/api/modules/:moduleId", (req, res) => {
    const { moduleId } = req.params;
    dao.deleteModule(moduleId);
    res.sendStatus(200);
  });

  app.put("/api/modules/:moduleId", (req, res) => {
    const { moduleId } = req.params;
    const updates = req.body;
    const updatedModule = dao.updateModule(moduleId, updates);
    res.json(updatedModule);
  });
}
