# edu-gomoku-components

> Vi lägger till testdata och fortsätter separation of concern.

## ./src/components/Gomoku.jsx

```js
import React,{ useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Board from '../Board/Board';
import './gomoku.css';

const Gomoku = ({ url, apiKey }) => {
    const [game, setGame] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const apiUrl = url;
    
            const response = await fetch(apiUrl, {
              headers: {
                Authorization: `Bearer ${apiKey}`,
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            setGame(data);
            console.log(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        const intervalId = setInterval(fetchData, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [url, apiKey]);

  return (
    <div>
      {game && <Board cols={game.cols} rows={game.rows} />}
    </div>
  );

};

Gomoku.propTypes = {
    url: PropTypes.string,
    apiKey: PropTypes.string,
};

Gomoku.defaultProps = {
    url: "",
    apiKey: "",
};

export default Gomoku;
```

## src/stories/Gomoku.stories.js

```js
import {Gomoku} from "../components/Gomoku";

export default {
    title: 'Gomoku/Gomoku',
    component: Gomoku,
    parameters: {layout: 'centered',},
    tags: ['autodocs'],
    argTypes: {

    },
};

export const Normal = {
    args: {
        url: "http://localhost:3001/api/game/games/015cdc04-4d22-46f7-8d8e-f1879bb9bf1b",
        apiKey: "",
    },
};
```

