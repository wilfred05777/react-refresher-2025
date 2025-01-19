import React, { useState } from "react";

// Board component
export default function Board() {
   // taking turns between X and O
   const [xIsNext, setXIsNext] = useState(true);

   // Initialize the state of the board
   const [squares, setSquares] = useState(Array(9).fill(null));

   // Handle the click event on a square
   /**
   * 
   * @param {
   * Note
The DOM <button> element’s onClick attribute has a special meaning to React because it is a built-in component. For custom components like Square, the naming is up to you. You could give any name to the Square’s onSquareClick prop or Board’s handleClick function, and the code would work the same. In React, it’s conventional to use onSomething names for props which represent events and handleSomething for the function definitions which handle those events.} i 
   */
   function handleClick(i) {
      // If the square is already filled, you will return in the handleClick function early—before it tries to update the board state.
      if (squares[i]) {
         return;
      }

      const nextSquares = squares.slice();
      if (xIsNext) {
         nextSquares[i] = "X";
      } else {
         nextSquares[i] = "O";
      }
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
   }

   // Render the board
   return (
      <>
         <div className='board-row'>
            <Square value={squares[0]} onClickSquare={() => handleClick(0)} />
            <Square value={squares[1]} onClickSquare={() => handleClick(1)} />
            <Square value={squares[2]} onClickSquare={() => handleClick(2)} />
         </div>
         <div className='board-row'>
            <Square value={squares[3]} onClickSquare={() => handleClick(3)} />
            <Square value={squares[4]} onClickSquare={() => handleClick(4)} />
            <Square value={squares[5]} onClickSquare={() => handleClick(5)} />
         </div>
         <div className='board-row'>
            <Square value={squares[6]} onClickSquare={() => handleClick(6)} />
            <Square value={squares[7]} onClickSquare={() => handleClick(7)} />
            <Square value={squares[8]} onClickSquare={() => handleClick(8)} />
         </div>
      </>
   );
}

// Square component / child component
const Square = ({ value, onClickSquare }) => {
   return (
      <button className='square' onClick={onClickSquare}>
         {value}
      </button>
   );
};
