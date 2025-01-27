import React from "react";

const HEAD = <div className="hangman-head" />;

const BODY = <div className="hangman-body" />;

const RIGHT_ARM = <div className="hangman-right-arm" />;

const LEFT_ARM = <div className="hangman-left-arm" />;

const RIGHT_LEG = <div className="hangman-right-leg" />;

const LEFT_LEG = <div className="hangman-left-leg" />;

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

function HangmanDrawing({ numofGuess }) {
  return (
    <div className="hangman-drawing">
      {BODY_PARTS.slice(0, numofGuess)}
      <div className="hangman-drawing-down" />
      <div className="hangman-drawing-top" />
      <div className="hangman-drawing-middle" />
      <div className="hangman-drawing-bottom" />
    </div>
  );
}

export default HangmanDrawing;
