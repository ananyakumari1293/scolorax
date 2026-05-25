import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import scholarshipRoutes
from "./routes/scholarshipRoutes.js";

import savedRoutes
from "./routes/savedRoutes.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(() => {

  console.log(
    "MongoDB Connected"
  );

})
.catch((error) => {

  console.log(error);

});

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  "/api/scholarships",
  scholarshipRoutes
);

app.use(
  "/api/saved",
  savedRoutes
);

app.get("/", (req, res) => {

  res.send(
    "ScoloraX Backend Running"
  );

});

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});