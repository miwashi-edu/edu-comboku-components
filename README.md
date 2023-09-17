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
mv ./stories/Button.jsx ./src/Button/
mv ./stories/putton.css ./src/Page/
touch ./src/Page/index.js
mv ./stories/Header.jsx ./src/Header/
mv ./stories/header.css ./src/Header/
touch ./src/Header/index.js
mv ./stories/Page.jsx ./src/Page/
mv ./stories/page.css ./src/Page/
touch ./src/Page/index.js
mv ./stories ./src/stories
```js
export {TextButton} from './components/TextButton'

//for bundling
export {default as TextButton} from "./TextButton" 

//for storybook
export {default} from "./TextButton"
```

