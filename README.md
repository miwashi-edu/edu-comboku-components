# edu-gomoku-components

> Vi lägger till en Gomoku component och story

## Instruktioner

```bash
cd ~
cd ws
cd gomoku-components
mkdir ./src/components/Gomoku
touch ./src/components/Gomoku/Gomoku.jsx
touch ./src/components/Gomoku/gomoku.css
touch ./src/components/Gomoku/index.js
touch ./src/stories/Gomoku.stories.js
```

## ./src/components/Gomoku/Gomoku.jsx

```bash
cat > ./src/components/Gomoku/Gomoku.jsx << EOF
import React,{ useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './gomoku.css';

const Gomoku = ({ cols, rows, tileSize, ...props }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.cols = cols * tileSize;
        canvas.rows = rows * tileSize;

        ctx.fillStyle = 'blue';
        ctx.fillRect(0, 0, cols *tileSize, rows * tileSize);
    }, [cols, rows]);

    return (
            <canvas ref={canvasRef} width={cols * tileSize} height={rows * tileSize}></canvas>
        );

    );
};

Gomoku.propTypes = {
    cols: PropTypes.number,
    rows: PropTypes.number,
    tileSize: PropTypes.number,
};

Gomoku.defaultProps = {
    cols: 16,
    rows: 16,
    tileSize: 10,
};

export default Gomoku;
EOF
```

## ./src/components/Gomoku/index.js

```bash
cat > ./src/components/Gomoku/index.js << EOF
//for bundling
export {default as Gomoku} from "./Gomoku"

//for storybook
export {default} from "./Gomoku"

EOF
```

## ./src/stories/Gomoku.stories.js

```bash
cat > ./src/stories/Gomoku.stories.js << EOF
import React from 'react';
import {Gomoku} from "../components/Gomoku";

export default {
    title: 'Gomoku/Gomoku',
    component: Gomoku,
    parameters: {layout: 'centered',},
    argTypes: {
    },
};

const Template = (args) => <Gomoku {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    cols: 16,
    rows: 16,
    tileSize: 20,
};
EOF
```

