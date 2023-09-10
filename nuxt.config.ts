// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 3333,
  },

  css: [
    '~/public/assets/css/main.css',
  ],
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    'nuxt-icon',
    '@pinia/nuxt',
    '@formkit/auto-animate/nuxt',
  ],

  // Temporary solution for problem with pinia
  alias: {
    pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
  },

  googleFonts: {
    families: {
      // 'Roboto': true,
      // 'Inter': true,
      // 'Josefin+Sans': true,
      Lato: true,
      Staatliches: true,
    },
  },

})
