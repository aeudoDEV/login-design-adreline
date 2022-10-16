/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize:{
      md: 18,
      sm: 14,
      xs: 12,

      '2xl': 32,
      xl: 25,
      lg: 20,
    },
    colors: {
      transparent:'transparent',
      background:{
        pagina:'#180824',
        input: '#3E1D40',
        button: '#692D6F',
      },
      placecolor:'#A0A0A0',
      focus:{
        input:'#883690',
        hover:'#A538B0',
      },
      texto:{
        white: '#FFFFFF',
      },
      /* 'background':'#180824',
      'placeholder': '#A0A0A0',
      'white-text': '#FFFFFF',
      'background-input': '#3E1D40',
      'background-button': '#692D6F',
      'focus-input': '#883690',
      'hover-button': '#A538B0', */
    },
    extend: {
      fontFamily:{
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
