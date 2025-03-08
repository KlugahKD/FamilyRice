// nuxt.config.ts
export default defineNuxtConfig({
  ssr: true,

  typescript: {
    strict: true,
    typeCheck: false
  },

  app: {
    head: {
      title: 'Family Rice - Wholesale & Retail',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          hid: 'description', 
          name: 'description', 
          content: 'Premium quality rice for wholesale and retail customers. Family Rice supplies the finest grains at competitive prices.'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    }
  },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],

  pinia: {
    autoImports: [
      'defineStore', 
      'storeToRefs'
    ],
  },

  imports: {
    dirs: ['stores', 'composables'],
  },

  build: {
    transpile: ['vue-toastification', 'pinia'],
  },

  // Set static generation for all pages since we don't need API calls
  nitro: {
    preset: 'static'
  },

  // Tailwind CSS configuration
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    injectPosition: 0,
    viewer: false,
  },

  ssr: true,
  nitro: {
    preset: 'static',
    prerender: {
      failOnError: false
    }
  },

  compatibilityDate: '2025-03-06'
})