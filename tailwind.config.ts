import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'Staatliches'],
        headers: ['Staatliches'],
      },
      colors: {
        void: { DEFAULT: '#0E0B16', 50: '#B4A8D4', 100: '#A89BCD', 200: '#917FBF', 300: '#7964B2', 400: '#654F9E', 500: '#534183', 600: '#423468', 700: '#31264C', 800: '#1F1931', 900: '#0E0B16', 950: '#020203' },
        fuschia: { DEFAULT: '#A239CA', 50: '#E6CAF1', 100: '#DEBAEC', 200: '#CF9AE4', 300: '#C079DB', 400: '#B159D3', 500: '#A239CA', 600: '#802BA0', 700: '#5C1F74', 800: '#391348', 900: '#16071B', 950: '#040105' },
        jevel: { DEFAULT: '#4717F6', 50: '#D3C8FD', 100: '#C4B4FC', 200: '#A48DFB', 300: '#8566F9', 400: '#663EF8', 500: '#4717F6', 600: '#3208CD', 700: '#250697', 800: '#180461', 900: '#0B022B', 950: '#040110' },
        stark: { DEFAULT: '#E7DFDD', 50: '#FFFFFF', 100: '#FFFFFF', 200: '#FFFFFF', 300: '#FFFFFF', 400: '#F8F6F5', 500: '#E7DFDD', 600: '#D0C0BC', 700: '#B9A19B', 800: '#A1827A', 900: '#85665E', 950: '#755953' },
      },
    },
  },
}
