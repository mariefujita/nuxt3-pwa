import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@nuxtjs/pwa'],
  pwa: {
    icon: {
      sorce: '/public/icon.png'
    },
    meta: {
      mobileApp: true,
      mobileAppIOS: true,
      appleStatusBarStyle: 'black',
    },
    manifest: {
      lang: 'ja',
      name: 'Nuxt3 pwa',
      display: 'standalone',
      background_color: '#fff',
      scope: '/',
      start_url: '/',
      icons: [
        {
          src: '/public/icon.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    }
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
      // https://github.com/nuxt/framework/issues/4916
      'window.global': {}, // ← yarn dev するときはコメントアウトを外す
    },
    resolve: {
      alias: {
        './runtimeConfig': './runtimeConfig.browser',
      },
    },
  }
})
