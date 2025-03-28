import * as dao from "./dao.js";
import * as coursesDao from "../Courses/dao.js";
import model from "./model.js";
import * as enrollmentsDao from "../Enrollments/dao.js";
import mongoose from "mongoose";
export default function UserRoutes(app) {
  const createUser = async (req, res) => {
    const user = await dao.createUser(req.body);
    res.json(user);
  };

  const deleteUser = async (req, res) => {
    const userId = req.params.userId;
    try {
      await dao.deleteUser(userId);
      res.sendStatus(200);
    } catch (error) {
      res.status(500).json({ message: "Failed to delete user" });
    }
  };

  const findAll = async (req, res) => {
    const { role, name } = req.query;
    if (role) {
      const users = await dao.findUsersByRole(role);
      res.json(users);
      return;
    }
    if (name) {
      const users = await dao.findUsersByPartialName(name);
      res.json(users);
      return;
    }
    const users = await dao.findAll();
    res.json(users);
  };

  const findUserById = async (req, res) => {
    const user = await dao.findUserById(req.params.userId);
    res.json(user);
  };

  const updateUser = async (req, res) => {
    const currentUser = req.session["currentUser"];
    const userId = req.params.userId;
    const updates = req.body;

    if (
      !currentUser ||
      (currentUser._id !== userId && currentUser.role !== "ADMIN")
    ) {
      return res
        .status(401)
        .json({ message: "Not authorized to update this user" });
    }

    try {
      await dao.updateUser(userId, updates);
      const updatedUser = await dao.findUserById(userId);

      if (currentUser._id === userId) {
        req.session["currentUser"] = updatedUser;
      }

      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: "Failed to update user" });
    }
  };

  const signup = async (req, res) => {
    const existing = await dao.findUserByUsername(req.body.username);
    if (existing) {
      res.status(400).json({ message: "Username already taken" });
      return;
    }
    const newUser = await dao.createUser(req.body);
    req.session["currentUser"] = newUser;
    res.json(newUser);
  };

  const signin = async (req, res) => {
    const { username, password } = req.body;
    const user = await dao.findUserByCredentials(username, password);
    req.session.currentUser = user;
    if (!user) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }
    req.session["currentUser"] = user;
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

  const getCoursesForUser = async (req, res) => {
    const { userId } = req.params;
    const courses = await coursesDao.findCoursesForEnrolledUser(userId);
    res.json(courses);
  };

  const getCoursesForCurrentUser = async (req, res) => {
    const currentUser = req.session.currentUser;
    if (!currentUser) {
      res.status(403).json({ message: "Not logged in" });
      return;
    }
    const courses = await coursesDao.findCoursesForEnrolledUser(
      currentUser._id,
    );
    res.json(courses);
  };

  const findCoursesForUser = async (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }
    if (currentUser.role === "ADMIN") {
      const courses = await coursesDao.findAllCourses();
      res.json(courses);
      return;
    }
    let { uid } = req.params;
    if (uid === "current") {
      uid = currentUser._id;
    }
    const courses = await enrollmentsDao.findCoursesForUser(uid);
    res.json(courses);
  };

  app.post("/api/users", createUser);
  app.get("/api/users", findAll);
  app.get("/api/users/:userId", findUserById);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/profile", profile);
  app.get("/api/users/:userId/courses", getCoursesForUser);
  app.get("/api/users/current/courses", getCoursesForCurrentUser);
  app.get("/api/users/:uid/courses", findCoursesForUser);
}
