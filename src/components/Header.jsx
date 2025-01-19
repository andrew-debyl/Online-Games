import React, { useState } from "react";
import myLogo from "../assets/tab-logo.png";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header({ pageName }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`header-${pageName}`}>
      <div className={`header-wrapper-${pageName}`}>
        <div>
          <Link to="/">
            <img
              src={myLogo}
              alt="my personal logo"
              className={`header-logo-${pageName}`}
            ></img>
          </Link>
        </div>
        <div className="menu-icon" onClick={() => setMenuOpen(true)}>
          &#9776;
        </div>
        <div
          className={`menu-icon-2 ${menuOpen && "menu-icon-2-open"}`}
          onClick={() => setMenuOpen(false)}
        >
          &#10005;
        </div>
        <div className={`nav ${menuOpen && "open"}`}>
          <ul className={`header-links-${pageName}`}>
            <li className={`header-link-${pageName}`}>
              <Link
                to="/ticTacToe"
                className={`link__hover-effect-${pageName}`}
              >
                TicTacToe
              </Link>
            </li>
            <li className={`header-link-${pageName}`}>
              <Link to="/matching" className={`link__hover-effect-${pageName}`}>
                Matching
              </Link>
            </li>
            <li className={`header-link-${pageName}`}>
              <Link to="/snake" className={`link__hover-effect-${pageName}`}>
                Snake
              </Link>
            </li>
            <li className={`header-link-${pageName}`}>
              <Link to="/wordle" className={`link__hover-effect-${pageName}`}>
                Wordle
              </Link>
            </li>
            {/*<li className={`header-link-${pageName}`}>
              <Link to="/hangman" className={`link__hover-effect-${pageName}`}>
                Hangman
              </Link>
            </li>
            <li className={`header-link-${pageName}`}>
              <Link to="/2048" className={`link__hover-effect-${pageName}`}>
                2048
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
