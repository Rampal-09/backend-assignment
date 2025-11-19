const express = require("express");
const eventRoutes = express.Router();
const eventControllers = require("../controllers/registrationControllers");

eventRoutes.post("/register/:id", authenticate, eventControllers.registerUser);
eventRoutes.post(
  "/:id/cancel",
  authenticate,
  eventControllers.cancelRegistration
);

exports.eventRoutes = eventRoutes;
