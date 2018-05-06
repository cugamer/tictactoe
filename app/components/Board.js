import React from "react";
import ReactDOM from "react-dom";
import createReactClass from "create-react-class";
import css from './Board.css';
import Square from './Square.js';

let squares = [];
for(let i = 0; i < 9; i++) {
  squares.push(<Square />)
}

let Board = createReactClass({
  render: function() {
    return (
      <div id="board">
        {squares}
      </div>
    )
  }
});

export default Board;
