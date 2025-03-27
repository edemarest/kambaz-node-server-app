import express from "express";
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
  "https://a5--kambaz-react-web-app-by-ella-demarest.netlify.app"
];

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

const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kambaz-secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    sameSite: "none",
    secure: true,
  },
};

if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie.domain = ".onrender.com";
}

app.use(session(sessionOptions));

app.use((req, res, next) => {
  console.log("SESSION:", req.session);
  next();
});

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
