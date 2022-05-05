import { Schema, model, models } from "mongoose";

const ProgramSchema = new Schema(
  {
    name: String,
    classes: {
      type: Schema.Types.ObjectId,
      ref: "Classes",
      required: true,
    },
    assessment: Array,
    isPaid: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const StudentSchema = new Schema(
  {
    fname: String,
    lname: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: Number,
    amountPaid: Number,
    isPaid: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      default: "Student",
    },
    regNo: String,
    password: String,
    programs: [ProgramSchema],
  },
  { timestamps: true }
);

const Student = models.Student || model("Student", StudentSchema);

export default Student;
