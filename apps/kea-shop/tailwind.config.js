const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const path = require('node:path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    path.join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
