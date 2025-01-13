import React from "react";
import myLogo from "../assets/tab-logo.png";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-logo__wrapper">
        <Link to="/">
          <img src={myLogo} alt="" className="header-logo"></img>
        </Link>
      </div>
      <div className="header-links__wrapper">
        <ul className="header-links">
          <li className="header-link">
            <Link to="/ticTacToe" className="link__hover-effect">
              TicTacToe
            </Link>
          </li>
          <li className="header-link">
            <Link to="/jeopardy" className="link__hover-effect">
              Jeopardy
            </Link>
          </li>
          <li className="header-link">
            <Link to="/matching" className="link__hover-effect">
              Matching
            </Link>
          </li>
          <li className="header-link">
            <Link to="/snake" className="link__hover-effect">
              Snake
            </Link>
          </li>
          <li className="header-link">
            <Link to="/wordle" className="link__hover-effect">
              Wordle
            </Link>
          </li>
          <li className="header-link">
            <Link to="/hangman" className="link__hover-effect">
              Hangman
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
