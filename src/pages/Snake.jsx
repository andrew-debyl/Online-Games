import React, { useEffect, useState } from "react";
import "../styles/Snake.css";
import Header from "../components/Header";
import GamePieces from "../components/Snake/GamePieces";

function Snake() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [collision, setCollisionType] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [gameOver]);

  const handlePlay = () => {
    setIsPlaying(true);
    setScore(0);
    setGameOver(false);
  };

  return (
    <>
      <Header pageName={"snake"} />
      <div className="snake">
        <div className="snake__wrapper">
          {!isPlaying && (
            <div className="start-screen">
              <h1 className="game-title">Snake Game</h1>
              <button className="start-button" onClick={handlePlay}>
                Play
              </button>
            </div>
          )}

          {isPlaying && (
            <div className="snake__game--wrapper">
              {gameOver && (
                <>
                  <div className="start-screen">
                    <p className="ending-message">
                      Game Over!
                      {collision === "wall"
                        ? " You hit the wall."
                        : " You ate yourself."}
                    </p>
                    <button className="start-button" onClick={handlePlay}>
                      Play again
                    </button>
                  </div>
                  <div className="snake__score-wrapper">
                    <p className="snake-temp">Score: {score}</p>
                    <p>High Score: {highScore}</p>
                  </div>
                </>
              )}
              {!gameOver && (
                <>
                  <GamePieces
                    setScore={setScore}
                    setGameOver = {setGameOver}
                    setCollisionType = {setCollisionType}
                  />
                  <div className="snake__score-wrapper">
                    <p>Score: {score}</p>
                    <p>High Score: {highScore}</p>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Snake;
