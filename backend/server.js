const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
console.log("✅ server.js started");

const authRoutes = require("./routes/authRoutes");
console.log("✅ authRoutes imported");

app.use("/api/auth", authRoutes);


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  

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
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

