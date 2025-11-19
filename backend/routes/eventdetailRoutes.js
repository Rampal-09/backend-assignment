const express = require("express");
const eventdetailRoutes = express.Router();
const eventdetailControllers = require("../controllers/eventControllers");
const authenticate = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
eventdetailRoutes.post(
  "/",
  authenticate,
  authorizeRoles("admin"),
  eventdetailControllers.CreateEvent
);
eventdetailRoutes.get(
  "/upcomingEvent",
  authenticate,

  eventdetailControllers.getUpcomingEvent
);
eventdetailRoutes.get(
  "/:id/stats",
  authenticate,
  authorizeRoles("admin"),
  authorizeRoles("admin"),
  eventdetailControllers.getStats
);
eventdetailRoutes.get(
  "/:id",
  authenticate,
  eventdetailControllers.getEventDetails
);

exports.eventdetailRoutes = eventdetailRoutes;
