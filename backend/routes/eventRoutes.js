const express = require("express");
const eventRoutes = express.Router();
const eventControllers = require("../controllers/registrationControllers");
const authorizeRoles = require("../middleware/roleMiddleware");
eventRoutes.post(
  "/register/:id",
  authenticate,
  authorizeRoles("user"),
  eventControllers.registerUser
);
eventRoutes.post(
  "/:id/cancel",
  authenticate,
  authorizeRoles("user"),
  eventControllers.cancelRegistration
);

exports.eventRoutes = eventRoutes;
