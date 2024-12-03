const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const path = require('node:path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    path.join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    path.join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        lightYellow: '#f5edd6',
        lighterYellow: '#faf6eb',
        lightGrey: '#d5dce3',
        keaGreen: '#8cd86b',
        lighterGreen: '#8cd86b',
        lightGreen: '#4da73f',
      },
    },
    fontFamily: {
      mainFont: ['Darker Grotesque', 'sans-serif'],
    },
  },
  plugins: [],
};
