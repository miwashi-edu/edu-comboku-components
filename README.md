# edu-gomoku-components

> We reorganize the structure so that components are under .src/components as directories with index.js, Component.jsx and component.css.

## Instructions

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

curl -L https://raw.githubusercontent.com/miwashi-edu/edu-gomoku-components/main/resources/main.js -o ./storybook/main.js

curl -L https://raw.githubusercontent.com/miwashi-edu/edu-gomoku-components/main/resources/index_button.js -o ./src/components/Button/index.js
curl -L https://raw.githubusercontent.com/miwashi-edu/edu-gomoku-components/main/resources/index_header.js -o ./src/components/Header/index.js
curl -L https://raw.githubusercontent.com/miwashi-edu/edu-gomoku-components/main/resources/index_page.js -o ./src/components/Page/index.js

curl -L https://raw.githubusercontent.com/miwashi-edu/edu-gomoku-components/main/resources/Button.jsx -o ./src/components/Button/Button.jsx
curl -L https://raw.githubusercontent.com/miwashi-edu/edu-gomoku-components/main/resources/Header.jsx -o ./src/components/Header/Header.jsx
curl -L https://raw.githubusercontent.com/miwashi-edu/edu-gomoku-components/main/resources/Page.jsx -o ./src/components/Page/Page.jsx

curl -L https://raw.githubusercontent.com/miwashi-edu/edu-gomoku-components/main/resources/Button.stories.js -o ./src/stories/Button.stories.js
curl -L https://raw.githubusercontent.com/miwashi-edu/edu-gomoku-components/main/resources/Header.stories.js -o ./src/stories/Header.stories.js
curl -L https://raw.githubusercontent.com/miwashi-edu/edu-gomoku-components/main/resources/Page.stories.js -o ./src/stories/Page.stories.js

```

## Restart storybook

```bash
npm run storybook
```

## Explanations to edited files

### Edit ./storybook/main.js

> We moved our stories, so now we need to tell storybook that stories are in ./src/stories not ./stories

```bash
vi ./storybook/main.js
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

### Change exports for Button.jsx, Header.jsx and Page.jsx

**remove exports after const***

```js
const export Button ...
//or
const export Header ...
//or
const export Page ...
```
**add the exports to the end of the files**

```js
export default Page;
//or
export default Page;
//or
export default Page;
```
