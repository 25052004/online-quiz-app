const express = require("express");
const router = express.Router();

// REGISTER
router.post("/register", (req, res) => {
  res.json({ message: "REGISTER ROUTE WORKING" });
});

// LOGIN
router.post("/login", (req, res) => {
  res.json({ message: "LOGIN ROUTE WORKING" });
});

module.exports = router;
