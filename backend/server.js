const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb+srv://quizuser:<db_password>@cluster0.hmsezjr.mongodb.net/?appName=Cluster0")
.then(() => {
    console.log("MongoDB Connected Successfully");
})
.catch((error) => {
    console.log("MongoDB Connection Error:", error);
});

// Test Route
app.get("/", (req, res) => {
    res.send("Quiz App Backend Running");
});
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/quiz", require("./routes/quizRoutes"));

// Start Server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
