import tailwindcss from "@tailwindcss/vite";


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  css: [
    '~/assets/main.css'
  ],

  modules: ['@nuxt/content', '@nuxt/image'],

  vite: {
    optimizeDeps: {
      include: []
    },
    plugins: [
      tailwindcss(),
    ]
  },

  imports: {
    presets: [
      {
        from: 'content',
        imports: ['content'],
      },
    ],
  },

  image: {
    domains: ['www.google.com'],
    provider: 'ipx',
  },
})