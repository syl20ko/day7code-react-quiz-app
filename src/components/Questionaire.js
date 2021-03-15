import React from "react";

const Questionaire = ({
  showAnswers,
  handleAnswer,
  handleNextQuestion,
  data: { question, correct_answer, incorrect_answers },
}) => {
  const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );

  return (
    <div className="flex flex-col">
      {/* question */}
      <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
        <h2 className="text-2xl">{question}</h2>
      </div>
      {/* Answers */}
      <div className="grid grid-cols-2 gap-6 mt-4">
        {shuffledAnswers.map((answer) => {
          const bgColor = showAnswers
            ? answer === correct_answer
              ? "bg-green-500"
              : "bg-red-500"
            : "bg-white";

          const textColor = showAnswers
            ? 
               "text-white"
            : "text-purple-800";
          return (
            <button
              className={`${bgColor} ${textColor} p-4 font-semibold rounded shadow`}
              onClick={() => handleAnswer(answer)}
            >
              {answer}
            </button>
          );
        })}
      </div>
       {showAnswers && ( <button onClick={handleNextQuestion} className={`ml-auto bg-purple-700 text-white p-4 font-semibold rounded shadow mt-6`}>Question suivante</button>)}
    </div>
  );
};

export default Questionaire;
