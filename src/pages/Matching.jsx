import React, { useRef, useState } from "react";
import Header from "../components/Header";
import "../styles/Matching.css";
import shuffle from "../components/Matching/ShuffleCards";

const items = [1, 2, 3, 4, 5, 6];
const allItems = shuffle([...items, ...items]);
const defaultState = { index: null, value: null };

function Matching() {
  const [firstCard, setFirstCard] = useState(defaultState);
  const [secondCard, setSecondCard] = useState(defaultState);
  const [remainingCards, setRemainingCards] = useState(items);
  const [moves, setMoves] = useState(0);

  const timer = useRef();

  const handleClick = (index, value) => {
    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      setFirstCard(defaultState);
      setSecondCard(defaultState);
    }, 1000);

    if (
      firstCard.index === null ||
      (firstCard.index !== null && secondCard.index !== null)
    ) {
      setSecondCard(defaultState);
      setFirstCard({ index, value });
      setMoves((moves) => moves + 1);
    } else if (secondCard.index === null && firstCard.index !== index) {
      setSecondCard({ index, value });
      setMoves((moves) => moves + 1);

      if (firstCard.value === value) {
        setRemainingCards(remainingCards.filter((card) => card !== value));
      }
    }
  };

  return (
    <>
      <Header pageName={"matching"} />
      <div className="matching">
        <h1 className="matching__title">Matching</h1>
        <div className="matching__remaining">
          <div className="matching__remaining-text">
            {remainingCards.length > 0 ? "Remaining cards: " : "Victory!"}
          </div>
          <div className="matching__remaining-imgs">
            {remainingCards.map((card, index) => {
              return (
                <img
                  key={index}
                  alt={`cat ${index}`}
                  src={`https://robohash.org/${card}?set=set1&&size=80x80`}
                />
              );
            })}
          </div>
        </div>
        <div className="matching__wrapper">
          {allItems.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => handleClick(index, item)}
                className={`matching__card ${
                  (firstCard.index === index ||
                    secondCard.index === index ||
                    !remainingCards.includes(item)) &&
                  "flipped"
                }`}
              >
                <div className="matching__backside"></div>
                <img
                  alt={`cat ${index}`}
                  src={`https://robohash.org/${item}?set=set1&&size=120x120`}
                  className="matching__card-imgs"
                />
              </div>
            );
          })}
        </div>
        <div className="matching__moves-used">Moves used: {moves}</div>
      </div>
    </>
  );
}

export default Matching;
