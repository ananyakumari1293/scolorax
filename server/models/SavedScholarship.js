import mongoose from "mongoose";

const savedScholarshipSchema =
  new mongoose.Schema({

    userEmail: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    type: {
      type: String,
    },

    location: {
      type: String,
    },

    amount: {
      type: String,
    },

  });

const SavedScholarship =
  mongoose.models.SavedScholarship ||
  mongoose.model(
    "SavedScholarship",
    savedScholarshipSchema
  );

export default SavedScholarship;