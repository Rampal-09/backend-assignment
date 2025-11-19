require("dotenv").config();
const express = require("express");

const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

app.use(
  cors({
    origin: "https://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("mongoDb connected");

    app.listen(process.env.PORT, () => {
      console.log(`server is running on ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed!");
    console.error("Reason:", error.message);
  });
