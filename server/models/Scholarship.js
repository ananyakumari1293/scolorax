import mongoose from "mongoose";

const scholarshipSchema =
  new mongoose.Schema({

    title: {
      type: String,
      required: true,
    },

    provider: {
      type: String,
      required: true,
    },

    degree: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },

    amount: {
      type: String,
      required: true,
    },

    deadline: {
      type: String,
      required: true,
    },

    applyLink: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

  },

  {
    timestamps: true,
  }
);

const Scholarship =
  mongoose.model(
    "Scholarship",
    scholarshipSchema
  );

export default Scholarship;