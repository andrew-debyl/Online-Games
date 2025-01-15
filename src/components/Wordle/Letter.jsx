import React, { useContext, useEffect } from "react";
import { AppContext } from "../../pages/Wordle";

function Letter({ letterPos, attempVal }) {
  //can do this to get the value as well using appcontext
  const { board, correctWord, currAttempt, setDisabledLetters } =
    useContext(AppContext);
  const letter = board[attempVal][letterPos];

  const correct = correctWord[letterPos] === letter.toLowerCase();
  const almost = !correct && letter.toLowerCase() !== "" && correctWord.includes(letter.toLowerCase());
  const letterState =
    currAttempt.attempt > attempVal &&
    (correct ? "wordle__correct" : almost ? "wordle__almost" : "wordle__error");

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  return (
    <div className="wordle__letter" id={letterState || undefined}>
      {letter}
    </div>
  );
}

export default Letter;
