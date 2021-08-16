import React, { FC, useState, useEffect } from 'react';
import GridBoard from './GridBoard';
import Anime, { anime } from 'react-anime';

let defaultBoard = [
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const App : FC = () => {
  const [board, setBoard] = useState(defaultBoard);
  const [dimensions, setDimensions] = useState();

  useEffect(() => {
    console.log('page loaded')
    makeBoard(40, 40, true);
  }, [])

  const makeBoard = (m, n, rand) => {
    if(!m) {
      m = 50;
    }
    if(!n) {
      n = 50;
    }

    let matrix = [];
    for(var i=0; i<m; i++) {
        matrix[i] = [];
        for(var j=0; j<n; j++) {
            matrix[i][j] = rand? randomBinary() : 0;
        }
    }
    setBoard(matrix);
  }

  const randomBinary = () => {
    return Math.round(Math.random());
  }

  return (
    <div>
      <Anime
        delay={(e, i) => i * 1000}
        scale={[.1, .9]}
        >
        <div>
        hello
        </div>
        <div>
        there
        </div>
        <div>
        friend
        </div>
      </Anime>
      <GridBoard
        board={board}
      />
    </div>
  )
  };

export default App;

