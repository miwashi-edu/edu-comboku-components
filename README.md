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
cp ./src/components/Gomoku/Gomoku.css ./src/components/Board/board.css
cp ./src/components/Gomoku/Gomoku.js ./src/components/Board/index.js
cp ./src/stories/Gomoku.stories.js ./src/stories/Board.stories.js

echo "" >> ./src/index.js
echo "import {Board} from './components/Board';" >> ./src/index.js
echo "export default Board;" >> ./src/index.js

# För GitBash installera sed med choco install sed
# https://community.chocolatey.org/packages?q=sed

sed -i 's/Gomoku/Board/g' ./src/components/Board/Board.jsx
sed -i 's/Gomoku/Board/g' ./src/components/Board/index.js
sed -i 's/Gomoku/Board/g' ./src/stories/Board.stories.js
sed -i 's/Board\/Board/Gomoku\/Board/g' ./src/stories/Board.stories.js

echo "import {Gomoku} from './components/Gomoku';" > index.js
echo "import {Board} from './components/Board';" >> index.js
echo "" >> index.js
echo "export  {Gomoku, Board};"  >> index.js

npm run storybook
```

## Installera image plugin

```bash
npm install @rollup/plugin-image --save-dev
```

### Redigera rollup.config.js

> Den ska importera image plugin, sedan ska den ingå i plugins.

```js
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import image from '@rollup/plugin-image';
import pkg from './package.json' assert { type: "json" };

export default {
    input:'src/index.js',
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'es', exports: 'named'},
    ],
    plugins: [
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            presets: ['@babel/preset-env','@babel/preset-react']
          }),
        resolve({
            extensions: ['.js', '.jsx'],
            dedupe: ['prop-types']
          }),
        commonjs(),
        terser(),
        image()
    ],
    external: Object.keys(pkg.peerDependencies)
  };
```



