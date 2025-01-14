import React from 'react'
import { Link } from 'react-router-dom'
import Header from "../components/Header"

function Home() {
  return (
    <div>
      <Header pageName={"home"}/>
      <Link to="/">Home</Link>
      <Link to="/jeopardy">Jeopardy</Link>
      <Link to="/hangman">Hangman</Link>
      <Link to="/matching">Matching</Link>
      <Link to="/snake">Snake</Link>
      <Link to="/tictactoe">TicTacToe</Link>
      <Link to="/wordle">Wordle</Link>
    </div>
  )
}

export default Home