import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../styles/Home.css";
import tictactoe from "../assets/tictactoe.png";
import matching from "../assets/matching.png";
import snake from "../assets/snake.png";
import wordle from "../assets/wordle.png";

function Home() {
  return (
    <div>
      <Header pageName={"home"} />
      <div className="home">
        <div className="home__wrapper">
          <Link to="/tictactoe">
            <div className="home__game">
              <img src={tictactoe} alt="" className="home__game-img"></img>
            </div>
          </Link>
          <Link to="/matching">
            <div className="home__game">
              <img src={matching} alt="" className="home__game-img"></img>
            </div>
          </Link>
          <Link to="/snake">
            <div className="home__game">
              <img src={snake} alt="" className="home__game-img"></img>
            </div>
          </Link>
          <Link to="/wordle">
            <div className="home__game">
              <img src={wordle} alt="" className="home__game-img"></img>
            </div>
          </Link>
          {/* <Link to="/hangman">
            <div className="home__game">
              <img src={tictactoe} alt="" className="home__game-img"></img>
            </div>
          </Link>*/}
        </div>
      </div>
    </div>
  );
}

export default Home;
