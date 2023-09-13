import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'Staatliches'],
        headers: ['Staatliches'],
      },
    },
  },
}
