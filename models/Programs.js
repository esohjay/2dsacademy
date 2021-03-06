import { Schema, model, models } from "mongoose";

const ProgramsSchema = new Schema(
  {
    name: String,
    classes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Classes",
        required: true,
      },
    ],
  },
  { timestamps: true }
);

const Programs = models.Programs || model("Programs", ProgramsSchema);

export default Programs;
