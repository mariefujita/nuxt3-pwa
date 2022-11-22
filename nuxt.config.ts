// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	ssr: true,
	modules: ['@kevinmarrec/nuxt-pwa'],
	pwa: {
		meta: {
			mobileAppIOS: true,
			lang: 'ja',
		},
		manifest: {
			lang: 'ja',
			name: 'Nuxt3 SSR with PWA',
			short_name: 'PWA/Nuxt3',
			display: 'standalone',
			background_color: '#111827',
			theme_color: '#3B82F6',
			start_url: 'https://nuxt3-pwa-seven.vercel.app/',
		},
		workbox: {
			enabled: true,
		},
	},
});
