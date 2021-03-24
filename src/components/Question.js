import React from "react";

const Question = ({question}) => {
  return (
    <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
      <h2 className="text-2xl">{question}</h2>
    </div>
  );
};
export default Question;
