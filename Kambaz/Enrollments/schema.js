import mongoose from "mongoose";

// Update the `user` reference to use ObjectId and correct model reference
const enrollmentSchema = new mongoose.Schema(
  {
    _id: String,
    course: { type: String, ref: "CourseModel" },
    user: { type: String, ref: "UserModel" }, 
    grade: Number,
    letterGrade: String,
    enrollmentDate: Date,
    status: {
      type: String,
      enum: ["ENROLLED", "DROPPED", "COMPLETED"],
      default: "ENROLLED",
    },
  },
  { collection: "enrollments" }
);

export default enrollmentSchema;
