// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    'nuxt-icon',
  ],

  googleFonts: {
    families: {
      'Roboto': true,
      'Inter': true,
      'Josefin+Sans': true,
      'Lato': true,

    },
  },
})
