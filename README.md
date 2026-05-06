# Fiable Frontend Assessment

A React application for visualizing object placement on a 5x5 grid. The object is placed from a string in the format `x,y DIRECTION`, such as `1,1 NORTH`.

## Tech stack

- [React](https://react.dev/)
- [Material UI](https://mui.com/)
- [Storybook](https://storybook.js.org/)
- [Vite](https://vite.dev/)

## Requirements covered

- Renders a fixed 5x5 grid using Material UI table components.
- Treats the bottom-left cell as `0,0` south-west.
- Accepts a placement string prop in the format `x,y DIRECTION`.
- Validates coordinates from `0` to `4` and directions `NORTH`, `EAST`, `SOUTH`, or `WEST`.
- Shows validation errors gracefully for invalid input.
- Uses a rotated Material UI navigation icon to indicate direction.
- Includes Storybook stories for valid placements, boundaries, and invalid input.

## Getting started

Install dependencies:

```bash
npm install
```

Run the app:

```bash
npm run dev
```

Run Storybook:

```bash
npm run storybook
```

Build:

```bash
npm run build
```

Build Storybook:

```bash
npm run build-storybook
```
