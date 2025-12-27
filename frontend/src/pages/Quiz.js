import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  // Fetch quiz questions
  useEffect(() => {
    axios.get("http://localhost:5000/api/quiz")
      .then(res => setQuestions(res.data))
      .catch(() => alert("Failed to load quiz"));
  }, []);

  // Store selected answer
  const selectAnswer = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  // Submit quiz
  const submitQuiz = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/quiz/submit",
        { answers }
      );

     navigate("/result", {
  state: {
    score: response.data.score,
    total: response.data.total
  }
});

    } catch (error) {
      alert("Error submitting quiz");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Quiz</h2>

      {questions.map((q, qIndex) => (
        <div key={qIndex} style={{ marginBottom: "20px" }}>
          <h4>{qIndex + 1}. {q.question}</h4>

          {q.options.map((option, oIndex) => (
            <div key={oIndex}>
              <input
                type="radio"
                name={`question-${qIndex}`}
                onChange={() => selectAnswer(qIndex, oIndex)}
              />
              {option}
            </div>
          ))}
        </div>
      ))}

      <button onClick={submitQuiz}>Submit Quiz</button>
    </div>
  );
}

export default Quiz;
