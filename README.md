# edu-gomoku-components

## Create React Project

> Storybook needs to identify what type of project is intended.
> We create a react application before we run storybook init.

```bash
cd ~
cd ws
rm -rf gomoku-components
mkdir gomoku-components
cd gomoku-components
npx create-react-app .
npx storybook init
```

## Create project with npm
> We install react, and reac-dom, that is enought to identify the project and
> as we don't need all files from a react application that suffise.
> We will however need to set bundler to webpack (not vite).

```bash
cd ~
cd ws
rm -rf gomoku-components
mkdir gomoku-components
cd gomoku-components
mkdir public
npm init -y
npm install react react-dom
npx storybook init
```

## Reorganize project to a more common structure.

```bash
cd ~
cd ws
cd gomoku-components
mkdir -p ./src/components
mkdir ./src/components/Button
mkdir ./src/components/Header
mkdir ./src/components/Page
mv ./stories/Button.jsx ./src/components/Button/
mv ./stories/button.css ./src/components/Button/
touch ./src/components/Button/index.js
mv ./stories/Header.jsx ./src/components/Header/
mv ./stories/header.css ./src/components/Header/
touch ./src/components/Header/index.js
mv ./stories/Page.jsx ./src/components/Page/
mv ./stories/page.css ./src/components/Page/
touch ./src/components/Page/index.js
mv ./stories ./src/stories
```js
export {TextButton} from './components/TextButton'

//for bundling
export {default as TextButton} from "./TextButton" 

//for storybook
export {default} from "./TextButton"
```

### Edit ./storybook/main

> We moved our stories, so now we need to tell storybook that stories are in ./src/stories not ./stories

```js
stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ]
```
**becomes**
```js
stories: [
    "../src/stories/**/*.mdx",
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ]
```
**restart storybook**
```bash
ctrl-c
npm run storybook
```

### Edit imports for dependent ./src/components/Header/Header.jsx

```js
import { Button } from './Button';
```
**becomes**
```js
import Button from '../Button/Button';
```

### Edit imports for dependent ./src/components/Page/Page.jsx

```js
import { Header } from './Header';
```
**becomes**
```js
import Header from '../Header/Header';
```

### Edit exports for dependent Button.jsx/Header.jsx/Page.jsx

```js
const export Page ...
```
**becomes**
```js
const Page ...
...
export default Page;
```

# Crete Gomoku

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

## ./src/components/Gomoku.jsx

```js
import React,{ useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './gomoku.css';

const Gomoku = ({ width, height, tileWidth, ...props }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = width * tileWidth;
        canvas.height = height * tileWidth;

        ctx.fillStyle = 'blue';
        ctx.fillRect(0, 0, width *tileWidth, height * tileWidth);
    }, [width, height]);

    return (
        <canvas ref={canvasRef}></canvas>
    );
};

Gomoku.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    tileWidth: PropTypes.number,
};

Gomoku.defaultProps = {
    width: 16,
    height: 16,
    tileWidth: 10,
};

export default Gomoku;
```

## ./src/components/gomoku.css

```js
```

## ./src/components/index.js

```js
//for bundling
export {default as Gomoku} from "./Gomoku"

//for storybook
export {default} from "./Gomoku"
```

## ./src/stories/Gomoku.stories.js

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
        width: 16,
        height: 16,
        tileWidth: 20,
    },
};
```


