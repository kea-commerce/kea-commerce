const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        lightYellow: '#f5edd6',
      },
    },
    screens: {
      mobile: '320px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1200px',
    },
  },
  plugins: [],
};
