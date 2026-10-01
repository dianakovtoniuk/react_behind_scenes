# React Behind The Scenes

A small learning project built with React and TypeScript that shows how React renders components, when it re-renders them and how to avoid unnecessary work. Every component writes a styled message to the browser console when it renders, so you can follow the render flow while using the app.

## Features

- Counter with increment and decrement buttons
- History of all counter changes, where each entry can be selected
- Form for setting a new initial value of the counter
- Check whether the initial value is a prime number
- Two counters on one page: one is reset when a new value is set, the other keeps its own state
- Color-coded console logs that show which components render and in what order

## Tech Stack

- React
- TypeScript
- Vite
- Plain CSS

## React Concepts Used

- How rendering and re-rendering work, including parent and child renders
- `memo` to skip renders when props have not changed
- `useCallback` to keep function props stable, so `memo` works for child components
- `useMemo` to avoid repeating an expensive calculation
- The `key` prop to reset a component and its state
- Batched state updates and functional updates, shown in the set counter handler
- Derived values calculated from state instead of storing them separately
- Stable ids as list keys instead of array indexes
- Typed props, state and shared types

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

1. Clone the repository with `git clone https://github.com/dianakovtoniuk/react_behind_the_scenes.git`
2. Go to the project folder with `cd react_behind_the_scenes`
3. Install dependencies with `npm install`
4. Start the development server with `npm run dev`

The app will be available at http://localhost:5173. Open the browser console to see the render logs.

## Available Scripts

- `npm run dev` starts the development server
- `npm run build` creates a production build in the `dist` folder
- `npm run preview` serves the production build locally

## Project Structure

- `public/` static files
- `src/`
  - `assets/` logo image
  - `components/`
    - `Header.tsx` page header
    - `Counter/`
      - `Counter.tsx` counter with change history and prime number check
      - `ConfigureCounter.tsx` form for setting a new initial value
      - `CounterOutput.tsx` current counter value
      - `CounterHistory.tsx` list of counter changes
    - `UI/`
      - `IconButton.tsx` button with an icon
      - `Icons/` plus and minus icons
  - `App.tsx` root component
  - `log.ts` helper for styled console logs
  - `types.ts` shared types
  - `main.tsx` application entry point
  - `index.css` global styles
- `index.html` HTML template

## Notes

This project is meant for learning, so some code is intentionally simple and the console is part of the experience. Setting a new value adds one extra step on top of it, which demonstrates how React batches state updates.
