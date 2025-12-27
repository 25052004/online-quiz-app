const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// DIRECT TEST ROUTE
app.post("/api/auth/register", (req, res) => {
  res.json({ message: "DIRECT REGISTER ROUTE WORKING" });
});

// TEST GET ROUTE
app.get("/test", (req, res) => {
  res.send("Backend working");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
