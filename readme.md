# Advent of Code 2020 Solutions

[![Build Status](https://github.com/pizzafox/aoc-2020/workflows/CI/badge.svg)](https://github.com/pizzafox/aoc-2020/actions)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![codecov](https://codecov.io/gh/pizzafox/aoc-2020/branch/master/graph/badge.svg)](https://codecov.io/gh/pizzafox/aoc-2020)

My solutions for [Advent of Code](https://adventofcode.com/) 2020.

## Running locally

### Prequisites

This project uses [Node.js](https://nodejs.org) 15, or something similar, to run.

[Yarn](https://yarnpkg.com) is used to install dependencies, although you can use another package manager like [npm](https://www.npmjs.com) or [pnpm](https://pnpm.js.org).

```sh
yarn install
# or `npm install`
# or `pnpm install`
```

### Building

Run the `build` script to compile the TypeScript source and test files into the `tsc_output` folder.

```sh
yarn build
```

### Running every solution

You can solve every solution after building with the `solve` script.

```sh
yarn build
yarn solve
```

Input files are loaded in the `inputs` directory.

### Benchmarking

Benchmarks can be run after building with the `benchmark` script.

```sh
yarn build
yarn benchmark
```

### Testing

Unit tests are stored alongside solutions as `index.test.ts`.
You can run the tests with the `test` script after you build the project:

```sh
yarn build
yarn test
```

Or for watch mode:

```sh
yarn build --watch
```

and in another terminal:

```sh
yarn test --watch
```
