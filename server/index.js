import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import aiRoutes from "./routes/ai.js";

import scholarshipRoutes
from "./routes/scholarshipRoutes.js";

import savedRoutes
from "./routes/savedRoutes.js";

dotenv.config();

/* =========================
   DATABASE CONNECTION
========================= */

mongoose
  .connect(process.env.MONGO_URI)

  .then(() => {

    console.log(
      "MongoDB Connected"
    );

  })

  .catch((error) => {

    console.log(error);

  });

/* =========================
   EXPRESS APP
========================= */

const app = express();

/* =========================
   MIDDLEWARE
========================= */

app.use(cors());

app.use(express.json());

/* =========================
   ROUTES
========================= */

app.use(
  "/api/ai",
  aiRoutes
);

app.use(
  "/api/scholarships",
  scholarshipRoutes
);

app.use(
  "/api/saved",
  savedRoutes
);

/* =========================
   HOME ROUTE
========================= */

app.get("/", (req, res) => {

  res.send(
    "ScoloraX Backend Running"
  );

});

/* =========================
   SERVER
========================= */

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});