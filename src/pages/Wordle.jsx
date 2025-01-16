import React, { useEffect, useState, createContext } from "react";
import Header from "../components/Header";
import "../styles/Wordle.css";
import Board from "../components/Wordle/Board";
import Keyboard from "../components/Wordle/Keyboard";
import axios from "axios";
import GameOver from "../components/Wordle/GameOver";

//this, along with appcontent.provider gives me access to those variables everywhere
export const AppContext = createContext();

function Wordle() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [correctWord, setCorrectWord] = useState("");
  const [allWords, setAllWords] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });
  const [reset, setReset] = useState(false)

  //Getting data from API
  async function fetchWord() {
    setReset(false)
    const word = await axios.get(
      "https://random-word-api.herokuapp.com/word?length=5"
    );
    setCorrectWord(word.data[0]);

    const allWords = await axios.get(
      "https://random-word-api.herokuapp.com//word?number=10000&length=5"
    );
    const wordsSet = new Set(allWords.data);
    setAllWords(wordsSet);
  }

  useEffect(() => {
    fetchWord();
  }, [reset]);

  useEffect(() => {
    resetGame();
  }, []);

  //Functions for deleting, entering, or adding letters
  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > 4) {
      return;
    }

    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
  };

  const onDelete = () => {
    if (currAttempt.letterPos === 0) {
      return;
    }

    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
  };

  const onEnter = () => {
    if (currAttempt.letterPos !== 5) {
      return;
    }

    //Seeing if the word they entered is a real word (using all words)
    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i].toLowerCase();
    }

    if (allWords.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    } else {
      alert("Not a valid Wordle word");
      return
    }

    //Seeing if they won
    if (currWord === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }

    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
    }
  };

  const resetGame = () => {
    setReset(true)
    setBoard([
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
    ]);
    setCurrAttempt({ attempt: 0, letterPos: 0 });
    setGameOver({ gameOver: false, guessedWord: false });
    setDisabledLetters([]);
  };

  return (
    <>
      <Header pageName={"wordle"} />
      <div className="wordle">
        <div className="wordle__nav">
          <h1 className="wordle__title">Wordle Extreme</h1>
        </div>
        <AppContext.Provider
          value={{
            board,
            setBoard,
            currAttempt,
            setCurrAttempt,
            onSelectLetter,
            onDelete,
            onEnter,
            setDisabledLetters,
            disabledLetters,
            gameOver,
            setGameOver,
            correctWord,
            resetGame,
          }}
        >
          <div className="wordle__game">
            <Board />
            <Keyboard />
            {gameOver.gameOver && <GameOver />}
          </div>
        </AppContext.Provider>
      </div>
    </>
  );
}

export default Wordle;

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];
