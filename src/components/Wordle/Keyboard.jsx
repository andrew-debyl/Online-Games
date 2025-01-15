import React, { useCallback, useContext, useEffect } from "react";
import { AppContext } from "../../pages/Wordle";
import Key from "./Key";

function Keyboard() {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const { onSelectLetter, onDelete, onEnter, disabledLetters } = useContext(AppContext);

  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter") {
      onEnter();
    } else if (event.key === "Backspace") {
      onDelete();
    } else {
      keys1.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
      keys2.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
      keys3.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="wordle__keyboard" onKeyDown={handleKeyboard}>
      <div className="wordle__line1">
        {keys1.map((key, index) => {
          return <Key key={index} keyVal={key} disabled={disabledLetters.includes(key)}/>;
        })}
      </div>
      <div className="wordle__line2">
        {keys2.map((key, index) => {
          return <Key key={index} keyVal={key} disabled={disabledLetters.includes(key)}/>;
        })}
      </div>
      <div className="wordle__line3">
        <Key keyVal={"ENTER"} bigKey={true} />
        {keys3.map((key, index) => {
          return <Key key={index} keyVal={key} disabled={disabledLetters.includes(key)}/>;
        })}
        <Key keyVal={"DELETE"} bigKey={true} />
      </div>
    </div>
  );
}

export default Keyboard;
