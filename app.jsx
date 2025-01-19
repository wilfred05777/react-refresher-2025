import React from "react";

const Square = ({ value, onSquareClick }) => {
   return (
      <button className='square' onClick={onSquareClick}>
         {value}
      </button>
   );
};

export const app = () => {
   return (
      <div>
         <h1>Hello World</h1>
      </div>
   );
};
