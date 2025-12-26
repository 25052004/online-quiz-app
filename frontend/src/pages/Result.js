import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const { score, total } = location.state || {};

  return (
    <div style={{ padding: "20px" }}>
      <h2>Quiz Result</h2>

      {score !== undefined ? (
        <>
          <h3>Your Score: {score} / {total}</h3>

          <h4>
            {score >= total / 2 ? "🎉 Congratulations! You Passed" : "❌ You Failed"}
          </h4>

          <button onClick={() => navigate("/quiz")}>
            Retake Quiz
          </button>
        </>
      ) : (
        <h4>No result found</h4>
      )}
    </div>
  );
}

export default Result;
