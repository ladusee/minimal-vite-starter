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

Everything will be in the `dist` folder.

### Config restrictions

Currently MPA (Multi Page App) requires to have root folders as routes,
e.g. `./about` will be available at `http://localhost:PORT/about`.

## Docs

https://vite.dev/guide/build.html#multi-page-app

## Project structure: current & desired

### Current structure

/src - source code
/about - about page
/public - static files
/dist - build output

### Desired structure

/src
/src/pages
/src/pages/about
/src/css/main.css
/src/css/components/button.css

## TODO

- [ ] Add support for custom routes (**high priority**)
      (e.g. `/about` -> `./src/pages/about`)

- [ ] Add support for non-manual routes (**optional**)
      (e.g. without adding `input` to `rollupOptions`)
