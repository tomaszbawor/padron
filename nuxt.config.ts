// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 3333,
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    'nuxt-icon',
    '@invictus.codes/nuxt-vuetify',
  ],

  googleFonts: {
    families: {
      'Roboto': true,
      'Inter': true,
      'Josefin+Sans': true,
      'Lato': true,

    },
  },

  vuetify: {
    moduleOptions: {
      treeshaking: true,
    },
  },

})
