import React, { useContext } from "react";
import { AppContext } from "../../pages/Wordle";

function Key({ keyVal, bigKey, disabled }) {
  const { onSelectLetter, onDelete, onEnter } = useContext(AppContext);

  const selectLetter = () => {
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };
  return (
    <div
      className="wordle__key"
      id={bigKey ? "wordle__big" : disabled ? "wordle__disabled" : undefined}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
}

export default Key;
