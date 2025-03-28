import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import session from "express-session";
import "dotenv/config.js";

import CourseRoutes from "./Kambaz/Courses/routes.js";
import UserRoutes from "./Kambaz/Users/routes.js";
import ModuleRoutes from "./Kambaz/Modules/routes.js";
import AssignmentRoutes from "./Kambaz/Assignments/routes.js";
import EnrollmentsRoutes from "./Kambaz/Enrollments/routes.js";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  process.env.NETLIFY_URL
];

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;
mongoose.connect(CONNECTION_STRING)
  .then(() => console.log("Connected to MongoDB:", CONNECTION_STRING))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });


app.options("*", cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.set("trust proxy", 1);

const isDev = process.env.NODE_ENV === "development";
const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: !isDev,                         // secure = false in dev
    sameSite: isDev ? "lax" : "none",       // lax in dev, none in prod
    httpOnly: true,
  },
};

if (!isDev) {
  sessionOptions.proxy = true;
  sessionOptions.cookie.domain = ".onrender.com";
}

app.use(session(sessionOptions));
app.use(express.json());

UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
EnrollmentsRoutes(app);
Lab5(app);
Hello(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
