import React, { useState, useEffect } from "react";
import Questionaire from "./components/Questionaire";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=14&difficulty=easy";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setCurrentScore] = useState(0);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);

  const handleAnswer = (answer) => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(currentIndex + 1);

    if (answer === questions[currentIndex].correct_answer) {
      setCurrentScore(score + 1);
    }
  };

  return questions.length > 0 ? (
    <div className="container">
      {currentIndex >= questions.length ? (
        <h1 className="text-3xl text-white font-bold">
          Your score was {score}
        </h1>
      ) : (
        <Questionaire
          data={questions[currentIndex]}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  ) : (
    <h2 className="text-2xl text-white font-bold">Chargement...</h2>
  );
}

export default App;
