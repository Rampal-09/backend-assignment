// middleware/roleMiddleware.js
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authorizeRoles = (...roles) => {
  return async (req, res, next) => {
    try {
      const token = req.header("Authorization")?.split(" ")[1];

      if (!token)
        return res
          .status(401)
          .json({ success: false, message: "No token provided" });

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decoded.id;

      const user = await User.findById(req.userId);
      if (!user)
        return res
          .status(404)
          .json({ success: false, message: "User not found" });

      if (!roles.includes(user.role)) {
        return res
          .status(403)
          .json({ success: false, message: "Access denied" });
      }

      next();
    } catch (err) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized", error: err.message });
    }
  };
};

module.exports = authorizeRoles;
