import React, { useContext } from "react";
import { AppContext } from "../../pages/Wordle";

function GameOver() {
  const { gameOver, correctWord, currAttempt, resetGame } =
    useContext(AppContext);

  const playAgain = () => {
    resetGame();
  };

  return (
    <div>
      <div className="popup-overlay">
        <div className="popup">
          <h2>{gameOver.guessedWord ? "Correct!" : "Game Over!"}</h2>
          <p>The word: {correctWord}</p>
          {gameOver.guessedWord && (
            <p>You guessed in {currAttempt.attempt} attempts</p>
          )}
          <button onClick={playAgain} className="play-again-btn">
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameOver;
