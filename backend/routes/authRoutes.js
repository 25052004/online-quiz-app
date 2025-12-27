const express = require("express");
const router = express.Router();

console.log("✅ authRoutes.js file LOADED");

// REGISTER
router.post("/register", (req, res) => {
  console.log("✅ /register route HIT");
  res.json({ message: "REGISTER ROUTE WORKING" });
});

module.exports = router;
