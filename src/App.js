import React, { useState, useEffect } from "react";
import Quiz from "./components/Quiz";
import Loading from "./components/Loading";
import Score from "./components/Score";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=14&difficulty=easy";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setCurrentScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const questions = data.results.map((question) => ({
          ...question,
          answers: [question.correct_answer, ...question.incorrect_answers].sort(
            () => Math.random() - 0.5
          ),
        }));
        setQuestions(questions);
      });
  }, []);

  const handleAnswer = (answer) => {
    if (answer === questions[currentIndex].correct_answer) {
      setCurrentScore(score + 1);
    }

    setShowAnswers(true);
    /*     const newIndex = currentIndex + 1;
     */
  };

  const handleNextQuestion = () => {
    setShowAnswers(false);
    setCurrentIndex(currentIndex + 1);
  };

  return questions.length > 0 ? (
    <div className="container">
      {currentIndex >= questions.length ? (
        <Score score={score} />
      ) : (
        <Quiz
          data={questions[currentIndex]}
          showAnswers={showAnswers}
          handleNextQuestion={handleNextQuestion}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  ) : (
    <Loading />
  );
}

export default App;
