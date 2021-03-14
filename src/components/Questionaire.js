import React from "react";

const Questionaire = ({
  handleAnswer,
  data: { question, correct_answer, incorrect_answers },
}) => {
  const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );

  return (
    <div>
      {/* question */}
      <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
        <h2 className="text-2xl">{question}</h2>
      </div>
      {/* Answers */}
      <div className="grid grid-cols-2 gap-6 mt-4">
        {shuffledAnswers.map((answer) => (
          <button
            className={`bg-white p-4 text-purple-800 font-semibold rounded shadow`}
            onClick={() => handleAnswer(answer)}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Questionaire;
