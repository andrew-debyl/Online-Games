import React, { useEffect, useState } from "react";
import GamePieces from "./GamePieces";

function GateState() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [collision, setCollisionType] = useState(null);

  const handleGameover = (type) => {
    setGameOver(true);

    if (score > highScore) {
      setHighScore(score);
    }

    setCollisionType(type);
  };

  const handleResetGame = () => {
    setScore(0);
    setGameOver(false);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (gameOver && e.key === "Enter") {
        handleResetGame();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
  }, [gameOver]);

  return (
    <div>
      <p>Score: {score}</p>
      <p>High Score: {highScore}</p>
      {gameOver && (
        <div>
          <p>
            Game Over!{" "}
            {collision === "wall" ? "You hit the wall" : "You ate yourself"}!
          </p>
        </div>
      )}
      {!gameOver && (
        <GamePieces
          score={score}
          setScore={setScore}
          onGameOver={(type) => handleGameover(type)}
        />
      )}
    </div>
  );
}

export default GateState;
