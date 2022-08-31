/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}'
  ],
  variants: {
    extend: {},
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
