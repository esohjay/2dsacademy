import { Schema, model, models } from "mongoose";

const TicketsSchema = new Schema(
  {
    title: String,
    description: String,
    student: [
      {
        type: Schema.Types.ObjectId,
        ref: "Student",
        required: true,
      },
    ],
  },
  { timestamps: true }
);

const Tickets = models.Tickets || model("Tickets", TicketsSchema);

export default Tickets;
