import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@nuxtjs/pwa'],
  pwa: {
    icon: {
      source: '/icon.png',    // このファイルを元に各サイズ毎のアイコン画像を自動生成してくれる
      fileName: 'icon.png',
      sizes: [64, 120, 144, 152, 192, 384, 512],
      targetDir: 'icons',
      plugin: true,
    },
    manifest: {
      lang: 'ja',
      name: "Nuxt with PWA",
      short_name: "PWA/Nuxt",
      display: 'standalone',
      theme_color: '#F11010'
    },
    workbox: {
      dev: true // or use a global variable to track the current NODE_ENV, etc to determine dev mode
    }
  }
})
