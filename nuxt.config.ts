import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@nuxtjs/pwa'],
  pwa: {
    meta: {
      mobileApp: true,
      mobileAppIOS: true,
      appleStatusBarStyle: 'black',
    },
    manifest: {
      lang: 'ja',
      name: 'Nuxt3 pwa',
      shortName: 'nuxt pwa',
      background_color: '#fff'
    }
  }
})
