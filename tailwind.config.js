const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    debugScreens: {
      ignore: ['dark'],
      position: ['bottom', 'right'],
      style: {},
      prefix: 'screen: ',
    },
    extend: {
      fontFamily: {
        'sans': ['Scandia', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}
