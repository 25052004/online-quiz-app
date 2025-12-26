const express = require("express");
const Quiz = require("../models/Quiz");

const router = express.Router();
// GET ALL QUIZ QUESTIONS
router.get("/", async (req, res) => {
    try {
        const questions = await Quiz.find();
        res.json(questions);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch questions" });
    }
});
// SUBMIT QUIZ & CALCULATE SCORE
router.post("/submit", async (req, res) => {
    try {
        const { answers } = req.body;

        const questions = await Quiz.find();
        let score = 0;

        questions.forEach((question, index) => {
            if (question.correctAnswer === answers[index]) {
                score++;
            }
        });

        res.json({
            score,
            total: questions.length
        });
    } catch (error) {
        res.status(500).json({ message: "Error calculating score" });
    }
});

module.exports = router;
