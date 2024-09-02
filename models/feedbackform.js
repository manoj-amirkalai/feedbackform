import mongoose, { Schema } from "mongoose";
const feedbackFormItemSchema = new Schema({
  type: {
    type: String,
    // enum: [
    //   "textarea",
    //   "numberrating",
    //   "starrating",
    //   "smile",
    //   "singlelineinput",
    //   "radiobutton",
    //   "category",
    // ],
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  require: {
    type: Boolean,
    required: true,
  },
  errormsg: {
    type: String,
    required: true,
  },
  options: {
    type: [String], // Array of strings for options (e.g., radio buttons, categories)
  },
});
const feedbackSchema = new Schema(
  {
    urlSwitch: {
      type: Boolean,
    },
    urlValue: {
      type: String,
    },
    dateSwitch: {
      type: Boolean,
    },
    timeSwitch: {
      type: Boolean,
    },
    dateFormatedvalue: {
      type: String,
    },
    timeFormatedvalue: {
      type: String,
    },
    submitted: {
      type: Number,
      required: true,
    },
    viewed: {
      type: Number,
      required: true,
    },
    feedbacktitle: {
      type: String,
      required: true,
    },
    feedbackform: {
      type: [feedbackFormItemSchema], // Array of feedback form items
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Feedbackform =
  mongoose.models.Feedbackform ||
  mongoose.model("Feedbackform", feedbackSchema);

export default Feedbackform;
