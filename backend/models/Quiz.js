const mongoose = require("mongoose");

// Quiz Schema
const quizSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: {
        type: [String],
        required: true
    },
    correctAnswer: {
        type: Number,
        required: true
    }
});

// Export Quiz Model
module.exports = mongoose.model("Quiz", quizSchema);
