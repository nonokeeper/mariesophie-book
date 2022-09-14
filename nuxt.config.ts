import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    public: {
      //baseURL: 'http://localhost:1338'
      baseURL: 'https://4fb1-92-88-6-192.eu.ngrok.io'
    }
  },

  /*
  modules: ['nuxt-graphql-client'],
  
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
    transpile: [
      '@apollo/client',
      'ts-invariant/process',
    ],
    
  },
  */
  css: [
    "~/assets/css/tailwind.css"
  ],
  components: true,
  static: {
    prefix: false
  }
})
