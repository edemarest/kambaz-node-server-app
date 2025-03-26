export default function WorkingWithObjects(app) {
  const assignment = {
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  };

  const module = {
    id: "M101",
    name: "React Module",
    description: "Covers React basics",
    course: "CS5610",
  };

  app.get("/lab5/assignment", (req, res) => {
    res.json(assignment);
  });
  app.get("/lab5/assignment/title", (req, res) => {
    res.json(assignment.title);
  });
  app.get("/lab5/assignment/title/:newTitle", (req, res) => {
    const { newTitle } = req.params;
    assignment.title = newTitle;
    res.json(assignment);
  });

  app.get("/lab5/module", (req, res) => {
    res.json(module);
  });
  app.get("/lab5/module/name", (req, res) => {
    res.json(module.name);
  });
  app.get("/lab5/module/description/:desc", (req, res) => {
    module.description = req.params.desc;
    res.json(module);
  });
  app.get("/lab5/module/name/:name", (req, res) => {
    module.name = req.params.name;
    res.json(module);
  });

  app.get("/lab5/assignment/score/:score", (req, res) => {
    assignment.score = parseInt(req.params.score);
    res.json(assignment);
  });
  app.get("/lab5/assignment/completed/:status", (req, res) => {
    assignment.completed = req.params.status === "true";
    res.json(assignment);
  });
}
