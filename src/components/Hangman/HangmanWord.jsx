import React from "react";

function HangmanWord({guessedLetters, wordToGuess}) {
  return (
    <div className="hangman-word">
      {wordToGuess.split("").map((letter, index) => (
        <span className="hangman-word-letter" key={index}>
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}

export default HangmanWord;
