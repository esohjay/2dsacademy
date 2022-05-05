import { Schema, model, models } from "mongoose";

const TeachersSchema = new Schema(
  {
    fname: String,
    lname: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: Number,
    teacherId: String,
    password: String,
    feedbacks: [{ rating: Number, comment: String }],
    classes: {
      type: Schema.Types.ObjectId,
      ref: "Classes",
      required: true,
    },
  },
  { timestamps: true }
);

const Teachers = models.Teachers || model("Teachers", TeachersSchema);

export default Teachers;
