import React from 'react';
import GridSquare from './GridSquare';
import './App.css';

const GridBoard = ({board}) => {
  return (
    <div>
      gridboard
      {
        board.map((row) => {
          return (
            <div
            // className='grid-square'
            >
              {
                row.map((square) => {
                  return (
                    <GridSquare
                      square={square}
                    />
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default GridBoard;
