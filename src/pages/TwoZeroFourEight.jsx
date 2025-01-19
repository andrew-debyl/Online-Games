import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../styles/TwoZeroFourEight.css";

function TwoZeroFourEight() {
  const [squares, setSquares] = useState(new Array(16).fill(null));

  function generate() {
    const emptySquares = squares
      .map((square, index) => (square === null ? index : -1))
      .filter((index) => index !== -1);

    if (emptySquares.length > 0) {
      const randomIndex =
        emptySquares[Math.floor(Math.random() * emptySquares.length)];

      setSquares((prevSquares) => {
        const newArray = [...prevSquares];
        newArray[randomIndex] = 2;
        return newArray;
      });
    }
  }

  function moveRight() {

  }

  useEffect(() => {
    generate();
  }, []);

  useEffect(() => {
    if (squares.filter((square) => square === 2).length === 1) {
      generate();
    }
  }, [squares]);

  return (
    <div>
      <Header pageName={"2048"} />
      <div className="twozerofoureight">
        <div className="two__container">
          <div className="two__info">
            <h1 className="two__game-title">2048</h1>
            <div className="two__score-container">
              <p className="two__score-title">score:</p>
              <h2 className="two__score">0</h2>
            </div>
          </div>
          <p id="two__results">
            Join the numbers and get to the <b>2048</b> tile!
          </p>
          <div className="two__grid">
            {squares.map((square, index) => (
              <div key={index} className="two__square">
                {square}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwoZeroFourEight;
