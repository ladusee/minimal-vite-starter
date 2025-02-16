# Minimal FE Setup

## Config

### Install dependencies

```bash
npm install
```

### Run dev server

```bash
npm run dev
```

### Build

```bash
npm run build
```

Everything will be built into the `dist` folder.

## Docs

https://vite.dev/guide/build.html#multi-page-app

## Project structure: current & desired

### Current structure

/src - source code
/public - static files
/dist - build output

### Desired structure (future roadmap)

/src
/src/pages
/src/pages/about
/src/css/main.css
/src/css/components/button.css

## TODO

- [x] Move routes from the project root to the `src` directory

- [ ] Add support for custom routes (**low priority**)
      (e.g. `/about` -> `./src/pages/about`)

- [ ] Add support for non-manual routes (**optional**)
      (e.g. without adding `input` to `rollupOptions`)
