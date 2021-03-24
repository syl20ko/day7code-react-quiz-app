import React from "react";
import Question from "./Question";
import Answers from "./Answers";
import NextButton from "./NextButton";

const Quiz = ({
  showAnswers,
  handleAnswer,
  handleNextQuestion,
  data: { question, correct_answer, answers },
}) => {
  return (
    <div className="flex flex-col">
      <Question question={question} />
      <Answers
        showAnswers={showAnswers}
        correct_answer={correct_answer}
        answers={answers}
        handleAnswer={handleAnswer}
      />
      {showAnswers && <NextButton handleNextQuestion={handleNextQuestion}/>}
    </div>
  );
};

export default Quiz;
