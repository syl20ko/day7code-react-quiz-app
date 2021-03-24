import React, { useState, useEffect } from "react";
import Quiz from "./components/Quiz";
import Loading from "./components/Loading";
import Score from "./components/Score";
import Box from "./components/Box";
import { Canvas } from 'react-three-fiber'
import { Html, OrbitControls } from '@react-three/drei'
import "./index.css"

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=14&difficulty=easy";

function App() {
  const colors = ["#173f5f", "#20639b", "#3caea3", "#f6d55c", "#ed553b"];
  const [boxes, setBoxes] = useState([]);
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
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random() - 0.5),
        }));
        setQuestions(questions);
      });
  }, []);

  const handleAnswer = (answer) => {
    if (answer === questions[currentIndex].correct_answer) {
      setCurrentScore(score + 1);
      generateNewBlock();
    }

    setShowAnswers(true);
    /*     const newIndex = currentIndex + 1;
     */
  };

  const handleNextQuestion = () => {
    setShowAnswers(false);
    setCurrentIndex(currentIndex + 1);
  };

  function generateNewBlock() {
    const total = boxes.length;
    const color = colors[getRandomInt(6)];
    let newBoxes = boxes.map((props) => ({ ...props, move: false }));
    newBoxes.push({
      position: [getRandomInt(3), total * 0.5 - 3, 0],
      color: color,
      move: true,
    });
    setBoxes([...newBoxes]);
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  return questions.length > 0 ? (
    <div className="container">
      {currentIndex >= questions.length ? (
        <Score score={score} />
      ) : (
        <>
          <Canvas
            camera={{ position: [0, 0, 40] ,  fov: 15 /*near: 5 , far: 15 */ }}
           /*  onCreated={({ gl }) => gl.setClearColor("lightpink")} */
          >
            <ambientLight intensity={0.5} />
            <pointLight position={[150, 150, 150]} intensity={0.55} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            {boxes.map((props) => (
              <Box {...props} />
            ))}
            <Box position={[0, -3.5, 0]} scale={[3, 0.5, 3]} color="hotpink" />
{/*             <Html scaleFactor={15} class="main">
              <h2>WOOPS !</h2>
            </Html> */}
            <OrbitControls />
          </Canvas>
          <Quiz
            data={questions[currentIndex]}
            showAnswers={showAnswers}
            handleNextQuestion={handleNextQuestion}
            handleAnswer={handleAnswer}
          />
        </>
      )}
    </div>
  ) : (
    <Loading />
  );
}

export default App;
