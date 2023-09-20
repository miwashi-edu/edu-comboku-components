# edu-gomoku-components

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
```

### Edit ./storybook/main

> We moved our stories, so now we need to tell storybook that stories are in ./src/stories not ./stories

```bash
vi ./storybook/main
```

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

### Edit imports for dependent ./src/components/Header/Header.jsx

```bash
vi ./src/components/Header/Header.jsx
```

```js
import { Button } from './Button';
```
**becomes**
```js
import Button from '../Button/Button';
```

### Edit ./src/components/Page/Page.jsx

```bash
vi ./src/components/Header/Page.jsx
```

```js
import { Header } from './Header';
```
**becomes**
```js
import Header from '../Header/Header';
```

### Edit Button.jsx/Header.jsx/Page.jsx

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
curl -L https://raw.githubusercontent.com/miwashi-edu/edu-gomoku-components/main/resources/Gomoku.jsx -o ./src/components/Gomoku/Gomoku.jsx
curl -L https://raw.githubusercontent.com/miwashi-edu/edu-gomoku-components/main/resources/Gomoku.stories.js -o ./src/stories/Gomoku.stories.js
curl -L https://raw.githubusercontent.com/miwashi-edu/edu-gomoku-components/main/resources/src_gomoku_index.js -o ./src/components/Gomoku/index.js
```

## Restart storybook

```bash
npm run storybook
```
