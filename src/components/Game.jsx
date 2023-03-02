import React from "react";
import Board from "./Board"

class Game extends React.Component {
  render() {
    return (
      <div className="wrapper">
      <div className="title">
        <h1>TIC-TAC-TOE!</h1>
        <h2>Built in React</h2>
      </div>
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
      </div>
    );
  }
}

export default Game;