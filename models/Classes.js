import { Schema, model, models } from "mongoose";

const ClassesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    courses: [
      {
        type: Schema.Types.ObjectId,
        ref: "Courses",
        required: true,
      },
    ],
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: "Student",
        required: true,
      },
    ],
    status: String,
    startDate: Date,
    endDate: Date,
    schedule: [{ day: String, time: String }],
  },
  { timestamps: true }
);

const Classes = models.Classes || model("Classes", ClassesSchema);

export default Classes;
