import mongoose, { Schema } from "mongoose";

const feedbackSchema = new Schema(
  {
    formid: {
      type: String,
      required: true,
    },
    textarea: {
      type: String,
    },
    numberrating: {
      type: Number,
    },
    smile: {
      type: Number,
    },
    star: {
      type: Number,
    },
    singleline: {
      type: String,
    },
    radio: {
      type: String,
    },
    category: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Feedback =
  mongoose.models.Feedback || mongoose.model("Feedback", feedbackSchema);

export default Feedback;
