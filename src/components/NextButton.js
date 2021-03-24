import React from "react";

const NextButton = ({handleNextQuestion}) => {
  return (
    <button
      onClick={handleNextQuestion}
      className={`ml-auto bg-purple-700 text-white p-4 font-semibold rounded shadow mt-6`}
    >
      Question suivante
    </button>
  );
};

export default NextButton;
