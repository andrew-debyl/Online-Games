import React from "react";
import Letter from "./Letter";

function Board() {
  return (
    <div className="wordle__board">
      <div className="wordle__row">
        <Letter letterPos={0} attempVal={0} />
        <Letter letterPos={1} attempVal={0} />
        <Letter letterPos={2} attempVal={0} />
        <Letter letterPos={3} attempVal={0} />
        <Letter letterPos={4} attempVal={0} />
      </div>
      <div className="wordle__row">
        <Letter letterPos={0} attempVal={1} />
        <Letter letterPos={1} attempVal={1} />
        <Letter letterPos={2} attempVal={1} />
        <Letter letterPos={3} attempVal={1} />
        <Letter letterPos={4} attempVal={1} />
      </div>
      <div className="wordle__row">
        <Letter letterPos={0} attempVal={2} />
        <Letter letterPos={1} attempVal={2} />
        <Letter letterPos={2} attempVal={2} />
        <Letter letterPos={3} attempVal={2} />
        <Letter letterPos={4} attempVal={2} />
      </div>
      <div className="wordle__row">
        <Letter letterPos={0} attempVal={3} />
        <Letter letterPos={1} attempVal={3} />
        <Letter letterPos={2} attempVal={3} />
        <Letter letterPos={3} attempVal={3} />
        <Letter letterPos={4} attempVal={3} />
      </div>
      <div className="wordle__row">
        <Letter letterPos={0} attempVal={4} />
        <Letter letterPos={1} attempVal={4} />
        <Letter letterPos={2} attempVal={4} />
        <Letter letterPos={3} attempVal={4} />
        <Letter letterPos={4} attempVal={4} />
      </div>
      <div className="wordle__row">
        <Letter letterPos={0} attempVal={5} />
        <Letter letterPos={1} attempVal={5} />
        <Letter letterPos={2} attempVal={5} />
        <Letter letterPos={3} attempVal={5} />
        <Letter letterPos={4} attempVal={5} />
      </div>
    </div>
  );
}

export default Board;
