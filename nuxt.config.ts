import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/pwa'],
  pwa: {
    manifest: {
      lang: 'ja',
      name: 'Nuxt3 with PWA',
      shortName: 'nuxt3 pwa',
      background_color: '#fff'
    }
  }
})
