import { Schema, model, models } from "mongoose";

const CoursesSchema = new Schema(
  {
    name: String,
    price: Number,
    materials: [{ name: String, url: String }],
    activities: [
      {
        type: Schema.Types.ObjectId,
        ref: "Activities",
        required: true,
      },
    ],
    exam: [
      {
        type: Schema.Types.ObjectId,
        ref: "Questions",
        required: true,
      },
    ],
    teacher: [
      {
        type: Schema.Types.ObjectId,
        ref: "Teachers",
        required: true,
      },
    ],
  },
  { timestamps: true }
);

const Courses = models.Courses || model("Courses", CoursesSchema);

export default Courses;
