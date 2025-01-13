import React, { useState } from "react";
import "../styles/TicTacToe.css";

function TicTacToe() {
  let [currentPlayer, setCurrentPlayer] = useState("X");
  let [title, setTitle] = useState("X will start");
  let [gameOver, setGameOver] = useState(false);
  let [board, setBoard] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (gameOver || board[i] !== null) return;

    const nextBoard = [...board];
    nextBoard[i] = currentPlayer;
    setBoard(nextBoard);

    if (checkWin(nextBoard)) {
      setTitle(`${currentPlayer} has won!`);
      setGameOver(true);
      return;
    }

    if (checkDraw(nextBoard)) {
      setTitle("Draw!");
      setGameOver(true);
      return;
    }

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    setTitle(`${currentPlayer === "X" ? "O" : "X"}'s turn`);
  }

  function handleRestart() {
    setCurrentPlayer("X");
    setBoard(board.map(() => null));
    setTitle("X will start");
    setGameOver(false);
  }

  function checkWin(nextBoard) {
    let winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combo of winningCombos) {
      let symb1 = nextBoard[combo[0]];
      let symb2 = nextBoard[combo[1]];
      let symb3 = nextBoard[combo[2]];

      if (!symb1 || !symb2 || !symb3) {
        continue;
      }

      if (symb1 === symb2 && symb2 === symb3) {
        return true;
      }
    }
    return false;
  }

  function checkDraw(nextBoard) {
    for (const tile of nextBoard) {
      if (tile === null) {
        return false;
      }
    }
    return true;
  }

  return (
    <div className="tictactoe__wrapper">
      <div>
        <h1 className="tictactoe__title">TicTacToe</h1>
      </div>
      <div>
        <h2 className="board__title">{title}</h2>
        <div className="board__wrapper">
          <button className="board__square" onClick={() => handleClick(0)}>
            {board[0]}
          </button>
          <button className="board__square border-top" onClick={() => handleClick(1)}>
            {board[1]}
          </button>
          <button className="board__square" onClick={() => handleClick(2)}>
            {board[2]}
          </button>
          <button className="board__square border-left" onClick={() => handleClick(3)}>
            {board[3]}
          </button>
          <button className="board__square border-middle" onClick={() => handleClick(4)}>
            {board[4]}
          </button>
          <button className="board__square border-right" onClick={() => handleClick(5)}>
            {board[5]}
          </button>
          <button className="board__square" onClick={() => handleClick(6)}>
            {board[6]}
          </button>
          <button className="board__square border-bottom" onClick={() => handleClick(7)}>
            {board[7]}
          </button>
          <button className="board__square" onClick={() => handleClick(8)}>
            {board[8]}
          </button>
        </div>
        <button className="board__restart" onClick={() => handleRestart()}>
          Restart
        </button>
      </div>
    </div>
  );
}

export default TicTacToe;
