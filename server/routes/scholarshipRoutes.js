import express from "express";

import Scholarship
from "../models/Scholarship.js";

const router = express.Router();


// ADD SCHOLARSHIP
router.post(
  "/add",
  async (req, res) => {

    try {

      const scholarship =
        new Scholarship(req.body);

      await scholarship.save();

      res.status(201).json({
        message:
          "Scholarship Added",
        scholarship,
      });

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }
  }
);


// GET ALL SCHOLARSHIPS
router.get(
  "/",
  async (req, res) => {

    try {

      const scholarships =
        await Scholarship.find();

      res.status(200).json(
        scholarships
      );

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }
  }
);

export default router;