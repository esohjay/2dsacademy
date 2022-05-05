import { Schema, model, models } from "mongoose";
const ResponsesSchema = new Schema(
  {
    studentId: String,
    answer: String,
    assessment: Array,
    codeLink: String,
    grade: Number,
    remark: String,
    isDraft: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const ActivitiesSchema = new Schema(
  {
    title: String,
    deadline: Date,
    isActive: Boolean,
    question: String,
    responses: [ResponsesSchema],
  },
  { timestamps: true }
);

const Activities = models.Activities || model("Activities", ActivitiesSchema);

export default Activities;
