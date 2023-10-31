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

npm pkg set scripts.build="npx rollup --bundleConfigAsCjs -c rollup.config.js"
```
## ./src/index.js

```bash
cat > ./src/index.js << EOF
import {Gomoku} from './components/Gomoku'; 
export default Gomoku;
EOF
```

## rollup.config.js

```bash
cat > rollup.config.js << EOF
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import pkg from './package.json' assert { type: "json" };

export default {
    input:'src/index.js',
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'es', exports: 'named'}
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
          terser()
    ],
    external: Object.keys(pkg.peerDependencies)
  };

EOF
```

## package.json

```bash
cat > package.json << EOF
{
  "name": "@wacoco/gomoku",
  "version": "1.0.5",
  "type": "module",
  "description": "",
  "main": "dist/index.cjs.js",
  "module": "dist/index.esm.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "build": "npx rollup --bundleConfigAsCjs -c rollup.config.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "react": ">=16.8.0",
    "react-dom": ">=16.8.0"
  },
  "devDependencies": {
    "@babel/core": "^7.22.20",
    "@babel/preset-env": "^7.22.20",
    "@babel/preset-react": "^7.22.15",
    "@rollup/plugin-babel": "^6.0.3",
    "@rollup/plugin-commonjs": "^25.0.4",
    "@rollup/plugin-node-resolve": "^15.2.1",
    "@rollup/plugin-terser": "^0.4.3",
    "@storybook/addon-essentials": "^7.4.2",
    "@storybook/addon-interactions": "^7.4.2",
    "@storybook/addon-links": "^7.4.2",
    "@storybook/addon-onboarding": "^1.0.8",
    "@storybook/blocks": "^7.4.2",
    "@storybook/react": "^7.4.2",
    "@storybook/react-webpack5": "^7.4.2",
    "@storybook/testing-library": "^0.2.1",
    "prop-types": "^15.8.1",
    "storybook": "^7.4.2"
  },
  "peerDependencies": {
    "react": ">=16.8.0",
    "react-dom": ">=16.8.0"
  }
}
EOF
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

