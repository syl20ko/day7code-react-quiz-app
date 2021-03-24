import React from "react";

const Answers = ({showAnswers, correct_answer, answers, handleAnswer}) => {
  return (
    <div className="grid grid-cols-2 gap-6 mt-4">
      {answers.map((answer, idx) => {
        const bgColor = showAnswers
          ? answer === correct_answer
            ? "bg-green-500"
            : "bg-red-500"
          : "bg-white";

        const textColor =showAnswers ? "text-white" : "text-purple-800";
        return (
          <button
            key={idx}
            className={`${bgColor} ${textColor} p-4 font-semibold rounded shadow`}
            onClick={() => handleAnswer(answer)}
            disabled={showAnswers}
          >
            {answer}
          </button>
        );
      })}
    </div>
  );
};

export default Answers;
