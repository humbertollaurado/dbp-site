/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    fontSize: {
      'sm': [ '1.25rem', {
        lineHeight: '2rem',
        letterSpacing: '-0.06em',
        fontWeight: '400',
      }],
      '2xl': ['1.5rem', {
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      }],
      '3xl': ['1.875rem', {
        lineHeight: '2.25rem',
        letterSpacing: '-0.02em',
        fontWeight: '700',
      }],
      '7.5xl':['5.5rem', {
        lineHeight: '6rem',
        letterSpacing: '0em',
        fontWeight: '600',
      }],
    extend: {},
  },
  plugins: [],
}
}
