import React from "react";
import Square from "./Square"
import calculateWinner from "./helper"

class Board extends React.Component {
  // collect data from multiple children
  // declare the shared state in their parent component
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      // add the 'O's turn
      xIsNext: true,
    };
  }
  // new click handler
  handleClick(i) {
    // create a copy of the squares array to modify instead of modifying the existing array
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    // squares[i] = 'X';
    // add the 'O' turn
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    // shows value of each square
    // return <Square value={i} />;
    // instruct each individual Square about its current value ('X', 'O', or null
    // return <Square value={this.state.squares[i]} />;
    // create a way for the Square to update the Board’s state
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    // const status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;