# edu-gomoku-components

> Vi lägger till en dummy komponent som vi kan använda för att testa.
> Komponenten läser in hårdkodad json och gör inget nätverksanrop.

```bash
mkdir ./src/components/GomokuTest
cp ./src/components/Gomoku/Gomoku.jsx ./src/components/GomokuTest/GomokuTest.jsx
cp ./src/components/Gomoku/gomoku.css ./src/components/GomokuTest/GomokuTest.css
cp ./src/components/Gomoku/index.js ./src/components/GomokuTest/index.js
cp ./src/stories/Gomoku.stories.js ./src/stories/GomokuTest.stories.js

echo "" >> ./src/index.js
echo "import {GomokuTest} from './components/GomokuTest';" >> ./src/index.js
echo "export default GomokuTest;" >> ./src/index.js

# För GitBash installera sed med "choco install sed"
# https://community.chocolatey.org/packages?q=sed

sed -i '' 's/Gomoku/GomokuTest/g' ./src/components/GomokuTest/GomokuTest.jsx
sed -i '' 's/gomoku/GomokuTest/g' ./src/components/GomokuTest/GomokuTest.jsx
sed -i '' 's/Gomoku/GomokuTest/g' ./src/components/GomokuTest/index.js
sed -i '' 's/Gomoku/GomokuTest/g' ./src/stories/GomokuTest.stories.js
sed -i '' 's/Board\/GomokuTest/Gomoku\/GomokuTest/g' ./src/stories/GomokuTest.stories.js

npm run storybook
```
