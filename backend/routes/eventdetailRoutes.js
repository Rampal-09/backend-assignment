const express = require("express");
const eventdetailRoutes = express.Router();
const eventdetailControllers = require("../controllers/eventControllers");
const authenticate = require("../middleware/authMiddleware");

eventdetailRoutes.post("/", authenticate, eventdetailControllers.CreateEvent);
eventdetailRoutes.get(
  "/upcomingEvent",
  authenticate,
  eventdetailControllers.getUpcomingEvent
);
eventdetailRoutes.get(
  "/:id/stats",
  authenticate,
  eventdetailControllers.getStats
);
eventdetailRoutes.get(
  "/:id",
  authenticate,
  eventdetailControllers.getEventDetails
);

exports.eventdetailRoutes = eventdetailRoutes;
