import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@kevinmarrec/nuxt-pwa'],
  pwa: {
    manifest: {
      lang: 'ja',
      name: "Nuxt with PWA",
      short_name: "PWA/Nuxt",
      display: 'standalone',
      theme_color: '#F11010'
    },
    workbox: {
      enabled: true
    }
  }
})
