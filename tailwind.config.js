const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{html,md,liquid,erb,serb,rb}',
    './frontend/javascript/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        ochre: {
          300: '#ddd5a7',
          400: '#c5c399',
        },
        sequoia: {
          800: '#536a58',
        }
      },
      fontFamily: {
        'sans': ['Recursive', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
