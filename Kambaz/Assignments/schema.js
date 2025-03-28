import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    points: { type: Number, required: true },
    dueDate: { type: Date, required: true },
    availableFrom: { type: Date, required: true },
    availableUntil: { type: Date, required: true },
    course: { type: String, required: true }
  }, { collection: "assignments" });

export default assignmentSchema;