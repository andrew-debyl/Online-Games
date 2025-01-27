import React from "react";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function HangmanKeyboard({ activeLetter, inactiveLetters, addGuessedLetter, disabled }) {
  return (
    <div className="hangman-keyboard">
      {KEYS.map((key) => {
        const isActive = activeLetter.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            key={key}
            className={`hangman-keyboard-key ${
              isActive && "hangman-keyboard-key-active"
            } ${isInactive && "hangman-keyboard-key-inactive"}`}
            disabled={isActive || isInactive || disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}

export default HangmanKeyboard;
