import type { Config } from 'tailwindcss'
import * as flowbite from 'flowbite/plugin'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'Staatliches'],
        headers: ['Staatliches'],
      },
    },
  },
  content: [
    './node_modules/flowbite/**/*.{js,ts}',
  ],
  plugins: [{ handler: flowbite.handler }],
}
