import express from "express";

import SavedScholarship
from "../models/SavedScholarship.js";

const router = express.Router();


// SAVE SCHOLARSHIP
router.post(
  "/save",
  async (req, res) => {

    try {

      const savedScholarship =
        new SavedScholarship(req.body);

      await savedScholarship.save();

      res.status(201).json({
        message:
          "Scholarship Saved",
      });

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }
  }
);


// GET SAVED SCHOLARSHIPS
router.get(
  "/:email",
  async (req, res) => {

    try {

      const savedScholarships =
        await SavedScholarship.find({
          userEmail:
            req.params.email,
        });

      res.status(200).json(
        savedScholarships
      );

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }
  }
);

export default router;