import React, { useCallback, useEffect } from "react";
import Header from "../components/Header";
import words from "../assets/words.json";
import "../styles/Hangman.css";
import HangmanDrawing from "../components/Hangman/HangmanDrawing";
import HangmanWord from "../components/Hangman/HangmanWord";
import HangmanKeyboard from "../components/Hangman/HangmanKeyboard";

function Hangman() {
  const [wordToGuess, setWordToGuess] = React.useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = React.useState([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  //So it only re-renders when guessedLetters changes and not on every keypress
  const addGuessedLetter = useCallback(
    (letter) => {
      if (!guessedLetters.includes(letter)) {
        setGuessedLetters((guessedLetters) => [...guessedLetters, letter]);
      }
    },
    [guessedLetters]
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.match(/^[a-z]$/)) {
        const letter = event.key.toLowerCase();
        addGuessedLetter(letter);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [guessedLetters]);

  const onPlayAgain = () => {
    setWordToGuess(words[Math.floor(Math.random() * words.length)]);
    setGuessedLetters([]);
  };

  return (
    < div className="hangman-container" >
      <Header pageName={"hangman"} />
      {(isWinner || isLoser) && (
        <div className={"hangman-status"}>
          {isWinner && <h1>You won!</h1>}
          {isLoser && <h1>You lost!</h1>}
          {isLoser && <p>The word was: {wordToGuess}</p>}
          <button className="hangman-status-btn" onClick={onPlayAgain}>
            Play Again
          </button>
        </div>
      )}
      <div className="hangman">
        <HangmanDrawing numofGuess={incorrectLetters.length} />
        <HangmanWord
          guessedLetters={guessedLetters}
          wordToGuess={wordToGuess}
        />
        <div style={{ alignSelf: "stretch" }}>
          <HangmanKeyboard
            activeLetter={guessedLetters.filter((letter) =>
              wordToGuess.includes(letter)
            )}
            inactiveLetters={incorrectLetters}
            addGuessedLetter={addGuessedLetter}
            disabled={isWinner || isLoser}
          />
        </div>
      </div>
    </div>
  );
}

export default Hangman;
