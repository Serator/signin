const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['Lato', 'sans-serif']
      },
    },
  },
  plugins: [
    plugin(({addUtilities}) => addUtilities({'.span-full': {gridArea: '1/1/-1/-1'}}, ['responsive'])),
  ],
}
