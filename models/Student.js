import { Schema, model, models } from "mongoose";

const ProgramSchema = new Schema({
  name: String,
  batch: String,
  assessment: Array,
});
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
    regNo: String,
    password: String,
    programs: [ProgramSchema],
  },
  { timestamps: true }
);

const Student = models.Student || model("Student", StudentSchema);

export default Student;
