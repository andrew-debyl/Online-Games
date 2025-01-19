import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hangman from "./pages/Hangman";
import Matching from "./pages/Matching";
import Snake from "./pages/Snake";
import TicTacToe from "./pages/TicTacToe";
import Wordle from "./pages/Wordle";
import TwoZeroFourEight from "./pages/TwoZeroFourEight";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hangman" element={<Hangman />} />
          <Route path="/matching" element={<Matching />} />
          <Route path="/snake" element={<Snake />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
          <Route path="/wordle" element={<Wordle />} />
          <Route path="/2048" element={<TwoZeroFourEight />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
