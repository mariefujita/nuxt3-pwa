import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  buildModules: ['@nuxtjs/pwa'],
  pwa: {
    icon: {
      source: '/icon.png',
      fileName: 'icon.png',
      sizes: [64, 120, 144, 152, 192, 384, 512]
    },
    meta: {
      mobileAppIOS: true,
      author: 'Me',
      lang: 'ja'
    },
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
