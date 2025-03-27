import * as dao from "./dao.js";
import * as coursesDao from "../Courses/dao.js";

export default function UserRoutes(app) {
  const createUser = (req, res) => {
    const newUser = dao.createUser(req.body);
    res.json(newUser);
  };

  const deleteUser = (req, res) => {
    const userId = req.params.userId;
    dao.deleteUser(userId);
    res.sendStatus(200);
  };

  const findAllUsers = (req, res) => {
    const users = dao.findAllUsers();
    res.json(users);
  };

  const findUserById = (req, res) => {
    const userId = req.params.userId;
    const user = dao.findUserById(userId);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.json(user);
  };

  const updateUser = (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser || currentUser._id !== req.params.userId) {
      res.status(401).json({ message: "Not authorized to update this user" });
      return;
    }
    const userId = req.params.userId;
    const updates = req.body;
    const updatedUser = dao.updateUser(userId, updates);
    req.session["currentUser"] = updatedUser;
    res.json(updatedUser);
  };

  const signup = (req, res) => {
    const existing = dao.findUserByUsername(req.body.username);
    if (existing) {
      res.status(400).json({ message: "Username already taken" });
      return;
    }
    const newUser = dao.createUser(req.body);
    req.session["currentUser"] = newUser;
    res.json(newUser);
  };

  const signin = (req, res) => {
    const { username, password } = req.body;
    const user = dao.findUserByCredentials(username, password);
    if (!user) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }
    req.session["currentUser"] = user;
    console.log("SESSION AT SIGNIN:", req.session);
    res.json(user);
  };

  const signout = (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  };

  const profile = (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.status(401).json({ message: "Not signed in" });
      return;
    }
    res.json(currentUser);
  };

  const getCoursesForUser = (req, res) => {
    const { userId } = req.params;
    const courses = coursesDao.findCoursesForEnrolledUser(userId);
    res.json(courses);
  };

  const getCoursesForCurrentUser = (req, res) => {
    const currentUser = req.session.currentUser;
    if (!currentUser) {
      res.status(403).json({ message: "Not logged in" });
      return;
    }
    const courses = coursesDao.findCoursesForEnrolledUser(currentUser._id);
    res.json(courses);
  };

  const getUsersForCourse = (req, res) => {
    const { cid } = req.params;
    const enrolledUserIds = enrollmentsDao
      .getEnrollments()
      .filter((e) => e.course === cid)
      .map((e) => e.user);

    const users = dao
      .findAllUsers()
      .filter((u) => enrolledUserIds.includes(u._id));
    res.json(users);
  };

  app.post("/api/users", createUser);
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:userId", findUserById);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/profile", profile);
  app.get("/api/users/:userId/courses", getCoursesForUser);
  app.get("/api/users/current/courses", getCoursesForCurrentUser);
  app.get("/api/courses/:cid/users", getUsersForCourse);
}
