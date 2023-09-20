# edu-gomoku-components

> Vi förbereder publisering.

## Instructions

```bash
npm install --save-dev rollup

npm install --save-dev @rollup/plugin-babel
npm install --save-dev @babel/core
npm install --save-dev @babel/preset-env
npm install --save-dev @babel/preset-react

npm install --save-dev @rollup/plugin-commonjs
npm install --save-dev @rollup/plugin-node-resolve
npm install --save-dev @rollup/plugin-terser

curl -L https://raw.githubusercontent.com/miwashi-edu/edu-gomoku-components/main/resources/src_index.js -o ./src/index.js
curl -L https://raw.githubusercontent.com/miwashi-edu/edu-gomoku-components/main/resources/rollup.config.js -o rollup.config.js
curl -L https://raw.githubusercontent.com/miwashi-edu/edu-gomoku-components/main/resources/package.json -o package.json
```

## Build & Publish

```bash
npm version patch / minor / major

# Bundle
npx rollup -c rollup.config.js  --bundleConfigAsCjs

# Publish!
npm login
npm publish --access public
```

