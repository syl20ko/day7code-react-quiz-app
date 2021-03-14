import React from "react";

const Button = ({ answer, className }) => {
  return (
    <button className={`bg-white p-4 text-purple-800 font-semibold rounded shadow ${className}`}>
      {answer}
    </button>
  );
};

const Questionaire = ({
  handleAnswer,
  data: { question, correct_answer, incorrect_answers },
}) => {
  const shuffledAnswer = [correct_answer, ...incorrect_answers].sort(() =>
    Math.random() - 0.5
  );

  console.log(shuffledAnswer);
  console.log(correct_answer);

  return (
    <div>
      {/* question */}
      <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
        <h2 className="text-2xl">{question}</h2>
      </div>
      {/* Answers */}
      <div className="grid grid-cols-2 gap-6 mt-4">
        <Button
          className={
            correct_answer === shuffledAnswer[0]
              ? "bg-purple-300"
              : "bg-red-500"
          }
          onClick={() => handleAnswer(shuffledAnswer[0])}
          answer={shuffledAnswer[0]}
        />
        <Button
          className={
            correct_answer === shuffledAnswer[1]
              ? "bg-purple-300"
              : "bg-red-500"
          }
          onClick={() => handleAnswer(shuffledAnswer[1])}
          answer={shuffledAnswer[1]}
        />
        <Button
          className={
            correct_answer === shuffledAnswer[2]
              ? "bg-purple-300"
              : "bg-red-500"
          }
          onClick={() => handleAnswer(shuffledAnswer[2])}
          answer={shuffledAnswer[2]}
        />
        <Button
          className={
            correct_answer === shuffledAnswer[3]
              ? "bg-purple-300"
              : "bg-red-500"
          }
          onClick={() => handleAnswer(shuffledAnswer[3])}
          answer={shuffledAnswer[3]}
        />
      </div>
    </div>
  );
};

export default Questionaire;
