/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/*.{vue,js}',
    './src/components/*.{vue,js}',
    './src/components/**/*.{vue,js}',
    './src/components/**/**/*.{vue,js}',
    './src/components/**/**/**/*.{vue,js}',
    './src/pages/*.{vue,js}',
    './src/pages/**/*.{vue,js}',
    './src/pages/**/**/*.{vue,js}',
    './src/pages/**/**/**/*.{vue,js}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

