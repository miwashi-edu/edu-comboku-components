> Vi ska göra en separations of consern. Därför duplicerar vi Gomoku komponenten
> till en Board komponent. Vi lägger även till en image plugin till rollup för att få med
> bilder i vår komponent.

```bash
cd ~
cd ws
cd gomoku-components
```

## Kopiera Gomoku till Board

```bash
mkdir ./src/components/Board
cp ./src/components/Gomoku/Gomoku.jsx ./src/components/Board/Board.jsx
cp ./src/components/Gomoku/gomoku.css ./src/components/Board/board.css
cp ./src/components/Gomoku/index.js ./src/components/Board/index.js
cp ./src/stories/Gomoku.stories.js ./src/stories/Board.stories.js

echo "" >> ./src/index.js
echo "import {Board} from './components/Board';" >> ./src/index.js
echo "export default Board;" >> ./src/index.js

# För GitBash installera sed med choco install sed
# https://community.chocolatey.org/packages?q=sed

sed -i '' 's/Gomoku/Board/g' ./src/components/Board/Board.jsx
sed -i '' 's/gomoku/board/g' ./src/components/Board/Board.jsx
sed -i '' 's/Gomoku/Board/g' ./src/components/Board/index.js
sed -i '' 's/Gomoku/Board/g' ./src/stories/Board.stories.js
sed -i '' 's/Board\/Board/Gomoku\/Board/g' ./src/stories/Board.stories.js

echo "import {Gomoku} from './components/Gomoku';" > ./src/index.js
echo "import {Board} from './components/Board';" >> ./src/index.js
echo "" >> ./src/index.js
echo "export  {Gomoku, Board};"  >> ./src/index.js

npm run storybook
```

## Installera image plugin

```bash
npm install @rollup/plugin-image --save-dev
```

### Redigera rollup.config.js

> Den ska importera @rollup/plugin-image plugin, sedan ska den ingå i plugins.

```js
...
import image from '@rollup/plugin-image';
...

export default {
    input:'src/index.js',
    output: [...],
    plugins: [
...,
        image()
    ],
  };
```

## Lägg till bilder

```bash
mkdir ./src/images
curl https://raw.githubusercontent.com/miwashi-edu/edu-gomoku-components/main/resources/black.png -o ./src/images/black.png
curl https://raw.githubusercontent.com/miwashi-edu/edu-gomoku-components/main/resources/white.png -o ./src/images/white.png

```



